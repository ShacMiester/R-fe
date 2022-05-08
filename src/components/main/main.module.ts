import { WorkingHoursComponent } from './../working-hours/working-hours.component';
import { HideElementDirective } from './../../Directives/hide-element.directive';
import { CartComponent } from '../cart/cart.component';
import { DynamicFormsAppModule } from './../../shared/dynamic-forms-app/dynamic-forms-app.module';
import { MainRoutingModule } from './main-routing.module';
import { GalleryComponent } from './../gallery/gallery.component';
import { FancyListComponent } from './../../shared/components/fancy-list/fancy-list.component';
import { ReservationComponent } from './../reseravation/reseravation.component';
import { SharedModule } from './../../shared/modules/shared.module';
import { MenuItemsComponent } from './../menu/menu-items/menu-items.component';
import { HeaderComponent } from './../header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from "@angular/material/card";
import { StoryPreFaceComponent } from '../story-pre-face/story-pre-face.component';
import { MatIconModule } from '@angular/material/icon';
import { WeeklyDealsComponent } from '../weekly-deals/weekly-deals.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MenuItemOptionCategoriesComponent } from '../menu/menu-item-option-categories/menu-item-option-categories.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    MenuItemsComponent,
    StoryPreFaceComponent,
    ReservationComponent,
    WeeklyDealsComponent,
    FancyListComponent,
    GalleryComponent,
    CartComponent,
    HideElementDirective,
    WorkingHoursComponent,
    MenuItemOptionCategoriesComponent

  ],
  imports: [
    CommonModule,
    NgbModule,
    MatButtonModule,
    MatCardModule,
    SharedModule,
    MatIconModule,
    MainRoutingModule,
    MatTabsModule,
    DynamicFormsAppModule
  ],
  exports: [
    CartComponent,
    HideElementDirective,

  ],
  providers: []
})
export class MainModule { }
