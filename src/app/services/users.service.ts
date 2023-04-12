import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/users';
  }



  registro(registroValues: any) {
    return firstValueFrom(
      this.httpClient.post(`${this.baseUrl}/register`, registroValues)
    )
  }

  login(loginValues: any) {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/login`, loginValues)
    )
  }





}
