import {LambdaConfig} from '@lambda/types';

/**
 * Default Lambda Configuration
 *
 * You can edit these options to change the default options. All these options also can be
 * changed per component basis. See `app/main/pages/authentication/login/login.component.ts`
 * constructor method to learn more about changing these options per component basis.
 */

export const lambdaConfig: LambdaConfig = {
    // Color themes can be defined in src/app/app.theme.scss
    colorTheme: 'theme-default',
    customScrollbars: false,
    layout: {
        style: 'horizontal-layout-1',
        width: 'fullwidth',
        navbar: {
            primaryBackground: 'lambda-navy-700',
            secondaryBackground: 'lambda-navy-900',
            folded: false,
            hidden: false,
            position: 'top',
            variant: 'vertical-style-1'
        },
        toolbar: {
            customBackgroundColor: false,
            background: 'lambda-white-500',
            hidden: false,
            position: 'above'
        },
        footer: {
            customBackgroundColor: true,
            background: 'lambda-navy-900',
            hidden: true,
            position: 'below-fixed'
        },
        sidepanel: {
            hidden: false,
            position: 'left'
        }
    }
};
