import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessoireService {
  http=inject(HttpClient);


  getAccessoires():Observable<any>{
    return this.http.get('http://localhost:8085/accessoires');
  }


}
