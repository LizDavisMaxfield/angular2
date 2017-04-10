import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]', // in brackets, it is not an element, it is now an attribute. 
  //selector: '.app-test, //it can also be a css class selector 
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
