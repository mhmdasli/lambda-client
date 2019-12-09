import { Component, ViewEncapsulation } from '@angular/core';

import { LambdaConfigService } from '@lambda/services/config.service';
import { lambdaAnimations } from '@lambda/animations';

@Component({
    selector     : 'maintenance',
    templateUrl  : './maintenance.component.html',
    styleUrls    : ['./maintenance.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : lambdaAnimations
})
export class MaintenanceComponent
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
