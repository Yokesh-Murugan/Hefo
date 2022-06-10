import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.page.html',
  styleUrls: ['./dinner.page.scss'],
})
export class DinnerPage implements OnInit {

  public dishCards = [
    { title: 'Naan With Panneer Tikka',
      image: 'assets/naanpanner.jpg',
      url: 'naanpanner'
    },    
  ]

  constructor() { }

  ngOnInit() {
  }

}
