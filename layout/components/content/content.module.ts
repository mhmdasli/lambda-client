import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LambdaSharedModule } from '@lambda/shared.module';

import { ContentComponent } from 'app/layout/components/content/content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports     : [
        RouterModule,
        LambdaSharedModule
    ],
    exports     : [
        ContentComponent
    ]
})
export class ContentModule
{
}
