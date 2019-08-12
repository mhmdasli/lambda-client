import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatRippleModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule
} from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule, FuseSidebarModule } from '@fuse/components';

import { EmployeesComponent } from 'app/main/apps/employees/employees.component';
import { EmployeesService } from 'app/main/apps/employees/employees.service';
import { EmployeesEmployeeListComponent } from 'app/main/apps/employees/employee-list/employee-list.component';
import { EmployeesSelectedBarComponent } from 'app/main/apps/employees/selected-bar/selected-bar.component';
import { EmployeesMainSidebarComponent } from 'app/main/apps/employees/sidebars/main/main.component';
import { EmployeesEmployeeFormDialogComponent } from 'app/main/apps/employees/employee-form/employee-form.component';

const routes: Routes = [
    {
        path     : '**',
        component: EmployeesComponent,
        resolve  : {
            employees: EmployeesService
        }
    }
];

@NgModule({
    declarations   : [
        EmployeesComponent,
        EmployeesEmployeeListComponent,
        EmployeesSelectedBarComponent,
        EmployeesMainSidebarComponent,
        EmployeesEmployeeFormDialogComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatTableModule,
        MatToolbarModule,

        FuseSharedModule,
        FuseConfirmDialogModule,
        FuseSidebarModule,
        MatTabsModule
    ],
    providers      : [
        EmployeesService
    ],
    entryComponents: [
        EmployeesEmployeeFormDialogComponent
    ]
})
export class EmployeesModule
{
}
