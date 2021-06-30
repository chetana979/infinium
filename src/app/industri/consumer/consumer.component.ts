import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {

  constructor(
    private api:ApiService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
    ) {

}
arr:any;
p:any;
send_id(id:any){
this.router.navigate(['/read_more',id]);

}
 industry_data(id:any){
  this.api.postid(id).subscribe((res)=>{
    this.arr=res;
  }); 
 }

 myfun(arry:any){
  this.api.mytext(arry).subscribe((res)=>{
    this.arr=res;
  });
}

  ngOnInit(){
    this.myfun({id:6});
    this.arr;

  }
}
