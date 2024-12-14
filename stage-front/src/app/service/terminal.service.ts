import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TerminalService {

  http=inject(HttpClient);

  getTerminals(): Observable<any>{
    return this.http.get<any>('http://localhost:8085/terminals')
  }

  getTerminal(id:number): Observable<any>{
    return this.http.get<any>(`http://localhost:8085/terminals/${id}`)
  }

  updateTerminal(terminal:any): Observable<any>{
    return this.http.put<any>(`http://localhost:8085/terminals`, terminal);
  }

  deleteTerminalById(id:any): Observable<any>{
    console.log(id)
    return this.http.delete<any>(`http://localhost:8085/terminals/${id}`)
  }

  deleteTerminal(terminal:any): Observable<any>{
    return this.http.delete<any>(`http://localhost:8085/terminals`,terminal)
  }



  addTerminal(terminal:any): Observable<any>{
    return this.http.post<any>(`http://localhost:8085/terminals`, terminal);
  }

}
