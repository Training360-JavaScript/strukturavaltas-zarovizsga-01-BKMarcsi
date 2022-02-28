import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drug } from '../model/drug';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Drug[]>{
    return this.http.get<Drug[]>(`${this.apiUrl}`)
  }
}
