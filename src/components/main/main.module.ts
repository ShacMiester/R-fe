import { FancyListComponent } from './../../shared/components/fancy-list/fancy-list.component';
import { ReservationComponent } from './../reseravation/reseravation.component';
import { SharedModule } from './../../shared/modules/shared.module';
import { ServicesComponent } from './../services/services.component';
import { MenuItemsComponent } from './../menu/menu-items/menu-items.component';
import { MenuPreFaceComponent } from './../menu/menu-pre-face/menu-pre-face.component';
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

@NgModule({
  declarations: [MainComponent, HeaderComponent, MenuPreFaceComponent, MenuItemsComponent, ServicesComponent, StoryPreFaceComponent,ReservationComponent, WeeklyDealsComponent,FancyListComponent],
  imports: [CommonModule, NgbModule, MatButtonModule, MatCardModule, SharedModule,MatIconModule],
  exports: [MainComponent],
  providers: []
})
export class MainModule { }
