import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  title = "Choose this game."
  gameID = "1"
  username = "Placeholder Username"
  levels = [{name: "name", number: 8, content: "content"}];

  getGameID() {
    return this.gameID
  }

  onResetUsername(username) {
      this.username = ""
  }

  onAddLevel(){
    this.levels.push({name: this.username, number: 2, content: this.username + 'content'})
  }
}
