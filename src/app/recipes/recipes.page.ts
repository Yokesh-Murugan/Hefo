import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  public dishCards = [
    { title: 'Rava Idli',
      image: 'assets/ravaidli.jpg',
      url: '/home/breakfast/ravaidli'
    },
    { title: 'Masala Dosa',
      image: 'assets/masaladosa.jpg',
      url: '/home/breakfast/masaladosa'
    },
    { title: 'Rava Utthapam',
      image: 'assets/ravauttapam.webp',
      url: '/home/breakfast/ravautthapam'
    },
    { title: 'Adai',
      image: 'assets/adaidosa.jpg',
      url: '/home/breakfast/adai'
    },
    { title: 'Semiya Upma',
      image: 'assets/semiyaupma.webp',
      url: '/home/breakfast/semiyaupma'
    },
    { title: 'Apple Juice',
      image: 'assets/apple.jpg',
      url: '/home/juice/apple'
    },
    { title: 'Chicken Briyani',
    image: 'assets/briyani.jfif',
    url: '/home/lunch/chickenbriyani'
  },
  { title: 'Ellu Barpi',
      image: 'assets/ellubarpi.webp',
      url: '/home/snacks/ellubarpi'
    }, 
    { title: 'Naan With Panneer Tikka',
    image: 'assets/naanpanner.jpg',
    url: '/home/dinner/naanpanner'
  },
  ]

  constructor() { }

  ngOnInit() {
  }

}
