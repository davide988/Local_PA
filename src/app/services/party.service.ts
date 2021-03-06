
import { Party } from './party.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PartyService {
  private url = 'http://localhost:8888/auth_app/api';
  constructor(private http: HttpClient) { }

  create(party: Party) {
    return this.http.post(`${this.url}/create-party.php`, party);
  }
/*
  login(credentials: User): Observable<string> {
    return this.http.post<{ token: string }>(`${this.url}/login.php`, credentials).pipe(
        map(response => response.token)
    );
  }
  */
}
