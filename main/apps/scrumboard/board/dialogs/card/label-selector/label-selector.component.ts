import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { lambdaAnimations } from '@lambda/animations';
import { LambdaUtils } from '@lambda/utils';

import { ScrumboardService } from 'app/main/apps/scrumboard/scrumboard.service';

@Component({
    selector     : 'scrumboard-label-selector',
    templateUrl  : './label-selector.component.html',
    styleUrls    : ['./label-selector.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : lambdaAnimations
})

export class ScrumboardLabelSelectorComponent implements OnInit, OnDestroy
{
    @Input('card')
    card: any;

    @Output()
    cardLabelsChanged: EventEmitter<any>;

    board: any;
    labelsMenuView: string;
    selectedLabel: any;
    newLabel: any;
    toggleInArray: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ScrumboardService} _scrumboardService
     */
    constructor(
        private _scrumboardService: ScrumboardService
    )
    {
        // Set the defaults
        this.cardLabelsChanged = new EventEmitter();
        this.labelsMenuView = 'labels';
        this.newLabel = {
            'id'   : '',
            'name' : '',
            'color': 'blue-400'
        };
        this.toggleInArray = LambdaUtils.toggleInArray;

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
        this._scrumboardService.onBoardChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(board => {
                this.board = board;
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
     * Card labels changed
     */
    onCardLabelsChanged(): void
    {
        this.cardLabelsChanged.next();
    }

    /**
     * On label change
     */
    onLabelChange(): void
    {
        this._scrumboardService.updateBoard();
    }

    /**
     * Add new label
     */
    addNewLabel(): void
    {
        this.newLabel.id = LambdaUtils.generateGUID();
        this.board.labels.push(Object.assign({}, this.newLabel));
        this.newLabel.name = '';
        this.labelsMenuView = 'labels';
    }
}
