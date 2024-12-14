import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NormeProductiviteService {

  http=inject(HttpClient);

  url="http://localhost:8085/parametrage/manutention/norme_productivite"

  updateNormeProductivite(normeProductivite:any):Observable<any> {
    return this.http.put<any>(this.url, normeProductivite);
  }

  deleteNormeProductivite(id:number){
    return this.http.delete<any>(`${this.url}/${id}`);
  }

}
