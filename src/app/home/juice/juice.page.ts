import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juice',
  templateUrl: './juice.page.html',
  styleUrls: ['./juice.page.scss'],
})
export class JuicePage implements OnInit {

  public dishCards = [
    { title: 'Apple Juice',
      image: 'assets/apple.jpg',
      url: 'apple'
    },  
  ]


  constructor() { }

  ngOnInit() {
  }

}
