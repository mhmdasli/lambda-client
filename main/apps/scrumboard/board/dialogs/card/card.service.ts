import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import {environment} from '../../../../../../../environments/environment';
import {Card} from '../../../card.model';

@Injectable({
    providedIn: 'root'
})
export class CardService {

    constructor(private _httpClient: HttpClient
    ) {
    }

    postFile(fileToUpload: File, card: Card): Promise<unknown> {
        const formData: FormData = new FormData();
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        return new Promise((resolve, reject) => {
            this._httpClient.post(environment.apiUrl + 'scrumboard/board-file-upload/' + card.id, formData)
                .subscribe(response => {
                    resolve(response);
                }, reject);
        });
    }

    removeFile(card, fileId): Promise<any> {
        const formData: FormData = new FormData();
        formData.append('fileId', fileId);
        return new Promise((resolve, reject) => {
            this._httpClient.post(environment.apiUrl + 'scrumboard/board-file-remove/' + card.id , formData)
                .subscribe(response => {
                    resolve(response);
                }, reject);
        });
    }
}
