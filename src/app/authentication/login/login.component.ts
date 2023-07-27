import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { SessionStorageService } from 'src/app/service/session-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide=true;
  submitted: Boolean = false;

  constructor(
    private api : ApiService,
    private sessionStorage : SessionStorageService,
    private router : Router,
    private toastr : ToastrService
  ) { }

  ngOnInit(): void {
  }

  hasError(event: any) {
    console.log(event);
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required]),
    // password: new FormControl('',[Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]),
    password: new FormControl('',[Validators.required]),
  })

  get a() {
    return this.loginForm.controls;
  }

  submitSignInForm() {
    this.submitted = true;
    let data = this.loginForm.value;
    this.api.post('login', data).subscribe(
      {
        next :(res : any) => {
          console.log(res);
          this.toastr.success("Login Successfully")
          let routerLink = "home/dashboard"
          this.router.navigate(['home/dashboard']);
          this.sessionStorage.setDataInSessionStorage('GutBuddyAdmin', res['data'])
        },error(err) {
          console.log(err);
        }
    }
  )}

}
