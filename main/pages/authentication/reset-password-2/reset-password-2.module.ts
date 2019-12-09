import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

import { LambdaSharedModule } from '@lambda/shared.module';

import { ResetPassword2Component } from 'app/main/pages/authentication/reset-password-2/reset-password-2.component';

const routes = [
    {
        path     : 'auth/reset-password-2',
        component: ResetPassword2Component
    }
];

@NgModule({
    declarations: [
        ResetPassword2Component
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        LambdaSharedModule
    ]
})
export class ResetPassword2Module
{
}
