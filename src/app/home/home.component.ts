import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private _api:ApiService ,private router: Router) { 
   
  }
arr:any=[1,2,3,4,5];
  

send_id(id:any){
  this.router.navigate(['/read_more',id]);
  
 }
  home_data:any;
  fetch:any;
  get_home_data(){
    this._api.home_select().subscribe((res)=>{
      this.home_data=res;
    });

    this._api.fetch().subscribe((res)=>{
      this.fetch=res;
    });
  }
  ngOnInit(){
    this.get_home_data();
    this.home_data;
  }
  Images:any= ['../assets/banner1_1.jpg', '../assets/banner1_2.jpg', '../assets/banner1_3.jpg'];  
  
  SlideOptions = {  responsive:{
    0:{
        items:1
    },
    600:{
        items:3
    },
    1000:{
        items:4
    }
}, dots: true,loop:true, nav: true ,autoplay:true, autoplayTimeout:900};  
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
}, dots: true, loop:true , nav: true ,autoplay:true , autoplayTimeout:900};


//seprate part

 
}
