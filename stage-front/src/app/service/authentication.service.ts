import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly JWT_TOKEN="JWT_TOKEN";


  private http=inject(HttpClient);
  private router=inject(Router);

  login(user:{
    matricule:string,mdp:string
  }):Observable<any> {

    return this.http.post<any>('http://localhost:8085/login',user).pipe((
      tap(response=>this.doLogin(user.matricule,response.token))
    ));
  }


  private doLogin(matricule: string, token:any) {

    localStorage.setItem(this.JWT_TOKEN,token);
    localStorage.setItem('USER',matricule);

  }

  public logout() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem('USER');
    this.router.navigate(['/login']);
  }



  isLoggedIn():boolean{
    return !!localStorage.getItem(this.JWT_TOKEN);
  }

  getCurrentAuthUser():any{

    const token:string | null = localStorage.getItem(this.JWT_TOKEN)
    const payload=atob(<string>token?.split(".")[1])

    return JSON.parse(<string>payload)


  }

}
