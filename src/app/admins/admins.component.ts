import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdminsDialogComponent } from '../admins-dialog/admins-dialog.component';
import { AdminApiService } from '../services/admin-api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  displayedColumns: string[] = ['FullName', 'Password', 'PrivilegeID'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog , private adminApi : AdminApiService) {

  }

  ngOnInit(): void {
    this.getAllAdmins();
  }

  openDialog() {
    this.dialog.open(AdminsDialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllAdmins();
        }
    })
  }

  getAllAdmins(){
    this.adminApi.getAdmin()
          .subscribe({
            next:(res)=>{
              this.dataSource = new MatTableDataSource(res);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;

            },
            error:(err)=>{
              alert("error while fetching the records!!")
            }
          })
  }

  editAdmin(row : any){
    this.dialog.open(AdminsDialogComponent,{
    width:'30%',
    data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getAllAdmins();
        }
    })
    }
  deleteAdmin(id : number){
    this.adminApi.deleteAdmin(id)
    .subscribe({
      next:(res)=>{
        alert("admin deleted successfully");
        this.getAllAdmins();
      },
      error:()=>{
        alert("error while deleting the admin!!")
      }
    })

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
