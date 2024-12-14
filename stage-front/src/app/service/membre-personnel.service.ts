import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MembrePersonnelService {

  http=inject(HttpClient);

  getPersonnel(): Observable<any>{
    return this.http.get<any>("http://localhost:8085/personnel");
  }

  getPersonnelByTerminalId(terminalId:number):Observable<any>{
    return this.http.get<any>(`http://localhost:8085/personnel/terminal/${terminalId}`);
  }

  getPersonnelByTerminalIdWithoutEquipe(terminalId:number):Observable<any>{
    return this.http.get<any>(`http://localhost:8085/personnel/terminal/without_equipe/${terminalId}`);
  }

  getMembrePersonnelByMatricule(matricule: string, terminalId: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8085/personnel/search?matricule=${matricule}&terminalId=${terminalId}`);
  }


}
