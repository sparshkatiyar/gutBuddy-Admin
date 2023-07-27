import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/service/session-storage.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  submitted: Boolean = false;

  constructor(
    private api : ApiService,
    private toastr : ToastrService,
    private router : Router,
    private sessionStorage : SessionStorageService
  ) { }

  ngOnInit(): void {
  }

  
  forgetPassForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required]),
  })

  get a() {
    return this.forgetPassForm.controls;
  }
  forgetSubmit(){
    
    if(this.forgetPassForm.invalid){
        this.toastr.error('Please check all fields', 'Major Error', {
        timeOut: 3000,
        positionClass : 'toast-top-right',
        messageClass : 'toast-message',
        tapToDismiss : false,   // false
        closeButton : true,
        extendedTimeOut : 3000,  // Time to close after a user hovers over toast
    });
    return
    }
    this.submitted = true;
    let data = this.forgetPassForm.value;
    this.api.post('login', data).subscribe(
      {
        next :(res : any) => {
          console.log(res);
          this.toastr.success("Link has been sent to your email address.")
          let routerLink = "/login"
          this.router.navigate(['/login']);
        },error(err) {
          console.log(err);
        }
    }
  )
  }
}
