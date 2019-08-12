import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AmazingTimePickerService} from 'amazing-time-picker';

export interface DialogData {
    animal: string;
    name: string;
}

@Component({
    selector: 'app-access-dialog',
    templateUrl: './access-dialog.component.html',
    styleUrls: ['./access-dialog.component.scss']
})
export class AccessDialogComponent implements OnInit {
    currentTime: any;

    constructor(
        public dialogRef: MatDialogRef<AccessDialogComponent>,
        private atp: AmazingTimePickerService,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {

    }

    ngOnInit(): void {
        this.currentTime = new Date().toLocaleTimeString();
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    open(): void {
        const amazingTimePicker = this.atp.open();
        amazingTimePicker.afterClose().subscribe(time => {
            this.currentTime = time;
        });
    }

}
