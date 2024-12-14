import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OperationManutentionService {

  http=inject(HttpClient);

  getOperation(id:number): Observable<any> {
    return this.http.get(`http://localhost:8085/operations/manutention/${id}`);
  }

  saveOperation(operationsManutention :any): Observable<any> {
    return this.http.post(`http://localhost:8085/operations/manutention`, operationsManutention);
  }

  updateOperation(operationsManutention :any): Observable<any> {
    return this.http.put(`http://localhost:8085/operations/manutention`, operationsManutention);
  }

}
