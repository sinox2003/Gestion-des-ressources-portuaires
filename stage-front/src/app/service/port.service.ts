import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PortService {

  http=inject(HttpClient);

  getPort(id:number):Observable<any>{
    return this.http.get(`http://localhost:8085/ports/${id}`);
  }

  getPorts():Observable<any>{
    return this.http.get(`http://localhost:8085/ports`);
  }

  updatePort(port:any):Observable<any>{
    return this.http.put(`http://localhost:8085/ports`, port);
  }

  deletePort(id:number):Observable<any>{
    return this.http.delete(`http://localhost:8085/ports/${id}`);
  }

  createPort(port:any):Observable<any>{
    return this.http.post(`http://localhost:8085/ports`, port);
  }

}
