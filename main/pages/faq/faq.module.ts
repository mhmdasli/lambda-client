import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatExpansionModule, MatIconModule } from '@angular/material';

import { LambdaSharedModule } from '@lambda/shared.module';

import { FaqService } from 'app/main/pages/faq/faq.service';
import { FaqComponent } from 'app/main/pages/faq/faq.component';

const routes = [
    {
        path     : 'faq',
        component: FaqComponent,
        resolve  : {
            faq: FaqService
        }
    }
];

@NgModule({
    declarations: [
        FaqComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatExpansionModule,
        MatIconModule,

        LambdaSharedModule
    ],
    providers   : [
        FaqService
    ]
})
export class FaqModule
{
}
