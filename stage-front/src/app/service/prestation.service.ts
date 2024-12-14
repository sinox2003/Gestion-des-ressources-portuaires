import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  http=inject(HttpClient);

  getManutention_Prestations(): Observable<any>{
    return this.http.get<any>("http://localhost:8085/prestations/manutention");
  }
  getMarine_Prestations(): Observable<any>{
    return this.http.get<any>("http://localhost:8085/prestations/marine");
  }

}
