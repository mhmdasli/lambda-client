import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Employee } from 'app/main/apps/employees/employee.model';

@Component({
    selector     : 'employees-employee-form-dialog',
    templateUrl  : './employee-form.component.html',
    styleUrls    : ['./employee-form.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class EmployeesEmployeeFormDialogComponent
{
    action: string;
    employee: Employee;
    employeeForm: FormGroup;
    dialogTitle: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<EmployeesEmployeeFormDialogComponent>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        public matDialogRef: MatDialogRef<EmployeesEmployeeFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _formBuilder: FormBuilder
    )
    {
        // Set the defaults
        this.action = _data.action;

        if ( this.action === 'edit' )
        {
            this.dialogTitle = 'עדכן עובד';
            this.employee = _data.employee;
        }
        else
        {
            this.dialogTitle = 'עובד חדש';
            this.employee = new Employee({});
        }

        this.employeeForm = this.createEmployeeForm();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create employee form
     *
     * @returns {FormGroup}
     */
    createEmployeeForm(): FormGroup
    {
        return this._formBuilder.group({
            id      : [this.employee.id],
            name    : [this.employee.name],
            lastName: [this.employee.lastName],
            avatar  : [this.employee.avatar],
            nickname: [this.employee.nickname],
            company : [this.employee.company],
            jobTitle: [this.employee.jobTitle],
            email   : [this.employee.email],
            phone   : [this.employee.phone],
            address : [this.employee.address],
            birthday: [this.employee.birthday],
            notes   : [this.employee.notes]
        });
    }
}
