import { Component } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  characters: any[];

  constructor(private charactersService: CharactersService) {
    this.characters = [];
  }

  async ngOnInit() {
    this.characters = await this.charactersService.getAllCharacters()
  }

}
