import {Component, Inject, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgForm} from '@angular/forms/src/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatMenuTrigger, MatSnackBar} from '@angular/material';
import {Subject} from 'rxjs';

import {FuseConfirmDialogComponent} from '@fuse/components/confirm-dialog/confirm-dialog.component';
import {FuseUtils} from '@fuse/utils';

import {ScrumboardService} from 'app/main/apps/scrumboard/scrumboard.service';
import {takeUntil} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {CardService} from './card.service';

@Component({
    selector: 'scrumboard-board-card-dialog',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ScrumboardCardDialogComponent implements OnInit, OnDestroy {
    card: any;
    board: any;
    list: any;
    fileToUpload: File = null;

    toggleInArray = FuseUtils.toggleInArray;
    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

    @ViewChild('checklistMenuTrigger')
    checklistMenu: MatMenuTrigger;

    @ViewChild('newCheckListTitleField')
    newCheckListTitleField;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {MatDialogRef<ScrumboardCardDialogComponent>} matDialogRef
     * @param _data
     * @param {MatDialog} _matDialog
     * @param {ScrumboardService} _scrumboardService
     * @param cookie
     * @param cardService
     * @param _snackBar
     */
    constructor(
        public matDialogRef: MatDialogRef<ScrumboardCardDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _matDialog: MatDialog,
        private _scrumboardService: ScrumboardService,
        private cookie: CookieService,
        private cardService: CardService,
        private _snackBar: MatSnackBar
    ) {
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
        this._scrumboardService.onBoardChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(board => {
                this.board = board;

                this.card = this.board.cards.find((_card) => {
                    return this._data.cardId === _card.id;
                });

                this.list = this.board.lists.find((_list) => {
                    return this._data.listId === _list.id;
                });
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
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Remove due date
     */
    removeDueDate(): void {
        this.card.due = '';
        this.updateCard();
    }

    /**
     * Toggle subscribe
     */
    toggleSubscribe(): void {
        this.card.subscribed = !this.card.subscribed;

        this.updateCard();
    }

    /**
     * Toggle cover image
     *
     * @param attachmentId
     */
    toggleCoverImage(attachmentId): void {
        if (this.card.idAttachmentCover === attachmentId) {
            this.card.idAttachmentCover = '';
        } else {
            this.card.idAttachmentCover = attachmentId;
        }

        this.updateCard();
    }


    /**
     * Remove checklist
     *
     * @param checklist
     */
    removeChecklist(checklist): void {
        this.card.checklists.splice(this.card.checklists.indexOf(checklist), 1);

        this.updateCard();
    }

    /**
     * Update checked count
     *
     * @param list
     */
    updateCheckedCount(list): void {
        const checkItems = list.checkItems;
        let checkedItems = 0;
        let allCheckedItems = 0;
        let allCheckItems = 0;

        for (const checkItem of checkItems) {
            if (checkItem.checked) {
                checkedItems++;
            }
        }

        list.checkItemsChecked = checkedItems;

        for (const item of this.card.checklists) {
            allCheckItems += item.checkItems.length;
            allCheckedItems += item.checkItemsChecked;
        }

        this.card.checkItems = allCheckItems;
        this.card.checkItemsChecked = allCheckedItems;

        this.updateCard();
    }

    /**
     * Remove checklist item
     *
     * @param checkItem
     * @param checklist
     */
    removeChecklistItem(checkItem, checklist): void {
        checklist.checkItems.splice(checklist.checkItems.indexOf(checkItem), 1);

        this.updateCheckedCount(checklist);

        this.updateCard();
    }

    /**
     * Add check item
     *
     * @param {NgForm} form
     * @param checkList
     */
    addCheckItem(form: NgForm, checkList): void {
        const checkItemVal = form.value.checkItem;

        if (!checkItemVal || checkItemVal === '') {
            return;
        }

        const newCheckItem = {
            'name': checkItemVal,
            'checked': false
        };

        checkList.checkItems.push(newCheckItem);

        this.updateCheckedCount(checkList);

        form.setValue({checkItem: ''});

        this.updateCard();
    }

    /**
     * Add checklist
     *
     * @param {NgForm} form
     */
    addChecklist(form: NgForm): void {
        this.card.checklists.push({
            id: FuseUtils.generateGUID(),
            name: form.value.checklistTitle,
            checkItemsChecked: 0,
            checkItems: []
        });

        form.setValue({checklistTitle: ''});
        form.resetForm();
        this.checklistMenu.closeMenu();
        this.updateCard();
    }

    /**
     * On checklist menu open
     */
    onChecklistMenuOpen(): void {
        setTimeout(() => {
            this.newCheckListTitleField.nativeElement.focus();
        });
    }

    /**
     * Add new comment
     *
     * @param {NgForm} form
     */
    addNewComment(form: NgForm): void {
        const newCommentText = form.value.newComment;
        const user = JSON.parse(this.cookie.get('user'));
        const now = Date().toString();
        const newComment = {
            idMember: user.id,
            message: newCommentText,
            time: now
        };

        this.card.comments.unshift(newComment);

        form.setValue({newComment: ''});

        this.updateCard();
    }

    /**
     * Remove card
     */
    removeCard(): void {
        this.confirmDialogRef = this._matDialog.open(FuseConfirmDialogComponent, {
            disableClose: false
        });

        this.confirmDialogRef.componentInstance.confirmMessage = 'האם אתה רוצה למחוק כרטיסיה זו?';

        this.confirmDialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.matDialogRef.close();
                this._scrumboardService.removeCard(this.card.id, this.list.id);
            }
        });
    }

    /**
     * handle file
     */
    handleFileInput(files: FileList): void {
        this.fileToUpload = files.item(0);
        this.uploadFileToActivity();
    }

    /**
     * upload new file
     *
     */
    uploadFileToActivity(): void {
        this.cardService.postFile(this.fileToUpload, this.card).then(result => {
            this.card.attachments.push(result);
            this._snackBar.open('קובץ נשמר בהצלחה', 'סגור', {
                duration: 3000,
            });
        });
    }

    /**
     * Remove attachment
     *
     * @param attachment
     */
    removeAttachment(attachment): void {
        if (attachment.id === this.card.idAttachmentCover) {
            this.card.idAttachmentCover = '';
        }

        this.cardService.removeFile(this.card, attachment.id).then(result => {
            if (result === 'success') {
                this.card.attachments.splice(this.card.attachments.indexOf(attachment), 1);

                this._snackBar.open('קובץ נמחק בהצלחה', 'סגור', {
                    duration: 3000,
                });
            } else {
                this._snackBar.open('קובץ לא נמחק', 'סגור', {
                    duration: 3000,
                });
            }
            this.updateCard();
        });
    }

    /**
     * Update card
     */
    updateCard(): void {
        this._scrumboardService.updateCard(this.card);
    }


}
