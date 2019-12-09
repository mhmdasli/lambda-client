import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LambdaConfigService } from '@lambda/services/config.service';
import { lambdaAnimations } from '@lambda/animations';

@Component({
    selector     : 'coming-soon',
    templateUrl  : './coming-soon.component.html',
    styleUrls    : ['./coming-soon.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : lambdaAnimations
})
export class ComingSoonComponent implements OnInit
{
    comingSoonForm: FormGroup;

    /**
     * Constructor
     *
     * @param {LambdaConfigService} _lambdaConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _lambdaConfigService: LambdaConfigService,
        private _formBuilder: FormBuilder
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

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.comingSoonForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }
}
