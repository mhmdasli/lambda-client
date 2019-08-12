import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable()
export class ChatPanelService {
    contacts: any[];
    chats: any[];
    user: any;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    ) {
    }

    /**
     * Loader
     *
     * @returns {Promise<any> | any}
     */
    loadContacts(): Promise<any> | any {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getContacts(),
                this.getUser()
            ]).then(
                ([contacts, user]) => {
                    this.contacts = contacts;
                    this.user = user;
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get chat
     *
     * @param contactId
     * @returns {Promise<any>}
     */
    getChat(contactId): Promise<any> {
        // Get the chat
        return new Promise((resolve, reject) => {
            this._httpClient.get(environment.apiUrl + 'chat/chat-panel-chats/' + contactId)
                .subscribe((chat) => {
                    // Resolve the promise
                    resolve(chat);
                }, reject);
        });
    }

    /**
     * Update the chat
     *
     * @param contactId
     * @param message
     * @returns {Promise<any>}
     */
    updateChat(contactId, message): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.post(environment.apiUrl + 'chat/chat-panel-chats/' + contactId, message)
                .subscribe(updatedChat => {
                    resolve(updatedChat);
                }, reject);
        });
    }

    /**
     * Get contacts
     *
     * @returns {Promise<any>}
     */
    getContacts(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get(environment.apiUrl + 'chat/chat-panel-contacts')
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Get user
     *
     * @returns {Promise<any>}
     */
    getUser(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get(environment.apiUrl + 'chat/chat-panel-user')
                .subscribe((response: any) => {
                    resolve(response[0]);
                }, reject);
        });
    }
}
