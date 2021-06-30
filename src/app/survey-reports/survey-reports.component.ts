import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-survey-reports',
  templateUrl: './survey-reports.component.html',
  styleUrls: ['./survey-reports.component.css']
})
export class SurveyReportsComponent implements OnInit {

  constructor( private api:ApiService,private router:Router) { }


arr:any;
all_survey(){
  this.api.Survey_Reports().subscribe((res)=>{
    this.arr=res;
  });
}
  ngOnInit(): void {
    this.all_survey();
    this.arr;
  }
p:any;

  send_id(id:any){
    this.router.navigate(['/second_re',id]);
    
    }
}
