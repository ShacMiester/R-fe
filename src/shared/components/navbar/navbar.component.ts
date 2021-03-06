import { DomManipulationHelper } from './../../services/dom-helper.service';
import { NavbarService } from './../../services/navbar.service';
import { UserService } from './../../services/user.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { user } from 'src/shared/entities/user.entity';
import { NavBar } from '../../entities/navbar-item.entity';
import { Router } from '@angular/router';
import { CartService } from 'src/shared/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  height: string = ''
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    let element = document.querySelector('.main-app-container') as HTMLElement;
    if ($event.path[1].pageYOffset > 1) {
      element.classList.add('removeOpacity')
      element.classList.add('white-BG')
      element.classList.remove('main-container')
      this.height = $event.path[1].pageYOffset + 'px'
    } else if ($event.path[1].pageYOffset < 133) {
      element.classList.remove('removeOpacity')
      element.classList.remove('white-BG')
      element.classList.add('main-container')
      this.height = $event.path[1].pageYOffset + 'px'
    }
  }

  constructor(private UserService: UserService, private navbArService: NavbarService, private cartService:CartService) { }
  public animatePage = true;

  someBadge: number = 1;
  isLoggedIn: boolean = false;
  user!: user;
  isCollapsed = true;
  navBarConfigs!: NavBar;

  getTransform() {
    return `translateY(${this.height})`
  }
  shoppingCart : number= 0;

  ngOnInit(): void {
    this.getUserInfo();
    this.getNavBarConfigs();
    this.getCartItems();
  }
  getNavBarConfigs() {
    this.navbArService.getNavBarConfigs().subscribe(navBarConfigs => {
      this.navBarConfigs = navBarConfigs
    })
  }
  getCartItems() {
    this.cartService.getCartItems().subscribe(items => {
      this.shoppingCart = items.length;
    });
  }
  scrollToElement(id){
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  }
  getUserInfo() {
    this.UserService.login().subscribe((user) => {
      user ? (this.isLoggedIn = false) : false, (this.user = user);
    });
  }
}
