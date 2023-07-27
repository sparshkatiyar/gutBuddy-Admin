import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor(
    private sessionStorage: SessionStorageService
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // debugger
    let userData = this.sessionStorage['getDataFromSessionStorage']("gutBuddyAdmin");
    var token;
    if (userData && userData != "undefined") {
      // console.log(userData);

      if (typeof userData == 'string') {
        token = JSON.parse(userData).token;
      }
    }
    else {
      token = "";
    }

    let url = "";

    url = req.url;

    const copiedReq = req.clone({
      headers: req.headers.append("token", token),
      url: url,
    });
    return next.handle(copiedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error.status, "Some Error");
        if (error.status == 401) {
          sessionStorage.removeItem("gutBuddyAdmin");
        }

        // if (error.error && (error.error.message == "Invalid token." || error.error.message == "Access token missing")) {
        //   sessionStorage.removeItem("gutBuddyAdmin");
        //   this.router.navigate(["/login"]);
        // }
        return throwError(error);
      })
    );
  }
}
