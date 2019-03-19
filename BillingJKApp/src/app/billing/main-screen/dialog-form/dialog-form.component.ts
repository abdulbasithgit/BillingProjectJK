import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss']
})
export class DialogFormComponent implements OnInit {
  addFrom: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private formBuilder: FormBuilder) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

    this.addFrom = this.formBuilder.group({
      productName: ["", [Validators.required]],
      productCode: ["", [Validators.required]],
      price: ["", [Validators.required]],
      categoryCode: ["", [Validators.required]],
      quantity:["", [Validators.required]],
      discont:["", [Validators.required]]
    });

  }

}
