import { NavBar } from './../entities/navbar-item.entity';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  getNavBarConfigs(): Observable<NavBar> {
    return of({
      logo: 'assets/images/logoCropped-removebg-preview.png', name: 'LoaziTech Restaurant', items: [{
        name: 'Home',
        isScrollOnly: true,
        link:'/home'
      }, {
        name: 'Our Story',
        isScrollOnly: false,
        link:'/ourStory'
      },
      {
        name:'logo',
        type:'logo',
        image:'assets/images/logoCropped-removebg-preview.png'
      },
       {
        name: 'Menu',
        link:'menu',
        isScrollOnly: true
      },
      {
        name: 'Order Now',
        isScrollOnly: true
      }],
    })
  }

}
