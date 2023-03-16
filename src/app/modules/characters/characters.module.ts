import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CharactersRoutingModule } from "./characters-routing.modules";
import { CharacterComponent } from "./components/character/character.component";
import { CharactersListComponent } from "./components/characters-list/characters-list.component";
import { CharactersService } from "./services/characters.service";
import { MyMaterialModule } from "../my-material/my-material.module";

@NgModule({
  imports: [CommonModule, CharactersRoutingModule, MyMaterialModule],
  declarations: [CharactersListComponent, CharacterComponent],
  providers: [CharactersService]
})
export class CharactersModule { }
