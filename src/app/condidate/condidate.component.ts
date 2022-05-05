import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CondidateDialogComponent } from '../condidate-dialog/condidate-dialog.component';
import { CondidateApiService } from '../services/condidate-api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-condidate',
  templateUrl: './condidate.component.html',
  styleUrls: ['./condidate.component.css']
})
export class CondidateComponent implements OnInit {

  sideBarOpen = true;
  displayedColumns: string[] = ['condidatID','FullName','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog , private condidateApi : CondidateApiService) {

  }


  ngOnInit(): void {
    this.getAllCondidates();
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  openDialog() {
    this.dialog.open(CondidateDialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllCondidates();
        }
    })
  }

  getAllCondidates(){
    this.condidateApi.getCondidate()
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
  editCondidate(row : any){
    this.dialog.open(CondidateDialogComponent,{
    width:'30%',
    data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getAllCondidates();
        }
    })
    }
  deleteCondidate(id : number){
    this.condidateApi.deleteCondidate(id)
    .subscribe({
      next:(res)=>{
        alert("condidate deleted successfully");
        this.getAllCondidates();
      },
      error:()=>{
        alert("error while deleting the condidate!!")
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
