import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UsersDialogComponent } from '../users-dialog/users-dialog.component';
import { UserApiService } from '../services/user-api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  sideBarOpen = true;
  displayedColumns: string[] = ['FullName', 'Email', 'Telephone', 'CIN', 'Pid', 'Zip_code', 'Bank_code', 'Language','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog , private userapi : UserApiService) {

  }

  ngOnInit(): void {
    this.getAllUsers();
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  openDialog() {
    this.dialog.open(UsersDialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllUsers();
        }
    })
  }

  getAllUsers(){
    this.userapi.getUser()
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
  editUser(row : any){
    this.dialog.open(UsersDialogComponent,{
    width:'30%',
    data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getAllUsers();
        }
    })
    }
  deleteUser(id : number){
    this.userapi.deleteUser(id)
    .subscribe({
      next:(res)=>{
        alert("user deleted successfully");
        this.getAllUsers();
      },
      error:()=>{
        alert("error while deleting the user!!")
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
