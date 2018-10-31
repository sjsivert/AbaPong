import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player, PlayerObject } from 'app/model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerPlayer(player) {
    return this.http.post('/api/player/', player);
  }

}
