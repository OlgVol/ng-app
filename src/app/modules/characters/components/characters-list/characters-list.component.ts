import { Component, NgModule, OnInit } from '@angular/core';
import { MyMaterialModule } from 'src/app/modules/my-material/my-material.module';
import { Character } from '../../classes/character';
import { CharactersService } from '../../services/characters.service';


@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  providers: [CharactersService]
})
export class CharactersListComponent implements OnInit {

  characters!: Character[];

  constructor(private charactersService: CharactersService) {}
  getCharacters(): void {
    this.charactersService.getCharacters()
    .then(characters => this.characters = characters);
  }

  ngOnInit(): void {
    this.getCharacters();

}
}
