import {defineInjectable, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule} from '@angular/material';

import {LambdaSearchBarModule, LambdaShortcutsModule} from '@lambda/components';
import {LambdaSharedModule} from '@lambda/shared.module';

import {ToolbarComponent} from 'app/layout/components/toolbar/toolbar.component';
import {AccessDialogComponent} from './access-dialog/access-dialog.component';
import {AmazingTimePickerModule} from 'amazing-time-picker';


@NgModule({
    declarations: [
        ToolbarComponent,
        AccessDialogComponent,
    ],
    entryComponents: [AccessDialogComponent],
    imports: [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,

        LambdaSharedModule,
        LambdaSearchBarModule,
        LambdaShortcutsModule,
        MatDialogModule,
        MatInputModule,
    ],
    exports: [
        ToolbarComponent,
        AccessDialogComponent,
        AmazingTimePickerModule
    ]
})
export class ToolbarModule {
}
