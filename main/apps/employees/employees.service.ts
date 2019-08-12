import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';

import { Employee } from 'app/main/apps/employees/employee.model';

@Injectable()
export class EmployeesService implements Resolve<any>
{
    onEmployeesChanged: BehaviorSubject<any>;
    onSelectedEmployeesChanged: BehaviorSubject<any>;
    onUserDataChanged: BehaviorSubject<any>;
    onSearchTextChanged: Subject<any>;
    onFilterChanged: Subject<any>;

    employees: Employee[];
    user: any;
    selectedEmployees: string[] = [];

    searchText: string;
    filterBy: string;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the defaults
        this.onEmployeesChanged = new BehaviorSubject([]);
        this.onSelectedEmployeesChanged = new BehaviorSubject([]);
        this.onUserDataChanged = new BehaviorSubject([]);
        this.onSearchTextChanged = new Subject();
        this.onFilterChanged = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getEmployees(),
                this.getUserData()
            ]).then(
                ([files]) => {

                    this.onSearchTextChanged.subscribe(searchText => {
                        this.searchText = searchText;
                        this.getEmployees();
                    });

                    this.onFilterChanged.subscribe(filter => {
                        this.filterBy = filter;
                        this.getEmployees();
                    });

                    resolve();

                },
                reject
            );
        });
    }

    /**
     * Get employees
     *
     * @returns {Promise<any>}
     */
    getEmployees(): Promise<any>
    {
        return new Promise((resolve, reject) => {
                this._httpClient.get('api/employees-employees')
                    .subscribe((response: any) => {

                        this.employees = response;

                        if ( this.filterBy === 'starred' )
                        {
                            this.employees = this.employees.filter(_employee => {
                                return this.user.starred.includes(_employee.id);
                            });
                        }

                        if ( this.filterBy === 'frequent' )
                        {
                            this.employees = this.employees.filter(_employee => {
                                return this.user.frequentEmployees.includes(_employee.id);
                            });
                        }

                        if ( this.searchText && this.searchText !== '' )
                        {
                            this.employees = FuseUtils.filterArrayByString(this.employees, this.searchText);
                        }

                        this.employees = this.employees.map(employee => {
                            return new Employee(employee);
                        });

                        this.onEmployeesChanged.next(this.employees);
                        resolve(this.employees);
                    }, reject);
            }
        );
    }

    /**
     * Get user data
     *
     * @returns {Promise<any>}
     */
    getUserData(): Promise<any>
    {
        return new Promise((resolve, reject) => {
                this._httpClient.get('api/employees-user/5725a6802d10e277a0f35724')
                    .subscribe((response: any) => {
                        this.user = response;
                        this.onUserDataChanged.next(this.user);
                        resolve(this.user);
                    }, reject);
            }
        );
    }

    /**
     * Toggle selected employee by id
     *
     * @param id
     */
    toggleSelectedEmployee(id): void
    {
        // First, check if we already have that employee as selected...
        if ( this.selectedEmployees.length > 0 )
        {
            const index = this.selectedEmployees.indexOf(id);

            if ( index !== -1 )
            {
                this.selectedEmployees.splice(index, 1);

                // Trigger the next event
                this.onSelectedEmployeesChanged.next(this.selectedEmployees);

                // Return
                return;
            }
        }

        // If we don't have it, push as selected
        this.selectedEmployees.push(id);

        // Trigger the next event
        this.onSelectedEmployeesChanged.next(this.selectedEmployees);
    }

    /**
     * Toggle select all
     */
    toggleSelectAll(): void
    {
        if ( this.selectedEmployees.length > 0 )
        {
            this.deselectEmployees();
        }
        else
        {
            this.selectEmployees();
        }
    }

    /**
     * Select employees
     *
     * @param filterParameter
     * @param filterValue
     */
    selectEmployees(filterParameter?, filterValue?): void
    {
        this.selectedEmployees = [];

        // If there is no filter, select all employees
        if ( filterParameter === undefined || filterValue === undefined )
        {
            this.selectedEmployees = [];
            this.employees.map(employee => {
                this.selectedEmployees.push(employee.id);
            });
        }

        // Trigger the next event
        this.onSelectedEmployeesChanged.next(this.selectedEmployees);
    }

    /**
     * Update employee
     *
     * @param employee
     * @returns {Promise<any>}
     */
    updateEmployee(employee): Promise<any>
    {
        return new Promise((resolve, reject) => {

            this._httpClient.post('api/employees-employees/' + employee.id, {...employee})
                .subscribe(response => {
                    this.getEmployees();
                    resolve(response);
                });
        });
    }

    /**
     * Update user data
     *
     * @param userData
     * @returns {Promise<any>}
     */
    updateUserData(userData): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/employees-user/' + this.user.id, {...userData})
                .subscribe(response => {
                    this.getUserData();
                    this.getEmployees();
                    resolve(response);
                });
        });
    }

    /**
     * Deselect employees
     */
    deselectEmployees(): void
    {
        this.selectedEmployees = [];

        // Trigger the next event
        this.onSelectedEmployeesChanged.next(this.selectedEmployees);
    }

    /**
     * Delete employee
     *
     * @param employee
     */
    deleteEmployee(employee): void
    {
        const employeeIndex = this.employees.indexOf(employee);
        this.employees.splice(employeeIndex, 1);
        this.onEmployeesChanged.next(this.employees);
    }

    /**
     * Delete selected employees
     */
    deleteSelectedEmployees(): void
    {
        for ( const employeeId of this.selectedEmployees )
        {
            const employee = this.employees.find(_employee => {
                return _employee.id === employeeId;
            });
            const employeeIndex = this.employees.indexOf(employee);
            this.employees.splice(employeeIndex, 1);
        }
        this.onEmployeesChanged.next(this.employees);
        this.deselectEmployees();
    }

}
