import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { VoteDialogComponent } from '../vote-dialog/vote-dialog.component';
import { VoteApiService } from '../services/vote-api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  displayedColumns: string[] = ['VoteID', 'VoteName', 'MaxNumChoices', 'BeginDate', 'ExpiryDate','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog , private voteapi : VoteApiService) {

  }

  ngOnInit(): void {
    this.getAllVotes();
  }

  openDialog() {
    this.dialog.open(VoteDialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllVotes();
        }
    })
  }

  getAllVotes(){
    this.voteapi.getVote()
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
  editVote(row : any){
    this.dialog.open(VoteDialogComponent,{
    width:'30%',
    data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getAllVotes();
        }
    })
    }
  deleteVote(id : number){
    this.voteapi.deleteVote(id)
    .subscribe({
      next:(res)=>{
        alert("vote deleted successfully");
        this.getAllVotes();
      },
      error:()=>{
        alert("error while deleting the vote!!")
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
