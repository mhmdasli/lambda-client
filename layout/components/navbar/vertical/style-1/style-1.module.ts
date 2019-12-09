import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { LambdaNavigationModule } from '@lambda/components';
import { LambdaSharedModule } from '@lambda/shared.module';

import { NavbarVerticalStyle1Component } from 'app/layout/components/navbar/vertical/style-1/style-1.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        NavbarVerticalStyle1Component,
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,

        LambdaSharedModule,
        LambdaNavigationModule,
        RouterModule
    ],
    exports     : [
        NavbarVerticalStyle1Component
    ]
})
export class NavbarVerticalStyle1Module
{
}
