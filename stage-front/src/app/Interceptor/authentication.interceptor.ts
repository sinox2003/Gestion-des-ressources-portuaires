
import { HttpInterceptorFn } from '@angular/common/http';
import {catchError, throwError} from "rxjs";
import {inject} from "@angular/core";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('JWT_TOKEN');
  const router=inject(Router)

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

  }


  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401 || error.status === 403){
        localStorage.removeItem('JWT_TOKEN');
        localStorage.removeItem('USER');
        router.navigate(['login']);
      }
      return throwError('Session expired');
    })
  );
};
