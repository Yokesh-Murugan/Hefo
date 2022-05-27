import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public dishCards = [
    { title: 'Breakfast',
      description: ' The first meal of the day, usually eaten in the morning. You should put more protein in your breakfast so you will grow. A meal consisting of food normally eaten in the morning, which may typically include eggs, sausages, toast, bacon, etc. We serve breakfast all day. A meal after fasting, or food in general.',
      image: 'assets/breakfast.jpg',
      url: 'breakfast'
    },
    { title: 'Fresh Juice',
    description:'Juices. While not a fruit, juice is sweet and consumed similarly to fruit juice. This usually refers to sweetened juice. Used in traditional medicine consumed and also used topically. Is a blend of passionfruit, orange and guava juices hence POG .',
    image: 'assets/fresh juice.jfif',
    url: 'juice'
    },
    
    { title: 'Lunch',
      description:'Lunch is the second meal of the day, after breakfast, and varies in size by culture and region. According to the Oxford English Dictionary ( OED ), the etymology of lunch is uncertain. It may have evolved from lump in a similar way to hunch, a derivative of hump, and bunch, a derivative of bump.',
      image: 'assets/lunch.jpg',
      url: 'lunch'
    },
    { title: 'Snacks',
    description:'Snack foods are a significant aspect of Indian cuisine, and are sometimes referred to as chaat . A traditional Indian snack, it is a fruit leather made out of mango pulp mixed with concentrated sugar solution and sun dried. It is a part of the South Indian and North Indian cuisine and is available is numerous varieties all over North India.',
    image: 'assets/snacks.jpeg',
    url: 'snacks'
    },   
    { title: 'Dinner',
      description:'Dinner usually refers to what is in many Western cultures the largest and most formal meal of the day, which some Westerners eat in the midday. Historically, the largest meal used to be eaten around midday, and called dinner.',
      image: 'assets/dinner.jpg',
      url: 'dinner'
    },

    
  ]

  constructor() { }

  ngOnInit() {
   
  }

}
