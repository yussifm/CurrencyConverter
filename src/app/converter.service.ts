import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExchangeRateRespons} from './payload/exchange-rate-respons';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor(private httpclient: HttpClient) {
  }

   getRates(base: string): Observable<ExchangeRateRespons> {
    return  this.httpclient.get<ExchangeRateRespons>(`GET https://api.exchangeratesapi.io/latest?base=${base}`);
   }
}
