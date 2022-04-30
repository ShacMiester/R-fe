import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelService {

  constructor() { }

  getAdminPanelSections(): Observable<any> {
    return of(
      [
        {
          title: 'Dashboard',
          children: [{ title: 'Dashboard page', link: 'dashboard' }]
        },
        {
          title: 'Menu',
          children: [
            { title: 'Menu categories', link: 'menu-categories' },
            { title: 'Menu items', link: 'menu-standAlone-table' },
            { title: 'Special menu item form', link: 'menu-item-special-form' }
          ]
        },
        {
          title: 'Reservations',
          children: [
            { title: 'Requests', link: 'reservations' }
          ]
        },
        {
          title: 'Caterings',
          children: [
            { title: 'Table', link: 'catering-table' }
          ]
        },
        {
          title: 'Main page slider',
          children: [{ title: 'Table', link: 'carousel-items-table' }]
        },
        {
          title: 'Branches',
          children: [{ title: 'Manage Branches', link: 'branches' }]
        },
        {
          title: 'Working hours',
          children: [{ title: 'Manage', link: 'working-hours' }]
        }
      ])
  }
}
