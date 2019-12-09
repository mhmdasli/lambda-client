import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

import { LambdaSharedModule } from '@lambda/shared.module';

import { ForgotPasswordComponent } from 'app/main/pages/authentication/forgot-password/forgot-password.component';

const routes = [
    {
        path     : 'auth/forgot-password',
        component: ForgotPasswordComponent
    }
];

@NgModule({
    declarations: [
        ForgotPasswordComponent
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
export class ForgotPasswordModule
{
}
