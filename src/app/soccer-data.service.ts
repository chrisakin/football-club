import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoccerDataService {
    API_KEY ='6776b0c7e8msh42db2a49d6c6123p14f878jsn22c078fcd85c';
  constructor(
    private httpClient: HttpClient
  ) { }

  getSports() {
    return this.httpClient.get(`https://api-football-v1.p.rapidapi.com&apiKey=${this.API_KEY}`);
  }

  
}
