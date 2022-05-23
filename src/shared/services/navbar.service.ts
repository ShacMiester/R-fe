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
      logo: 'assets/images/gallery/JASMINE_GRILL_KABAB2.png', name: 'LoaziTech Restaurant', items: [{
        name: 'Home',
        isScrollOnly: true,
        link: '/'
      }, {
        name: 'Our Story',
        isScrollOnly: true,
        link: '/',
        scrollTo:'story'
      },
      {
        name: 'Our Menu',
        link: 'menu-page'
      },
      {
        name: 'logo',
        type: 'logo',
        image: 'assets/images/logoCropped-removebg-preview.png'
      },
      {
        name: 'Menu',
        link: 'menu',
        isScrollOnly: true,
      },
      {
        name: 'Order Now',
        isScrollOnly: true,
        link: 'menu',
      },
      {
        name: 'Online catering',
        link: 'catering'
      }
      ],
    })
  }

}
