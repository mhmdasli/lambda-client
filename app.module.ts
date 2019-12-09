import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {TranslateModule} from '@ngx-translate/core';
import 'hammerjs';

import {LambdaModule} from '@lambda/lambda.module';
import {LambdaSharedModule} from '@lambda/shared.module';
import {LambdaProgressBarModule, LambdaSidebarModule, LambdaThemeOptionsModule} from '@lambda/components';

import {lambdaConfig} from 'app/lambda-config';

import {FakeDbService} from 'app/fake-db/fake-db.service';
import {AppComponent} from 'app/app.component';
import {AppStoreModule} from 'app/store/store.module';
import {LayoutModule} from 'app/layout/layout.module';
import {AuthGuard} from './auth.guard';
import {AuthService} from './auth.service';
import {CookieService} from 'ngx-cookie-service';
import {ErrorInterceptor} from './helpers/error.interceptor';
import {JwtInterceptor} from './helpers/jwt.interceptor';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'pages/auth/login',
        pathMatch: 'full'
    },
    {
        path: 'apps',
        loadChildren: './main/apps/apps.module#AppsModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'pages',
        loadChildren: './main/pages/pages.module#PagesModule',
    },
    {
        path: '**',
        redirectTo: 'apps/dashboards/analytics',
        canActivate: [AuthGuard]
    },
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Lambda modules
        LambdaModule.forRoot(lambdaConfig),
        LambdaProgressBarModule,
        LambdaSharedModule,
        LambdaSidebarModule,
        LambdaThemeOptionsModule,

        // App modules
        LayoutModule,
        AppStoreModule,
    ],
    providers: [AuthService, AuthGuard, CookieService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
