import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TraficService {

  http=inject(HttpClient);

  getAllTrafics(): Observable<any>{
    return this.http.get<any>("http://localhost:8085/trafic");
  }

}
