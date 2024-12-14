import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private http=inject(HttpClient);

  private apiUrl="http://localhost:8085/equipes"

  updateEquipe(equipe:any): Observable<any>{
    return this.http.put(this.apiUrl,equipe)
  }

  deleteEquipe(id:number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

}
