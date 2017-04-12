import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-activities',
    templateUrl: './activities.component.html'
})

export class ActivitiesComponent implements OnInit {
    title = "Available Activities"
    allowNewGame = false;
    buttonText = "Add New Game";
    gameAdded = ""
    games = ["1", "2"];
    confirmMessage: string = "";

    constructor() {
        setTimeout(() => {
            this.allowNewGame = true
        }, 2000);
    }

    ngOnInit() {

    }

    onAddNewGame (newGame) {
       this.games.push(this.gameAdded)
       this.confirmMessage = "Game Created. The Game's name is" + this.buttonText;
    }

    onUpdateGameName (event:any) {
        this.buttonText = event.target.value
    }
}