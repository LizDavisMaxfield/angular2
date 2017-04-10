import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ActivitiesComponent } from './activities/activities.component';
import { GameComponent } from './game/game.component';
import { LevelComponent } from './level/level.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent, 
    ActivitiesComponent, GameComponent, LevelComponent, TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
