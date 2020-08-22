import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GLOBAL } from "./global";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class ArticuloService {
  
    public url : string;
  
    constructor(
      private _http: HttpClient
    ) {
      this.url = GLOBAL.url;
     }
     getArticuloFindOne(link : string) : Observable<any>{
      return this._http.get(this.url+'web/article/get',{
          params: new HttpParams().set('linkarticle', link)
      })
    }
  }