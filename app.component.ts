import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { LambdaConfigService } from '@lambda/services/config.service';
import { LambdaNavigationService } from '@lambda/components/navigation/navigation.service';
import { LambdaSidebarService } from '@lambda/components/sidebar/sidebar.service';
import { LambdaSplashScreenService } from '@lambda/services/splash-screen.service';
import { LambdaTranslationLoaderService } from '@lambda/services/translation-loader.service';

import { navigation } from 'app/navigation/navigation';
import {CookieService} from 'ngx-cookie-service';
import {AuthService} from './auth.service';
import {MatPaginatorIntl} from '@angular/material';

@Component({
    selector   : 'app',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy
{
    lambdaConfig: any;
    navigation: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {DOCUMENT} document
     * @param {LambdaConfigService} _lambdaConfigService
     * @param {LambdaNavigationService} _lambdaNavigationService
     * @param {LambdaSidebarService} _lambdaSidebarService
     * @param {LambdaSplashScreenService} _lambdaSplashScreenService
     * @param {LambdaTranslationLoaderService} _lambdaTranslationLoaderService
     * @param {Platform} _platform
     * @param {TranslateService} _translateService
     * @param cookie
     * @param auth
     * @param matPag
     */
    constructor(
        @Inject(DOCUMENT) private document: any,
        private _lambdaConfigService: LambdaConfigService,
        private _lambdaNavigationService: LambdaNavigationService,
        private _lambdaSidebarService: LambdaSidebarService,
        private _lambdaSplashScreenService: LambdaSplashScreenService,
        private _lambdaTranslationLoaderService: LambdaTranslationLoaderService,
        private _translateService: TranslateService,
        private _platform: Platform,
        private cookie: CookieService,
        private auth: AuthService,
        private matPag: MatPaginatorIntl
    )
    {
        matPag.itemsPerPageLabel = 'פריטים בדף';
        // Get default navigation
        this.navigation = navigation;

        // Register the navigation to the service
        this._lambdaNavigationService.register('main', this.navigation);

        // Set the main navigation as our current navigation
        this._lambdaNavigationService.setCurrentNavigation('main');

        /**
         * ----------------------------------------------------------------------------------------------------
         * ngxTranslate Fix Start
         * ----------------------------------------------------------------------------------------------------
         */

        /**
         * If you are using a language other than the default one, i.e. Turkish in this case,
         * you may encounter an issue where some of the components are not actually being
         * translated when your app first initialized.
         *
         * This is related to ngxTranslate module and below there is a temporary fix while we
         * are moving the multi language implementation over to the Angular's core language
         * service.
         **/

        // Set the default language to 'en' and then back to 'tr'.
        // '.use' cannot be used here as ngxTranslate won't switch to a language that's already
        // been selected and there is no way to force it, so we overcome the issue by switching
        // the default language back and forth.
        /**
         setTimeout(() => {
            this._translateService.setDefaultLang('en');
            this._translateService.setDefaultLang('tr');
         });
         */

        /**
         * ----------------------------------------------------------------------------------------------------
         * ngxTranslate Fix End
         * ----------------------------------------------------------------------------------------------------
         */

        // Add is-mobile class to the body if the platform is mobile
        if ( this._platform.ANDROID || this._platform.IOS )
        {
            this.document.body.classList.add('is-mobile');
        }

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to config changes
        this._lambdaConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {

                this.lambdaConfig = config;

                // Boxed
                if ( this.lambdaConfig.layout.width === 'boxed' )
                {
                    this.document.body.classList.add('boxed');
                }
                else
                {
                    this.document.body.classList.remove('boxed');
                }

                // Color theme - Use normal for loop for IE11 compatibility
                for ( let i = 0; i < this.document.body.classList.length; i++ )
                {
                    const className = this.document.body.classList[i];

                    if ( className.startsWith('theme-') )
                    {
                        this.document.body.classList.remove(className);
                    }
                }

                this.document.body.classList.add(this.lambdaConfig.colorTheme);
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebarOpen(key): void
    {
        this._lambdaSidebarService.getSidebar(key).toggleOpen();
    }
}
