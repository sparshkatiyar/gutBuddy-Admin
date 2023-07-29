import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { DeleteDialogComponent } from '../modals/delete-dialog/delete-dialog.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Alexa', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'John', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Jonathan', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Jack', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Lorem', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Ipsum', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Clar', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Stev', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Jason', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Stantham', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Peter', weight: 22.9897, symbol: 'Na'},
];
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  displayedColumns: string[] = ['sr', 'full_name', 'dob','created_on', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(public dialog: MatDialog) {}
  
  ngOnInit(): void {
  }


  openDialog() {
    this.dialog.open(DeleteDialogComponent);
  }

}
