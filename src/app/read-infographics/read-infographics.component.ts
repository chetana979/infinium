import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-read-infographics',
  templateUrl: './read-infographics.component.html',
  styleUrls: ['./read-infographics.component.css']
})
export class ReadInfographicsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private api:ApiService) { }

  id:any;
  all_data:any;
 arr:any=[1,2,3,4,5,6,7,8,9];
  ngOnInit() {
    this.get_infograph_id_related_data({id:this.route.snapshot.params.id});
    this.all_data;
  }
  send_id1(id:any){ this.router.navigate(['/form_inq_4/1',id]); }
  send_id2(id:any){ this.router.navigate(['/form_inq_4/2',id]); }
  send_id3(id:any){ this.router.navigate(['/form_inq_4/3',id]); }
  
get_infograph_id_related_data(id:any){
  this.api.infograph_data(id).subscribe((res)=>{
      this.all_data=res;
  });
}


}
