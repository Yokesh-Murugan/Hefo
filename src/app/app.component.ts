import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Recipes', url: '/folder/Recipes', icon: 'fast-food' },
    { title: 'Health Benefits', url: '/folder/Health Benefits', icon: 'heart-circle' },
    { title: 'Settings', url: '/folder/Setting', icon: 'settings' },
    { title: 'About', url: '/folder/About', icon: 'information-circle'},
  ]

  constructor() {}
}
