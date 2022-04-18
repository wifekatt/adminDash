import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CondidateApiService } from '../services/condidate-api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-condidate-dialog',
  templateUrl: './condidate-dialog.component.html',
  styleUrls: ['./condidate-dialog.component.css']
})
export class CondidateDialogComponent implements OnInit {

  condidatesForm !: FormGroup;
  actionBtn : string = "Save";

  constructor(private formBuilder : FormBuilder ,
    private condidateApi : CondidateApiService ,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<CondidateDialogComponent>) { }


  ngOnInit(): void {
    this.condidatesForm = this.formBuilder.group({
      condidatID : ['',Validators.required],
      FullName : ['',Validators.required]
    })
    if(this.editData){
      this.actionBtn = "Update";
      this.condidatesForm.controls['condidatID'].setValue(this.editData.condidatID);
      this.condidatesForm.controls['FullName'].setValue(this.editData.FullName);
    }
    }
    addCondidate(){
      if(!this.editData){
        if(this.condidatesForm.valid){
          this.condidateApi.postCondidate(this.condidatesForm.value)
          .subscribe({
            next:(res)=>{
              alert("condidate added successfully")
              this.condidatesForm.reset();
              this.dialogRef.close('save');
            },
            error:()=>{
              alert("error while adding the condidate!!")
            }
          })
        }
      }else{
        this.updateCondidate();
      }

    }

    updateCondidate(){
      this.condidateApi.putCondidate(this.condidatesForm.value,this.editData.id)
      .subscribe({
        next:(res)=>{
          alert("condidate updated successfully")
          this.condidatesForm.reset();
          this.dialogRef.close('update');
        },
        error:()=>{
          alert("error while updating the condidate!!")
        }
      })
    }

}
