import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CondidateListApiService } from '../services/condidate-list-api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-list-dialog',
  templateUrl: './list-dialog.component.html',
  styleUrls: ['./list-dialog.component.css']
})
export class ListDialogComponent implements OnInit {

  ListForm !: FormGroup;
  actionBtn : string = "Save";

  constructor(private formBuilder : FormBuilder ,
    private listApi : CondidateListApiService ,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<ListDialogComponent>) { }

  ngOnInit(): void {
    this.ListForm = this.formBuilder.group({
      listID : ['',Validators.required],
      listName : ['',Validators.required],
    })
    if(this.editData){
      this.actionBtn = "Update";
      this.ListForm.controls['listID'].setValue(this.editData.listID);
      this.ListForm.controls['Email'].setValue(this.editData.listName);
    }
  }
  addList(){
    if(!this.editData){
      if(this.ListForm.valid){
        this.listApi.postList(this.ListForm.value)
        .subscribe({
          next:(res)=>{
            alert("List added successfully")
            this.ListForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("error while adding the List!!")
          }
        })
      }
    }else{
      this.updateList();
    }

  }

  updateList(){
    this.listApi.putList(this.ListForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("List updated successfully")
        this.ListForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("error while updating the list!!")
      }
    })
  }

}
