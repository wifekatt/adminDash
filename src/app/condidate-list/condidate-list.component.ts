import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ListDialogComponent } from '../list-dialog/list-dialog.component';
import { CondidateListApiService } from '../services/condidate-list-api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-condidate-list',
  templateUrl: './condidate-list.component.html',
  styleUrls: ['./condidate-list.component.css']
})
export class CondidateListComponent implements OnInit {

  displayedColumns: string[] = ['listID', 'listName','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog , private listApi : CondidateListApiService) {

  }

  ngOnInit(): void {
    this.getAllClists();
  }
  openDialog() {
    this.dialog.open(ListDialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllClists();
        }
    })
  }

  getAllClists(){
    this.listApi.getList()
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
  editList(row : any){
    this.dialog.open(ListDialogComponent,{
    width:'30%',
    data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getAllClists();
        }
    })
    }
  deleteList(id : number){
    this.listApi.deleteList(id)
    .subscribe({
      next:(res)=>{
        alert("List deleted successfully");
        this.getAllClists();
      },
      error:()=>{
        alert("error while deleting the list!!")
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
