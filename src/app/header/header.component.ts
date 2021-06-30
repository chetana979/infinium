import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute, private api:ApiService , private router:Router) { }
 
 ngOnInit(): void {
  
  }
 
  send_id(id:any){
    this.router.navigate(['/country_reports',id])
    .then(() => {
      window.location.reload();
    });
  }
}