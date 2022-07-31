import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) { }

  url: any = "http://localhost:3000/posts"

  getData():any {
    return this.http.get(this.url);
  }
}
