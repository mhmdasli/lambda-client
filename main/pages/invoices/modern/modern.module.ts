import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '@fuse/shared.module';

import {InvoiceService} from 'app/main/pages/invoices/invoice.service';
import {InvoiceModernComponent} from 'app/main/pages/invoices/modern/modern.component';
import {MatIconModule, MatButtonModule} from '@angular/material';

const routes = [
    {
        path: 'invoices/modern',
        component: InvoiceModernComponent,
        resolve: {
            search: InvoiceService
        }
    }
];

@NgModule({
    declarations: [
        InvoiceModernComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        FuseSharedModule,
        MatButtonModule,
        MatIconModule,
    ],
    providers: [
        InvoiceService
    ]
})
export class InvoiceModernModule {
}
