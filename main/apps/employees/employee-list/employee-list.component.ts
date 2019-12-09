import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { lambdaAnimations } from '@lambda/animations';
import { LambdaConfirmDialogComponent } from '@lambda/components/confirm-dialog/confirm-dialog.component';

import { EmployeesService } from 'app/main/apps/employees/employees.service';
import { EmployeesEmployeeFormDialogComponent } from 'app/main/apps/employees/employee-form/employee-form.component';

@Component({
    selector     : 'employees-employee-list',
    templateUrl  : './employee-list.component.html',
    styleUrls    : ['./employee-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : lambdaAnimations
})
export class EmployeesEmployeeListComponent implements OnInit, OnDestroy
{
    @ViewChild('dialogContent')
    dialogContent: TemplateRef<any>;

    employees: any;
    user: any;
    dataSource: FilesDataSource | null;
    displayedColumns = ['checkbox', 'name', 'email', 'phone', 'jobTitle', 'buttons'];
    selectedEmployees: any[];
    checkboxes: {};
    dialogRef: any;
    confirmDialogRef: MatDialogRef<LambdaConfirmDialogComponent>;

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
        this.dataSource = new FilesDataSource(this._employeesService);

        this._employeesService.onEmployeesChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(employees => {
                this.employees = employees;

                this.checkboxes = {};
                employees.map(employee => {
                    this.checkboxes[employee.id] = false;
                });
            });

        this._employeesService.onSelectedEmployeesChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(selectedEmployees => {
                for ( const id in this.checkboxes )
                {
                    if ( !this.checkboxes.hasOwnProperty(id) )
                    {
                        continue;
                    }

                    this.checkboxes[id] = selectedEmployees.includes(id);
                }
                this.selectedEmployees = selectedEmployees;
            });

        this._employeesService.onUserDataChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(user => {
                this.user = user;
            });

        this._employeesService.onFilterChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this._employeesService.deselectEmployees();
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
     * Edit employee
     *
     * @param employee
     */
    editEmployee(employee): void
    {
        this.dialogRef = this._matDialog.open(EmployeesEmployeeFormDialogComponent, {
            panelClass: 'employee-form-dialog',
            data      : {
                employee: employee,
                action : 'edit'
            }
        });

        this.dialogRef.afterClosed()
            .subscribe(response => {
                if ( !response )
                {
                    return;
                }
                const actionType: string = response[0];
                const formData: FormGroup = response[1];
                switch ( actionType )
                {
                    /**
                     * Save
                     */
                    case 'save':

                        this._employeesService.updateEmployee(formData.getRawValue());

                        break;
                    /**
                     * Delete
                     */
                    case 'delete':

                        this.deleteEmployee(employee);

                        break;
                }
            });
    }

    /**
     * Delete Employee
     */
    deleteEmployee(employee): void
    {
        this.confirmDialogRef = this._matDialog.open(LambdaConfirmDialogComponent, {
            disableClose: false
        });

        this.confirmDialogRef.componentInstance.confirmMessage = 'האם ברצונך למחוק משתמש זה?';

        this.confirmDialogRef.afterClosed().subscribe(result => {
            if ( result )
            {
                this._employeesService.deleteEmployee(employee);
            }
            this.confirmDialogRef = null;
        });

    }

    /**
     * On selected change
     *
     * @param employeeId
     */
    onSelectedChange(employeeId): void
    {
        this._employeesService.toggleSelectedEmployee(employeeId);
    }

    /**
     * Toggle star
     *
     * @param employeeId
     */
    toggleStar(employeeId): void
    {
        if ( this.user.starred.includes(employeeId) )
        {
            this.user.starred.splice(this.user.starred.indexOf(employeeId), 1);
        }
        else
        {
            this.user.starred.push(employeeId);
        }

        this._employeesService.updateUserData(this.user);
    }
}

export class FilesDataSource extends DataSource<any>
{
    /**
     * Constructor
     *
     * @param {EmployeesService} _employeesService
     */
    constructor(
        private _employeesService: EmployeesService
    )
    {
        super();
    }

    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @returns {Observable<any[]>}
     */
    connect(): Observable<any[]>
    {
        return this._employeesService.onEmployeesChanged;
    }

    /**
     * Disconnect
     */
    disconnect(): void
    {
    }
}
