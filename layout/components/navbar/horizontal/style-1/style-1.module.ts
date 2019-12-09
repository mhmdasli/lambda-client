import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { LambdaNavigationModule } from '@lambda/components';
import { LambdaSharedModule } from '@lambda/shared.module';

import { NavbarHorizontalStyle1Component } from 'app/layout/components/navbar/horizontal/style-1/style-1.component';

@NgModule({
    declarations: [
        NavbarHorizontalStyle1Component
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,

        LambdaSharedModule,
        LambdaNavigationModule
    ],
    exports     : [
        NavbarHorizontalStyle1Component
    ]
})
export class NavbarHorizontalStyle1Module
{
}
