import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TypeEquipementService {

  http=inject(HttpClient);
  private url='http://localhost:8085/type_equipements'

  get_Type_equipements_byTrafic(trafic:any):Observable<any>{
    return this.http.post<any>(this.url+'/trafic',trafic);
  }

  get_Type_equipements():Observable<any>{
    return this.http.get<any>(this.url);
  }


}
