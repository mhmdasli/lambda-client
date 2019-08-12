import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { DocumentsDocumentsComponent } from 'app/main/apps/documents/document/document.component';
import { DocumentsDocumentsService } from 'app/main/apps/documents/documents.service';
import { FuseSidebarModule } from '@fuse/components';
import { FireComponent } from './fire/fire.component';

const routes = [
    {
        path     : 'documents',
        component: DocumentsDocumentsComponent,
        resolve  : {
            documents: DocumentsDocumentsService
        }
    },
    {
        path      : '**',
        redirectTo: 'documents'
    }
];

@NgModule({
    declarations: [
        DocumentsDocumentsComponent,
        FireComponent,
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,

        FuseSharedModule,
        FuseSidebarModule
    ],
    providers   : [
        DocumentsDocumentsService,
    ]
})
export class DocumentsModule
{
}
