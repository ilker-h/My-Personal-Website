import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {

  constructor() { }

  // I ended up not using the captions
  images = [
    { src: 'assets/testimonials/2024 - Kyle De Souza.png', alt: 'Kyle De Souza', caption: 'Kyle De Souza' },
    { src: 'assets/testimonials/2020-09 - Pam Renton.png', alt: 'Pam Renton', caption: 'Pam Renton' },
    { src: 'assets/testimonials/2020-01 - Jordan Sousa.png', alt: 'Jordan Sousa', caption: 'Jordan Sousa' },
    { src: 'assets/testimonials/2019 - Lucas Thung.png', alt: 'Lucas Thung', caption: 'Lucas Thung' },
    { src: 'assets/testimonials/2017-08 - Jun Wang.png', alt: 'Jun Wang', caption: 'Jun Wang' },
    { src: 'assets/testimonials/2017-01 - Valerie Preston.png', alt: 'Valerie Preston', caption: 'Valerie Preston' }
  ];

  customOptions: OwlOptions = {
    loop: true,
    items: 1,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    dots: true,
    autoHeight: true
  };
}
