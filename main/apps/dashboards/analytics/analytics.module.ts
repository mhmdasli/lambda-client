import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { LambdaSharedModule } from '@lambda/shared.module';
import { LambdaWidgetModule } from '@lambda/components/widget/widget.module';

import { AnalyticsDashboardComponent } from 'app/main/apps/dashboards/analytics/analytics.component';
import { AnalyticsDashboardService } from 'app/main/apps/dashboards/analytics/analytics.service';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

const routes: Routes = [
    {
        path     : '**',
        component: AnalyticsDashboardComponent,
        resolve  : {
            data: AnalyticsDashboardService
        }
    }
];

@NgModule({
    declarations: [
        AnalyticsDashboardComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatTabsModule,

        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAKD_0LVV1NHDC76lhoWWc7BSsE7n4FUxQ'
        }),
        ChartsModule,
        NgxChartsModule,

        LambdaSharedModule,
        LambdaWidgetModule,
        NgxDatatableModule
    ],
    providers   : [
        AnalyticsDashboardService
    ]
})
export class AnalyticsDashboardModule
{
}

