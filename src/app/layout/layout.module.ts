import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { DeleteDialogComponent } from './modals/delete-dialog/delete-dialog.component';
import { SuccessDialogComponent } from './modals/success-dialog/success-dialog.component';


@NgModule({
  declarations: [
  
    LayoutComponent,
       DashboardComponent,
       UserManagementComponent,
       DeleteDialogComponent,
       SuccessDialogComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class LayoutModule { }
