import { Component, ViewEncapsulation } from '@angular/core';

import { lambdaAnimations } from '@lambda/animations';

@Component({
    selector     : 'profile',
    templateUrl  : './profile.component.html',
    styleUrls    : ['./profile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : lambdaAnimations
})
export class ProfileComponent
{
    /**
     * Constructor
     */
    constructor()
    {

    }
}
