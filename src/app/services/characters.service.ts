import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/characters'
  }


  getAllCharacters() {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_hp')!
      })
    }
    return firstValueFrom(
      this.httpClient.get<any>(this.baseUrl, options)
    );
  }

  getCharacterById(characterId: number) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/${characterId}`)
    );
  }

}
