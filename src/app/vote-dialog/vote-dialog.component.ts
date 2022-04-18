import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { VoteApiService } from '../services/vote-api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-vote-dialog',
  templateUrl: './vote-dialog.component.html',
  styleUrls: ['./vote-dialog.component.css']
})
export class VoteDialogComponent implements OnInit {

  VotesForm !: FormGroup;
  actionBtn : string = "Save";

  constructor(private formBuilder : FormBuilder ,
    private voteapi : VoteApiService ,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<VoteDialogComponent>) { }

  ngOnInit(): void {
    this.VotesForm = this.formBuilder.group({
    VoteID : ['',Validators.required],
    VoteName : ['',Validators.required],
    MaxNumChoices : ['',Validators.required],
    BeginDate : ['',Validators.required],
    ExpiryDate : ['',Validators.required],
    })

    if(this.editData){
      this.actionBtn = "Update";
      this.VotesForm.controls['VoteID'].setValue(this.editData.VoteID);
      this.VotesForm.controls['VoteName'].setValue(this.editData.VoteName);
      this.VotesForm.controls['MaxNumChoices'].setValue(this.editData.MaxNumChoices);
      this.VotesForm.controls['BeginDate'].setValue(this.editData.BeginDate);
      this.VotesForm.controls['ExpiryDate'].setValue(this.editData.ExpiryDate);

    }
    }
    addVote(){
      if(!this.editData){
        if(this.VotesForm.valid){
          this.voteapi.postVote(this.VotesForm.value)
          .subscribe({
            next:(res)=>{
              alert("vote added successfully")
              this.VotesForm.reset();
              this.dialogRef.close('save');
            },
            error:()=>{
              alert("error while adding the vote!!")
            }
          })
        }
      }else{
        this.updateVote();
      }

    }

    updateVote(){
      this.voteapi.putVote(this.VotesForm.value,this.editData.id)
      .subscribe({
        next:(res)=>{
          alert("vote updated successfully")
          this.VotesForm.reset();
          this.dialogRef.close('update');
        },
        error:()=>{
          alert("error while updating the vote!!")
        }
      })
    }
}
