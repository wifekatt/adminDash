import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { UserApiService } from '../services/user-api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styleUrls: ['./users-dialog.component.css']
})
export class UsersDialogComponent implements OnInit {

  UsersForm !: FormGroup;

  constructor(private formBuilder : FormBuilder , private userapi : UserApiService , private dialogRef : MatDialogRef<UsersDialogComponent>) { }

  ngOnInit(): void {
    this.UsersForm = this.formBuilder.group({
    FullName : ['',Validators.required],
    Email : ['',Validators.required],
    Telephone : ['',Validators.required],
    CIN : ['',Validators.required],
    Pid : ['',Validators.required],
    Zip_code : ['',Validators.required],
    Bank_code : ['',Validators.required],
    Language : ['',Validators.required],

    })
    }
    addUser(){
      if(this.UsersForm.valid){
        this.userapi.postUser(this.UsersForm.value)
        .subscribe({
          next:(res)=>{
            alert("user added successfully")
            this.UsersForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("error while adding the user")
          }
        })
      }

    }

}
