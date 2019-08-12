import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';

import { EmployeesService } from 'app/main/apps/employees/employees.service';

@Component({
    selector   : 'selected-bar',
    templateUrl: './selected-bar.component.html',
    styleUrls  : ['./selected-bar.component.scss']
})
export class EmployeesSelectedBarComponent implements OnInit, OnDestroy
{
    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
    hasSelectedEmployees: boolean;
    isIndeterminate: boolean;
    selectedEmployees: string[];

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {EmployeesService} _employeesService
     * @param {MatDialog} _matDialog
     */
    constructor(
        private _employeesService: EmployeesService,
        public _matDialog: MatDialog
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this._employeesService.onSelectedEmployeesChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(selectedEmployees => {
                this.selectedEmployees = selectedEmployees;
                setTimeout(() => {
                    this.hasSelectedEmployees = selectedEmployees.length > 0;
                    this.isIndeterminate = (selectedEmployees.length !== this._employeesService.employees.length && selectedEmployees.length > 0);
                }, 0);
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Select all
     */
    selectAll(): void
    {
        this._employeesService.selectEmployees();
    }

    /**
     * Deselect all
     */
    deselectAll(): void
    {
        this._employeesService.deselectEmployees();
    }

    /**
     * Delete selected employees
     */
    deleteSelectedEmployees(): void
    {
        this.confirmDialogRef = this._matDialog.open(FuseConfirmDialogComponent, {
            disableClose: false
        });

        this.confirmDialogRef.componentInstance.confirmMessage = 'האם ברצונך למחוק לקוחות אלה?';

        this.confirmDialogRef.afterClosed()
            .subscribe(result => {
                if ( result )
                {
                    this._employeesService.deleteSelectedEmployees();
                }
                this.confirmDialogRef = null;
            });
    }
}
