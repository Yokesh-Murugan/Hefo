import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.page.html',
  styleUrls: ['./snacks.page.scss'],
})
export class SnacksPage implements OnInit {
  public dishCards = [
    { title: 'Ellu Barpi',
      image: 'assets/ellubarpi.jpeg',
      url: 'ellubarpi'
    },  
  ]


  constructor() { }

  ngOnInit() {
  }

}
