import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-manager-modal-component',
  templateUrl: './manager-modal-component.component.html',
  styleUrls: ['./manager-modal-component.component.css']
})
export class ManagerModalComponentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private Ref : MatDialogRef<ManagerModalComponentComponent>) { }
  text:any;
  ngOnInit(): void {
      this.text=this.data;
  }

  close(){
    this.Ref.close("Closed ");
  }
}
