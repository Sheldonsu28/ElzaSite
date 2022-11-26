import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MontageInfo } from './montageTypes';

@Injectable({
  providedIn: 'root'
})
export class MontagesService {

  private url:string;

  constructor(private http: HttpClient) { 
    this.url = environment.hostURL;
  }

  fetchAllMontange():Observable<MontageInfo>{
    return this.http.get(this.url + '/montages/fetchAllMontages');
  }

  fetchAllDerivativeWork():Observable<MontageInfo>{
    return this.http.get(this.url + '/montages/fetchAllMontages');
  }

  fetchAllStreamRecordings():Observable<MontageInfo>{
    return this.http.get(this.url + '/montages/fetchAllMontages');
  }

  
}
