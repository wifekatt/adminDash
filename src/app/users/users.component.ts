import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UsersDialogComponent } from '../users-dialog/users-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(UsersDialogComponent, {
      width:'30%'
    });
  }
}
