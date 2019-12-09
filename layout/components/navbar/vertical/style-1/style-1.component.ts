import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { delay, filter, take, takeUntil } from 'rxjs/operators';

import { LambdaConfigService } from '@lambda/services/config.service';
import { LambdaNavigationService } from '@lambda/components/navigation/navigation.service';
import { LambdaPerfectScrollbarDirective } from '@lambda/directives/lambda-perfect-scrollbar/lambda-perfect-scrollbar.directive';
import { LambdaSidebarService } from '@lambda/components/sidebar/sidebar.service';

@Component({
    selector     : 'navbar-vertical-style-1',
    templateUrl  : './style-1.component.html',
    styleUrls    : ['./style-1.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarVerticalStyle1Component implements OnInit, OnDestroy
{
    lambdaConfig: any;
    navigation: any;

    // Private
    private _lambdaPerfectScrollbar: LambdaPerfectScrollbarDirective;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {LambdaConfigService} _lambdaConfigService
     * @param {LambdaNavigationService} _lambdaNavigationService
     * @param {LambdaSidebarService} _lambdaSidebarService
     * @param {Router} _router
     */
    constructor(
        private _lambdaConfigService: LambdaConfigService,
        private _lambdaNavigationService: LambdaNavigationService,
        private _lambdaSidebarService: LambdaSidebarService,
        private _router: Router
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    // Directive
    @ViewChild(LambdaPerfectScrollbarDirective)
    set directive(theDirective: LambdaPerfectScrollbarDirective)
    {
        if ( !theDirective )
        {
            return;
        }

        this._lambdaPerfectScrollbar = theDirective;

        // Update the scrollbar on collapsable item toggle
        this._lambdaNavigationService.onItemCollapseToggled
            .pipe(
                delay(500),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this._lambdaPerfectScrollbar.update();
            });

        // Scroll to the active item position
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                take(1)
            )
            .subscribe(() => {
                    setTimeout(() => {
                        const activeNavItem: any = document.querySelector('navbar .nav-link.active');

                        if ( activeNavItem )
                        {
                            const activeItemOffsetTop       = activeNavItem.offsetTop,
                                  activeItemOffsetParentTop = activeNavItem.offsetParent.offsetTop,
                                  scrollDistance            = activeItemOffsetTop - activeItemOffsetParentTop - (48 * 3) - 168;

                            this._lambdaPerfectScrollbar.scrollToTop(scrollDistance);
                        }
                    });
                }
            );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                    if ( this._lambdaSidebarService.getSidebar('navbar') )
                    {
                        this._lambdaSidebarService.getSidebar('navbar').close();
                    }
                }
            );

        // Subscribe to the config changes
        this._lambdaConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.lambdaConfig = config;
            });

        // Get current navigation
        this._lambdaNavigationService.onNavigationChanged
            .pipe(
                filter(value => value !== null),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this.navigation = this._lambdaNavigationService.getCurrentNavigation();
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
     * Toggle sidebar opened status
     */
    toggleSidebarOpened(): void
    {
        this._lambdaSidebarService.getSidebar('navbar').toggleOpen();
    }

    /**
     * Toggle sidebar folded status
     */
    toggleSidebarFolded(): void
    {
        this._lambdaSidebarService.getSidebar('navbar').toggleFold();
    }
}
