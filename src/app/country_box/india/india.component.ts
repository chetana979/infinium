import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute, private api:ApiService) { 
    
  }
 arr:any;
 idd:any;
  ngOnInit(){
    this.idd=this.activeroute.snapshot.params.id;
    this.myfun({id:this.activeroute.snapshot.params.id});
    this.arr;
    console.log(this.activeroute.snapshot.params.id);
  }

  myfun(arry:any){
    this.api.mytext(arry).subscribe((res)=>{
      this.arr=res;
    });
  }

}
