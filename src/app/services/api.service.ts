import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': 'bearer BxAyzg5qRIvkjnjALwzyhLQI7UzlOGrWp8taulSDJ-j9W6K3zsq4pmmX0BKn_y9oC4l4m1pCABF2DFd0i7CNkfXZf_yITQIswEsyy7h9zYcojA7ZAxrHLY70uiTQZf91Crd9z8PjtP2QHhD7q4rHTcpnlEXO8gMZqwqcPx2XpnGm3wVf5wMexLgRjGSd6ljWb2OP4XCf9WSdCONTReIyQw' })
  };


  constructor(private httpClient : HttpClient) { }

  getCircular() {
    console.log('loading circular');
    return this.httpClient.get(`https://fwstagingapi.immdemo.net/api/v1/Circular/Offers?memberid=141134&Plateform=2`,
    this.httpHeader);
  }
}
