import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private api:ApiService
  ) { }
  Requestform:any;
  loading = false;
  submitted = false;

  
  ngOnInit() {

    this.Requestform = this.formBuilder.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      message: ['', Validators.required]
  });
  }

  get f() { return this.Requestform.controls; }

  onSubmit() {
    console.log(this.Requestform);
    this.submitted = true;
    // stop here if form is invalid
    if (this.Requestform.invalid) {
        return;
    }
    
      this.api.Contact_us(this.Requestform.value).subscribe(res=>{
        alert("data requsr");
      });
  
    this.router.navigate(['/thanks']);

  }

}
