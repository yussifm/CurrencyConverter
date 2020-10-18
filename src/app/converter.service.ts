import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor(private httpclient: HttpClient) {
  }

   getRates(base: string): Observable<object> {
    return  this.httpclient.get(`GET https://api.exchangeratesapi.io/latest?base=${base}`);
   }
}
