import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { MoviesModule } from './modules/movies/movies.module';
import { MyMaterialModule } from './modules/my-material/my-material.module';
import { CharactersModule } from './modules/characters/characters.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MoviesModule,
    CharactersModule,
    AppRoutingModule,
    MyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
