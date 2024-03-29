import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LambdaSidebarModule } from '@lambda/components';
import { LambdaSharedModule } from '@lambda/shared.module';

import { ChatPanelModule } from 'app/layout/components/chat-panel/chat-panel.module';
import { ContentModule } from 'app/layout/components/content/content.module';
import { FooterModule } from 'app/layout/components/footer/footer.module';
import { NavbarModule } from 'app/layout/components/navbar/navbar.module';
import { QuickPanelModule } from 'app/layout/components/quick-panel/quick-panel.module';
import { ToolbarModule } from 'app/layout/components/toolbar/toolbar.module';


import { VerticalLayout1Component } from 'app/layout/vertical/layout-1/layout-1.component';
import {identifierModuleUrl} from '@angular/compiler';

@NgModule({
    declarations: [
        VerticalLayout1Component
    ],
    imports     : [
        RouterModule,

        LambdaSharedModule,
        LambdaSidebarModule,

        ChatPanelModule,
        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule,
    ],
    exports     : [
        VerticalLayout1Component
    ]
})
export class VerticalLayout1Module
{
}
