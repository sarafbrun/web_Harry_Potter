import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/movies"
  }

  getAllMovies() {

    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_hp')!
      })
    };
    return firstValueFrom(
      this.httpClient.get<any>(this.baseUrl, options)
    );
  }

}
