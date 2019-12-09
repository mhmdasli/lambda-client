import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LambdaConfigService } from '@lambda/services/config.service';
import { lambdaAnimations } from '@lambda/animations';

@Component({
    selector     : 'lock',
    templateUrl  : './lock.component.html',
    styleUrls    : ['./lock.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : lambdaAnimations
})
export class LockComponent implements OnInit
{
    lockForm: FormGroup;

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
        this.lockForm = this._formBuilder.group({
            username: [
                {
                    value   : 'Katherine',
                    disabled: true
                }, Validators.required
            ],
            password: ['', Validators.required]
        });
    }
}
