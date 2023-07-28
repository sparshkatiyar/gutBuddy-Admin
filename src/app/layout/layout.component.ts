import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SessionStorageService } from '../service/session-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  sideBarOpen=true;
  constructor(private breakpointObserver: BreakpointObserver,private sessionStorage : SessionStorageService, private router : Router) {}

  ngOnInit(): void {
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  logout(){
    this.sessionStorage.removeItem('GutBuddyAdmin')
    this.router.navigateByUrl('/login')
  }

}
