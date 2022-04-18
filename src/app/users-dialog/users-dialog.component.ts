import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { UserApiService } from '../services/user-api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styleUrls: ['./users-dialog.component.css']
})
export class UsersDialogComponent implements OnInit {

  UsersForm !: FormGroup;
  actionBtn : string = "Save";

  constructor(private formBuilder : FormBuilder ,
    private userapi : UserApiService ,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<UsersDialogComponent>) { }

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

    if(this.editData){
      this.actionBtn = "Update";
      this.UsersForm.controls['FullName'].setValue(this.editData.FullName);
      this.UsersForm.controls['Email'].setValue(this.editData.Email);
      this.UsersForm.controls['Telephone'].setValue(this.editData.Telephone);
      this.UsersForm.controls['CIN'].setValue(this.editData.CIN);
      this.UsersForm.controls['Pid'].setValue(this.editData.Pid);
      this.UsersForm.controls['Zip_code'].setValue(this.editData.Zip_code);
      this.UsersForm.controls['Bank_code'].setValue(this.editData.Bank_code);
      this.UsersForm.controls['Language'].setValue(this.editData.Language);
    }
    }
    addUser(){
      if(!this.editData){
        if(this.UsersForm.valid){
          this.userapi.postUser(this.UsersForm.value)
          .subscribe({
            next:(res)=>{
              alert("user added successfully")
              this.UsersForm.reset();
              this.dialogRef.close('save');
            },
            error:()=>{
              alert("error while adding the user!!")
            }
          })
        }
      }else{
        this.updateUser();
      }

    }

    updateUser(){
      this.userapi.putUser(this.UsersForm.value,this.editData.id)
      .subscribe({
        next:(res)=>{
          alert("user updated successfully")
          this.UsersForm.reset();
          this.dialogRef.close('update');
        },
        error:()=>{
          alert("error while updating the user!!")
        }
      })
    }
}
