import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  http=inject(HttpClient);

  getProfiles(): Observable<any>{
    return this.http.get<any>('http://localhost:8085/profiles');
  }

  getProfile(id:number): Observable<any>{
    return this.http.get<any>(`http://localhost:8085/profiles/${id}`);
  }

  updateProfile(profile:any): Observable<any>{
    return this.http.put<any>(`http://localhost:8085/profiles`, profile);
  }

}
