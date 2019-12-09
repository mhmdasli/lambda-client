import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

import { LambdaSharedModule } from '@lambda/shared.module';

import { Login2Component } from 'app/main/pages/authentication/login-2/login-2.component';

const routes = [
    {
        path     : 'auth/login-2',
        component: Login2Component
    }
];

@NgModule({
    declarations: [
        Login2Component
    ],
    exports: [
        Login2Component
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        LambdaSharedModule
    ]
})
export class Login2Module
{
}
