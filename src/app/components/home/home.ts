import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  images = ["imgExemplo1.png", "imgExemplo2.png", "imgExemplo3.png"];

  constructor(config: NgbCarouselConfig) {
		config.interval = 10000;
		config.wrap = true;
		config.keyboard = false;
		config.pauseOnHover = false;
	}
}
