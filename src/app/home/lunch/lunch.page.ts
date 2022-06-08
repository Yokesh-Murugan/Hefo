import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.page.html',
  styleUrls: ['./lunch.page.scss'],
})
export class LunchPage implements OnInit {

    public dishCards = [
      { title: 'Chicken Briyani',
        image: 'assets/briyani.jfif',
        url: 'chickenbriyani'
      },  
    ]
  

  constructor() { }

  ngOnInit() {
  }

}
