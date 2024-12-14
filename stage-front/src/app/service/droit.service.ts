import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DroitService {

  http=inject(HttpClient);

  getDroits():Observable<any>{
    return this.http.get<any>("http://localhost:8085/droits");
  }
}
