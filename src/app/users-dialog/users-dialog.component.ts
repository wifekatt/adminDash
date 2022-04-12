import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styleUrls: ['./users-dialog.component.css']
})
export class UsersDialogComponent implements OnInit {

  UsersForm !: FormGroup;

  constructor(private formBuilder : FormBuilder) { }

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
      console.log(this.UsersForm.value);
      }

}
