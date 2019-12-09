import { Component, ViewEncapsulation } from '@angular/core';

import { LambdaConfigService } from '@lambda/services/config.service';
import { lambdaAnimations } from '@lambda/animations';

@Component({
    selector     : 'mail-confirm',
    templateUrl  : './mail-confirm.component.html',
    styleUrls    : ['./mail-confirm.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : lambdaAnimations
})
export class MailConfirmComponent
{
    /**
     * Constructor
     *
     * @param {LambdaConfigService} _lambdaConfigService
     */
    constructor(
        private _lambdaConfigService: LambdaConfigService
    )
    {
        // Configure the layout
        this._lambdaConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }
}
