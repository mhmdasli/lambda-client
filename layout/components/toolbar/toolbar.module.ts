import {defineInjectable, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule} from '@angular/material';

import {FuseSearchBarModule, FuseShortcutsModule} from '@fuse/components';
import {FuseSharedModule} from '@fuse/shared.module';

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

        FuseSharedModule,
        FuseSearchBarModule,
        FuseShortcutsModule,
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
