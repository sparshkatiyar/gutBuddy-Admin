"use strict";(self.webpackChunkbuddy_admin=self.webpackChunkbuddy_admin||[]).push([[831],{2831:(J,g,r)=>{r.r(g),r.d(g,{AuthenticationModule:()=>P});var d=r(6895),m=r(9299),i=r(4006),t=r(4650),b=r(2340),y=r(529);let c=(()=>{class o{constructor(e){this.http=e,this.baseUrl=b.N.baseUrl}post(e,n){return this.http.post(`${this.baseUrl}/v1/admin/${e}`,n)}get(e){return this.http.get(`${this.baseUrl}/v1/admin/${e}`)}delete(e){return this.http.delete(`${this.baseUrl}/v1/admin/${e}`)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(y.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var f=r(8234),p=r(7185),h=r(4859),v=r(3546),u=r(9549),Z=r(4144),F=r(7392);function T(o,s){1&o&&(t.TgZ(0,"div",20),t._uU(1," Please enter email! "),t.qZA())}function A(o,s){1&o&&(t.TgZ(0,"div",20),t._uU(1," Please enter password! "),t.qZA())}function S(o,s){1&o&&(t.TgZ(0,"div",15),t._uU(1," Please enter register email! "),t.qZA())}const C=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:(()=>{class o{constructor(e,n,a,l){this.api=e,this.sessionStorage=n,this.router=a,this.toastr=l,this.hide=!0,this.submitted=!1,this.loginForm=new i.cw({email:new i.NI("",[i.kI.required]),password:new i.NI("",[i.kI.required])})}ngOnInit(){}hasError(e){console.log(e)}get a(){return this.loginForm.controls}submitSignInForm(){this.submitted=!0,this.api.post("login",this.loginForm.value).subscribe({next:n=>{console.log(n),this.loginData=n.data,this.toastr.success("Login Successfully"),this.sessionStorage.setDataInSessionStorage("GutBuddyAdmin",JSON.stringify(this.loginData)),this.router.navigate(["home/dashboard"])},error(n){console.log(n)}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c),t.Y36(f.u),t.Y36(m.F0),t.Y36(p._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:31,vars:7,consts:[["id","authentication"],[1,"container"],[1,"row","vh-100","d-flex","align-items-center","justify-content-center"],[1,"col-md-6","col-lg-4"],[1,"main-form"],[3,"formGroup","ngSubmit"],[1,"logo"],["src","assets/images/logo.png","alt","",2,"height","110px","object-fit","contain"],[1,"mt-3"],[1,"mb-3"],["appearance","outline",1,"w-100"],["matInput","","placeholder","Enter Registered Email Address","formControlName","email"],["class","text-danger",4,"ngIf"],[1,"mb-2"],["matInput","","placeholder","Enter Password","formControlName","password",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],[1,"d-flex","justify-content-between","align-items-center"],["routerLink","/forgot-password",1,"forgot"],[1,"form-button"],["mat-flat-button","","color","primary"],[1,"text-danger"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"mat-card")(5,"div",4)(6,"form",5),t.NdJ("ngSubmit",function(){return n.submitSignInForm()}),t.TgZ(7,"div",6),t._UZ(8,"img",7),t.qZA(),t.TgZ(9,"div",8)(10,"div",9)(11,"mat-label"),t._uU(12,"Email"),t.qZA(),t.TgZ(13,"mat-form-field",10),t._UZ(14,"input",11),t.qZA(),t.YNc(15,T,2,0,"div",12),t.qZA(),t.TgZ(16,"div",13)(17,"mat-label"),t._uU(18,"Enter your password"),t.qZA(),t.TgZ(19,"mat-form-field",10),t._UZ(20,"input",14),t.TgZ(21,"button",15),t.NdJ("click",function(){return n.hide=!n.hide}),t.TgZ(22,"mat-icon"),t._uU(23),t.qZA()()(),t.YNc(24,A,2,0,"div",12),t.qZA(),t.TgZ(25,"div",16)(26,"a",17),t._uU(27,"Forgot Password?"),t.qZA()(),t.TgZ(28,"div",18)(29,"button",19),t._uU(30,"Login"),t.qZA()()()()()()()()()()),2&e){let a,l;t.xp6(6),t.Q6J("formGroup",n.loginForm),t.xp6(9),t.Q6J("ngIf",n.submitted&&(null==(a=n.loginForm.get("email"))?null:a.hasError("required"))),t.xp6(5),t.Q6J("type",n.hide?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",n.hide),t.xp6(2),t.Oqu(n.hide?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",n.submitted&&(null==(l=n.loginForm.get("password"))?null:l.hasError("required")))}},dependencies:[d.O5,m.yS,h.lW,v.a8,u.KE,u.hX,u.R9,Z.Nt,F.Hw,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".logo_text[_ngcontent-%COMP%]{color:#102e50;font-size:50px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-style:oblique;font-weight:900}"]}),o})()},{path:"forgot-password",component:(()=>{class o{constructor(e,n,a,l){this.api=e,this.toastr=n,this.router=a,this.sessionStorage=l,this.submitted=!1,this.forgetPassForm=new i.cw({email:new i.NI("",[i.kI.required])})}ngOnInit(){}get a(){return this.forgetPassForm.controls}forgetSubmit(){this.forgetPassForm.invalid?this.toastr.error("Please check all fields","Major Error",{timeOut:3e3,positionClass:"toast-top-right",messageClass:"toast-message",tapToDismiss:!1,closeButton:!0,extendedTimeOut:3e3}):(this.submitted=!0,this.api.post("forgot-password",this.forgetPassForm.value).subscribe({next:n=>{console.log(n),this.toastr.success("Link has been sent to your email address."),this.router.navigate(["/login"])},error(n){console.log(n)}}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c),t.Y36(p._W),t.Y36(m.F0),t.Y36(f.u))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-forgot-password"]],decls:22,vars:2,consts:[["id","authentication"],[1,"container"],[1,"row","vh-100","d-flex","align-items-center","justify-content-center"],[1,"col-md-6","col-lg-4"],[1,"main-form"],[1,"logo"],[1,"logo_text"],[1,"mt-4"],[3,"formGroup","ngSubmit"],[1,"form-heading"],["appearance","outline",1,"w-100"],["matInput","","placeholder","Enter email","formControlName","email"],["class","text-danger",4,"ngIf"],[1,"form-button","m-0"],["mat-flat-button","","color","primary"],[1,"text-danger"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"mat-card")(5,"div",4)(6,"div",5)(7,"h1",6),t._uU(8,"Gut Buddy"),t.qZA()(),t.TgZ(9,"div",7)(10,"form",8),t.NdJ("ngSubmit",function(){return n.forgetSubmit()}),t.TgZ(11,"div",9)(12,"h3"),t._uU(13,"Forgot Password"),t.qZA(),t.TgZ(14,"p"),t._uU(15,"Enter your registered email ID here "),t.qZA()(),t.TgZ(16,"mat-form-field",10),t._UZ(17,"input",11),t.qZA(),t.YNc(18,S,2,0,"div",12),t.TgZ(19,"div",13)(20,"button",14),t._uU(21,"Send Link"),t.qZA()()()()()()()()()()),2&e){let a;t.xp6(10),t.Q6J("formGroup",n.forgetPassForm),t.xp6(8),t.Q6J("ngIf",n.submitted&&(null==(a=n.forgetPassForm.get("email"))?null:a.hasError("required")))}},dependencies:[d.O5,h.lW,v.a8,u.KE,Z.Nt,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".logo_text[_ngcontent-%COMP%]{color:#102e50;font-size:50px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-style:oblique;font-weight:900}"]}),o})()}];let I=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.Bz.forChild(C),m.Bz]}),o})();var U=r(4442);let P=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,I,U.q,i.u5,i.UX]}),o})()}}]);