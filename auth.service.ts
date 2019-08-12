import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {environment} from '../environments/environment';

interface LoginData {
    token: string;
    user: object;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient, private cookie: CookieService, private router: Router) {
    }

    getToken(): any {
        return (this.cookie.get('token'));
    }

    setToken(token): any {
        this.cookie.set('token', token, 60);
    }

    deleteToken(): void {
        this.cookie.delete('token');
    }

    getUser(): any {
        return (this.cookie.get('user'));
    }

    setUser(user): any {
        this.cookie.set('user', user, 60);
    }

    deleteUser(): void {
        this.cookie.delete('user');
    }

    login(login: string, password: string): Observable<LoginData> {
        return this.http.post<LoginData>(environment.apiUrl + 'auth/login', {login, password});
    }

    logout(): void {
        // remove user from local storage to log user out
        this.deleteUser();
        this.deleteToken();
        this.router.navigate(['pages', 'auth', 'login']);
    }

    getUserDetails(login, password): Observable<LoginData> {
        return this.http.post<LoginData>(environment.apiUrl + 'auth/login', {
            login,
            password
        });
    }

    authUser(): any {

       return  this.http.get(environment.apiUrl + 'auth/me').subscribe(data => {

            if (data.hasOwnProperty('user')) {
                return true;
            }
            return false;
        });
    }
}
