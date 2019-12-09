import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {LambdaSidebarService} from '@lambda/components/sidebar/sidebar.service';
import {LambdaPerfectScrollbarDirective} from '@lambda/directives/lambda-perfect-scrollbar/lambda-perfect-scrollbar.directive';
import {ChatPanelService} from 'app/layout/components/chat-panel/chat-panel.service';
import io from 'socket.io-client';
import {MatSnackBar} from '@angular/material';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'chat-panel',
    templateUrl: './chat-panel.component.html',
    styleUrls: ['./chat-panel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ChatPanelComponent implements OnInit, AfterViewInit, OnDestroy {
    contacts: any[];
    chat: any;
    selectedContact: any;
    sidebarFolded: boolean;
    user: any;
    audio = new Audio();

    @ViewChild('replyForm')
    set replyForm(content: NgForm) {
        this._replyForm = content;
    }

    @ViewChild('replyInput')
    set replyInput(content: ElementRef) {
        this._replyInput = content;
    }

    private socket: any;

    @ViewChildren(LambdaPerfectScrollbarDirective)
    private _lambdaPerfectScrollbarDirectives: QueryList<LambdaPerfectScrollbarDirective>;

    // Private
    private _chatViewScrollbar: LambdaPerfectScrollbarDirective;
    private _replyForm: NgForm;
    private _replyInput: ElementRef;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ChatPanelService} _chatPanelService
     * @param {HttpClient} _httpClient
     * @param {LambdaSidebarService} _lambdaSidebarService
     * @param _snackBar
     */
    constructor(
        private _chatPanelService: ChatPanelService,
        private _httpClient: HttpClient,
        private _lambdaSidebarService: LambdaSidebarService,
        private _snackBar: MatSnackBar
    ) {

        this.audio.src = 'assets/sounds/chat_message.mp3';
        // Set the defaults
        this.selectedContact = null;
        this.sidebarFolded = true;

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {

        // Load the contacts
        this._chatPanelService.loadContacts().then(() => {

            this.contacts = this._chatPanelService.contacts;
            this.user = this._chatPanelService.user;

            this.socket = io.connect('https://lambda-services.kyzin.net/');

            this.socket.on('usersConnect', userId => {
                const contact = this.contacts.find(contact => contact.id === userId);
                if (contact) {
                    contact.status = 'online';
                }
            });
            this.socket.on('usersDisconnect', userId => {
                const contact = this.contacts.find(contact => contact.id === userId);
                if (contact) {
                    contact.status = 'offline';
                }
            });
            this.socket.on('chat message' + this.user.id, message => {
                if (this.chat) {
                    this.chat.dialog.push(message);
                    this._prepareChatForReplies();
                } else {
                    this.audio.play();
                    const contact = this.contacts.find(contact => contact.id === message.from);
                    contact.unread = (contact.unread * 1) + 1;
                    this._snackBar.open('התקבלה הודעה חדשה', 'סגור', {
                        duration: 3000,
                    });
                }
            });

        });
        // Subscribe to the foldedChanged observable
        this._lambdaSidebarService.getSidebar('chatPanel').foldedChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((folded) => {
                this.sidebarFolded = folded;
            });
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void {
        this._chatViewScrollbar = this._lambdaPerfectScrollbarDirectives.find((directive) => {
            return directive.elementRef.nativeElement.id === 'messages';
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Prepare the chat for the replies
     */
    private _prepareChatForReplies(): void {
        setTimeout(() => {

            // Focus to the reply input
            // this._replyInput.nativeElement.focus();

            // Scroll to the bottom of the messages list
            if (this._chatViewScrollbar) {
                this._chatViewScrollbar.update();

                setTimeout(() => {
                    this._chatViewScrollbar.scrollToBottom(0);
                });
            }
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Fold the temporarily unfolded sidebar back
     */
    foldSidebarTemporarily(): void {
        this._lambdaSidebarService.getSidebar('chatPanel').foldTemporarily();
    }

    /**
     * Unfold the sidebar temporarily
     */
    unfoldSidebarTemporarily(): void {
        this._lambdaSidebarService.getSidebar('chatPanel').unfoldTemporarily();
    }

    /**
     * Toggle sidebar opened status
     */
    toggleSidebarOpen(): void {
        this._lambdaSidebarService.getSidebar('chatPanel').toggleOpen();
    }

    /**
     * Decide whether to show or not the contact's avatar in the message row
     *
     * @param message
     * @param i
     * @returns {boolean}
     */
    shouldShowContactAvatar(message, i): boolean {
        return (
            message.from === this.selectedContact.id &&
            ((this.chat.dialog[i + 1] && this.chat.dialog[i + 1].from !== this.selectedContact.id) || !this.chat.dialog[i + 1])
        );
    }

    /**
     * Check if the given message is the first message of a group
     *
     * @param message
     * @param i
     * @returns {boolean}
     */
    isFirstMessageOfGroup(message, i): boolean {
        return (i === 0 || this.chat.dialog[i - 1] &&
            (this.chat.dialog[i - 1].from !== message.from ||
                this.chat.dialog[i - 1].to !== message.to));
    }

    /**
     * Check if the given message is the last message of a group
     *
     * @param message
     * @param i
     * @returns {boolean}
     */
    isLastMessageOfGroup(message, i): boolean {
        return (i === this.chat.dialog.length - 1 ||
            this.chat.dialog[i + 1] && this.chat.dialog[i + 1].from !== message.from ||
            this.chat.dialog[i + 1] && this.chat.dialog[i + 1].to !== message.to);
    }

    /**
     * Toggle chat with the contact
     *
     * @param contact
     */
    toggleChat(contact): void {
        // If the contact equals to the selectedContact,
        // that means we will deselect the contact and
        // unload the chat
        if (this.selectedContact && contact.id === this.selectedContact.id) {
            // Reset
            this.resetChat();
        }
        // Otherwise, we will select the contact, open
        // the sidebar and start the chat
        else {
            // Unfold the sidebar temporarily
            this.unfoldSidebarTemporarily();

            // Set the selected contact
            this.selectedContact = contact;

            // Load the chat
            this._chatPanelService.getChat(contact.id).then((chat) => {
                // Set the chat
                this.chat = chat;
                // set chat badge  to 0
                contact.unread = 0;

                // Prepare the chat for the replies
                this._prepareChatForReplies();
            });
        }
    }

    /**
     * Remove the selected contact and unload the chat
     */
    resetChat(): void {
        // Set the selected contact as null
        this.selectedContact = null;

        // Set the chat as null
        this.chat = null;
    }

    /**
     * Reply
     */
    reply(event): void {
        event.preventDefault();

        if (!this._replyForm.form.value.message) {
            return;
        }
        // Message
        const message = {
            from: this.user.id,
            to: this.selectedContact.id,
            message: this._replyForm.form.value.message,
            time: new Date().toISOString()
        };

        // Add the message to the chat
        this.chat.dialog.push(message);

        // Reset the reply form
        this._replyForm.reset();

        // Update the server
        this._chatPanelService.updateChat(this.chat.id, message).then(response => {
            this.socket.emit('reply', message);

            // Prepare the chat for the replies
            this._prepareChatForReplies();
        });
    }
}
