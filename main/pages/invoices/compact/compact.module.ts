import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LambdaSharedModule } from '@lambda/shared.module';

import { InvoiceService } from 'app/main/pages/invoices/invoice.service';
import { InvoiceCompactComponent } from 'app/main/pages/invoices/compact/compact.component';

const routes = [
    {
        path     : 'invoices/compact',
        component: InvoiceCompactComponent,
        resolve  : {
            search: InvoiceService
        }
    }
];

@NgModule({
    declarations: [
        InvoiceCompactComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        LambdaSharedModule
    ],
    providers   : [
        InvoiceService
    ]
})
export class InvoiceCompactModule
{
}
