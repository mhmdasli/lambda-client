import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

import { LambdaSharedModule } from '@lambda/shared.module';

import { LockComponent } from 'app/main/pages/authentication/lock/lock.component';

const routes = [
    {
        path     : 'auth/lock',
        component: LockComponent
    }
];

@NgModule({
    declarations: [
        LockComponent
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
export class LockModule
{
}
