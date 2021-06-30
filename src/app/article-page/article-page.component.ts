import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  constructor(private api:ApiService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.send_id_data({id:this.route.snapshot.params.id});
    this.arr;
  }
arr:any;
  send_id_data(id:any){
    this.api.Press_Releases_one(id).subscribe((res)=>{
     this.arr=res;
    });
  }
}
