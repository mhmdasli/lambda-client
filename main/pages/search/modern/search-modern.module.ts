import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule, MatTabsModule } from '@angular/material';

import { LambdaSharedModule } from '@lambda/shared.module';

import { SearchModernComponent } from 'app/main/pages/search/modern/search-modern.component';
import { SearchModernService } from 'app/main/pages/search/modern/search-modern.service';


const routes = [
    {
        path     : 'search/modern',
        component: SearchModernComponent,
        resolve  : {
            search: SearchModernService
        }
    }
];

@NgModule({
    declarations: [
        SearchModernComponent,
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatTabsModule,

        LambdaSharedModule
    ],
    providers   : [
        SearchModernService
    ]
})
export class SearchModernModule
{
}
