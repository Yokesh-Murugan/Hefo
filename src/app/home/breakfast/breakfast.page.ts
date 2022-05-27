import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.page.html',
  styleUrls: ['./breakfast.page.scss'],
})
export class BreakfastPage implements OnInit {

  public dishCards = [
    { title: 'Rava Idli With Coconut Chatney',
      image: 'assets/ravaidli.jpg',
      url: 'breakfast'
    },
    { title: 'Masala Dosa With Peanut Chatney',
      image: 'assets/masaladosa.jpg',
      url: 'lunch'
    },
    { title: 'Rava Utthapam',
      image: 'assets/ravauttapam.webp',
      url: 'dinner'
    },
    { title: 'Adai',
      image: 'assets/adaidosa.jpg',
      url: 'snacks'
    },
    { title: 'Semiya Upma',
      image: 'assets/semiyaupma.png',
      url: 'juice'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
