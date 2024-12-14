import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OperationMarineService {

  http=inject(HttpClient);

  getOperation(id:number): Observable<any> {
    return this.http.get(`http://localhost:8085/operations/marine/${id}`);
  }

  saveOperation(operation :any): Observable<any> {
    return this.http.post(`http://localhost:8085/operations/marine`, operation);
  }

  updateOperation(operation :any): Observable<any> {
    return this.http.put(`http://localhost:8085/operations/marine`, operation);
  }
}
