import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainTheoriqueManutentionService {

  url='http://localhost:8085/parametrage/manutention/main_theorique';
  http=inject(HttpClient);

  deleteMainTheoriqueById (id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
  }

}