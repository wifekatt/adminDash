import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AdminApiService } from '../services/admin-api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-admins-dialog',
  templateUrl: './admins-dialog.component.html',
  styleUrls: ['./admins-dialog.component.css']
})
export class AdminsDialogComponent implements OnInit {

  AdminsForm !: FormGroup;
  actionBtn : string = "Save";

  constructor(private formBuilder : FormBuilder ,
    private adminApi : AdminApiService ,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<AdminsDialogComponent>) { }


  ngOnInit(): void {
    this.AdminsForm = this.formBuilder.group({
      FullName : ['',Validators.required],
      Password : ['',Validators.required],
      PrivilegeID : ['',Validators.required],
      })
      if(this.editData){
        this.actionBtn = "Update";
        this.AdminsForm.controls['FullName'].setValue(this.editData.FullName);
        this.AdminsForm.controls['Password'].setValue(this.editData.Password);
        this.AdminsForm.controls['PrivilegeID'].setValue(this.editData.PrivilegeID);
      }
}
addAdmin(){
  if(!this.editData){
    if(this.AdminsForm.valid){
      this.adminApi.postAdmin(this.AdminsForm.value)
      .subscribe({
        next:(res)=>{
          alert("admin added successfully")
          this.AdminsForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("error while adding the admin!!")
        }
      })
    }
  }else{
    this.updateAdmin();
  }

}

updateAdmin(){
  this.adminApi.putAdmin(this.AdminsForm.value,this.editData.id)
  .subscribe({
    next:(res)=>{
      alert("user updated successfully")
      this.AdminsForm.reset();
      this.dialogRef.close('update');
    },
    error:()=>{
      alert("error while updating the user!!")
    }
  })
}
}
