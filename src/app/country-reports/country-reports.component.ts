import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-country-reports',
  templateUrl: './country-reports.component.html',
  styleUrls: ['./country-reports.component.css']
})
export class CountryReportsComponent implements OnInit {

  constructor(
    private api:ApiService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
    ) {
      this.idd;
}
arr:any;
idd:any;
send_id(id:any){
this.router.navigate(['/read_more',id]);

}

title2:any;
  ngOnInit(){
    this.idd=this.route.snapshot.params.id;
    this.myfun({id:this.route.snapshot.params.id});
    this.arr;
    this.c_id({id:this.route.snapshot.params.id});
    this.Category_name;
  }
  p:any;
Category_name:any;
  c_id(id:any){
  this.api.C_id(id).subscribe((res)=>{
   this.Category_name=res;
  });
  }
  myfun(arry:any){
    this.api.mytext(arry).subscribe((res)=>{
      this.arr=res;
    });
  }
}
