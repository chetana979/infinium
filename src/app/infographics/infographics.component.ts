import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-infographics',
  templateUrl: './infographics.component.html',
  styleUrls: ['./infographics.component.css']
})
export class InfographicsComponent implements OnInit {

  constructor(private api:ApiService,private router:Router) { }
arr:any;
infographics_data(){
 this.api.infographics().subscribe((res)=>{
  this.arr=res;
 });
}
p:any;
  ngOnInit() {
    this.infographics_data();
    this.arr;
  }
  send_id(id:any){
    this.router.navigate(['/read_infographics',id]);
    
    }

}
