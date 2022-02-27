import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  service: any
  reservationForm$:any
  payLoad:any
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
     data.form.subscribe((a:any)=>{ this.reservationForm$ = a})
  }

  quantity:number = 1
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
  doSomething($event : any){
console.log($event)
  }

}
