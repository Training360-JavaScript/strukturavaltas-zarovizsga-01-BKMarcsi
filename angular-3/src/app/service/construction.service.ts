import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Construction } from '../model/construction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  apiUrl:string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Construction[]> {
    return this.http.get<Construction[]>(`${this.apiUrl}construction`);
  }

  get(id: number): Observable<Construction>{
    return this.http.get<Construction>(`${this.apiUrl}construction/${id}`);
  }

  update(construction: Construction): Observable<Construction>{
    return this.http.patch<Construction>(`${this.apiUrl}construction/${construction.id}`,construction);
  }

  delete(id: number): any{
    return this.http.delete<Construction>(`${this.apiUrl}construction/${id}`);
  }

}
