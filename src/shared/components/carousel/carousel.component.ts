import { fadeInUp } from './../../../animations/animations';
import { HeaderCarouselItem } from './../../../entities/header-carousel-item.entity';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [fadeInUp]
})
export class CarouselComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    if ($event.path[1].pageYOffset < $event.path[1].outerHeight)
      this.height = $event.path[1].pageYOffset + 'px'
  }
  height: string = ''
  @Input() carouselItems!: HeaderCarouselItem[];
  @Input() component!: string;

  constructor(private route: Router) { }
  getHeight() {
    return { transform: `translateY(${this.height})` }
  }
  ngOnInit(): void {
  }
  navigateToLink(link: string, inNewTab: boolean) {
    inNewTab?     window.open(link) : this.route.navigate([link])
  }

}
