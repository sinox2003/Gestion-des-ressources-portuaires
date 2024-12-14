import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http=inject(HttpClient);

  getUser(matricule:string):Observable<any>{

    return this.http.get<any>(`http://localhost:8085/users/${matricule}`);
  }

  getUsers():Observable<any>{
    return this.http.get<any>(`http://localhost:8085/users`);
  }

  updateUser( user:any):Observable<any>{
    return this.http.put<any>(`http://localhost:8085/users`, user);
  }

  deleteUser(matricule:string):Observable<any>{
    return this.http.delete<any>(`http://localhost:8085/users/${matricule}`);
  }

  addUser(user:any):Observable<any>{
    return this.http.post<any>(`http://localhost:8085/users`, user);
  }

}
