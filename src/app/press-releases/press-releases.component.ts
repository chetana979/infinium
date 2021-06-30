import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-press-releases',
  templateUrl: './press-releases.component.html',
  styleUrls: ['./press-releases.component.css']
})
export class PressReleasesComponent implements OnInit {

  constructor(private aip:ApiService,private router:Router) { }
 arr:any;
  ngOnInit(): void {
    this.Press_Releases();
    this.arr;
  }
 send_id(id:any){
  this.router.navigate(['/article',id])
 }
  Press_Releases(){
    this.aip.Press_Releases().subscribe((res)=>{
        this.arr=res;
    });
  }
}
