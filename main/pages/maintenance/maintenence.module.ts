import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LambdaSharedModule } from '@lambda/shared.module';

import { MaintenanceComponent } from 'app/main/pages/maintenance/maintenance.component';

const routes = [
    {
        path     : 'maintenance',
        component: MaintenanceComponent
    }
];

@NgModule({
    declarations: [
        MaintenanceComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        LambdaSharedModule
    ]
})
export class MaintenanceModule
{
}
