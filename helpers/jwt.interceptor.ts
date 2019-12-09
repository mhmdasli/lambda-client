import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';

import {AuthService} from '../auth.service';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService, private cookie: CookieService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        if (this.cookie.get('token')) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.cookie.get('token')}`
                },
              //  withCredentials: true
            });
        }

        return next.handle(request);
    }
}
