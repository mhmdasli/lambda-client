import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

import { LambdaSharedModule } from '@lambda/shared.module';
import { LambdaCountdownModule } from '@lambda/components';

import { ComingSoonComponent } from 'app/main/pages/coming-soon/coming-soon.component';

const routes = [
    {
        path     : 'coming-soon',
        component: ComingSoonComponent
    }
];

@NgModule({
    declarations: [
        ComingSoonComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        LambdaSharedModule,
        LambdaCountdownModule
    ]
})
export class ComingSoonModule
{
}
