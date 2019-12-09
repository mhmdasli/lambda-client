import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { lambdaAnimations } from '@lambda/animations';

import { DocumentsDocumentsService } from 'app/main/apps/documents/documents.service';

@Component({
    selector   : 'documents-documents',
    templateUrl: './document.component.html',
    styleUrls  : ['./document.component.scss'],
    animations : lambdaAnimations
})
export class DocumentsDocumentsComponent implements OnInit, OnDestroy
{
    categories: any[];
    documents: any[];
    documentsFilteredByCategory: any[];
    filteredDocuments: any[];
    currentCategory: string;
    searchTerm: string;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {DocumentsDocumentsService} _documentsDocumentsService
     */
    constructor(
        private _documentsDocumentsService: DocumentsDocumentsService
    )
    {
        // Set the defaults
        this.currentCategory = 'all';
        this.searchTerm = '';

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
        // Subscribe to categories
        this._documentsDocumentsService.onCategoriesChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(categories => {
                this.categories = categories;
            });

        // Subscribe to documents
        this._documentsDocumentsService.onDocumentsChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(documents => {
                this.filteredDocuments = this.documentsFilteredByCategory = this.documents = documents;
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
     * Filter documents by category
     */
    filterDocumentsByCategory(): void
    {
        // Filter
        if ( this.currentCategory === 'all' )
        {
            this.documentsFilteredByCategory = this.documents;
            this.filteredDocuments = this.documents;
        }
        else
        {
            this.documentsFilteredByCategory = this.documents.filter((document) => {
                return document.category === this.currentCategory;
            });

            this.filteredDocuments = [...this.documentsFilteredByCategory];

        }

        // Re-filter by search term
        this.filterDocumentsByTerm();
    }

    /**
     * Filter documents by term
     */
    filterDocumentsByTerm(): void
    {
        const searchTerm = this.searchTerm.toLowerCase();

        // Search
        if ( searchTerm === '' )
        {
            this.filteredDocuments = this.documentsFilteredByCategory;
        }
        else
        {
            this.filteredDocuments = this.documentsFilteredByCategory.filter((document) => {
                return document.title.toLowerCase().includes(searchTerm);
            });
        }
    }
}
