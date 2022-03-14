import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/components/admin/services/crud.service';
import { MenuCategoriesService } from './../services/menu-categories.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  // styleUrls: ['./menu-categories.component.scss']
})
export class MenuCategoriesComponent extends CrudService<any, number> implements OnInit {
  dataSource: any
  constructor(private router: Router, protected override _http: HttpClient) {
    super(_http, 'menuCategories');
  }

  ngOnInit(): void {
    this.getMenuItemCategoryForm();
  }

  getMenuItemCategoryForm() {
    this.findAll().subscribe({ next: (v) => { this.dataSource = v } })
  }

  performAction(event: { row: any, action: 'edit' | 'delete' | 'add' }) {
    switch (event.action) {
      case 'edit':
        this.router.navigate(['/admin', 'menu-categories-form'], { queryParams: { id: event.row.id, type: event.action } })
        break;
      case 'delete':
        this.delete(event.row.id).subscribe()
        break;
      case 'add':
        this.router.navigate(['/admin', 'menu-categories-form'], { queryParams: { id: event.row.id, type: event.action } })
        break;
    }
  }
}
