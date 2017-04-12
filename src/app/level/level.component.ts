import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-level',
  template: '<div [ngClass]="{blue: levelNumber % 2 !== 0}">This is level <span [ngClass]="getColor()">{{levelNumber}}</span></div>',
  styles: [`
    .blue {
      color: blue;
      font-size: 2em;
    }
    .orange{
      color: orange;
      font-size: 1em
    }`]
})
export class LevelComponent implements OnInit {
  @Input() levelObject: {number: number, name: string, content: string}
  levelNumber: number = 5;

  constructor() {
    this.levelNumber = Math.floor(Math.random()*10) + 1;
    console.log(this.levelNumber)
   }

  ngOnInit() {
  }

  getColor() {
    return this.levelNumber % 2 === 0 ? "blue" : "orange";
  }
}
