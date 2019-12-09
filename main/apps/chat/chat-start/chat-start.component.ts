import { Component, ViewEncapsulation } from '@angular/core';

import { lambdaAnimations } from '@lambda/animations';

@Component({
    selector     : 'chat-start',
    templateUrl  : './chat-start.component.html',
    styleUrls    : ['./chat-start.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : lambdaAnimations
})
export class ChatStartComponent
{
    constructor()
    {
    }
}
