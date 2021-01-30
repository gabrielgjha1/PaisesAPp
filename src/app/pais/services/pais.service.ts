import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { capital } from '../interfaces/capital.intefaces';
import { Pais } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.eu/rest/v2';

  constructor(private http:HttpClient) { }


  buscarPais(termino:string):Observable<Pais[]>{
    const url = `${this.apiUrl}/name/${termino}`

    return this.http.get<Pais[]>(url);


  }

  buscarCatpital(termino:string):Observable<capital[]>{

    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<capital[]>(url);



  }

  buscarUnPais(id:string):Observable<Pais>{

    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Pais>(url);



  }

  buscarUnaRegion(region:string):Observable<Pais[]>{

    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Pais[]>(url);

  }



}
