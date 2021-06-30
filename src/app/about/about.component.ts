import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  Images:any= ['../assets/banner1_1.jpg', '../assets/banner1_2.jpg', '../assets/banner1_3.jpg'];  
  
  SlideOptions = {  responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1000:{
        items:3
    }
}, dots: true,loop:true, nav: true ,autoplay:true, autoplayTimeout:2000};  
  CarouselOptions = {  responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1000:{
        items:3
    }
}, dots: true, loop:true , nav: true ,autoplay:true , autoplayTimeout:2000};

}
