import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-portfolio-reports',
  templateUrl: './portfolio-reports.component.html',
  styleUrls: ['./portfolio-reports.component.css']
})
export class PortfolioReportsComponent implements OnInit {

  constructor(private api:ApiService,private router:Router) { }

  arr:any;
  portfolio(){
    this.api.portfolio_reports().subscribe((res)=>{
      this.arr=res;
    });
  }
  ngOnInit(){
    this.portfolio();
    this.arr;
  }
  p:any;
  send_id(id:any){
    this.router.navigate(['/third_rd',id]);
    
    }

}
