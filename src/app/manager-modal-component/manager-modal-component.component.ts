import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDepartment } from '../IDepartment';
import { PostsService } from '../Http.service';
import { IManager } from '../IManager';

@Component({
  selector: 'app-manager-modal-component',
  templateUrl: './manager-modal-component.component.html',
  styleUrls: ['./manager-modal-component.component.css']
})
export class ManagerModalComponentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, 
  private Ref : MatDialogRef<ManagerModalComponentComponent>,
  private services : PostsService,
  ) { }

  dept : IDepartment[];
  managers : IManager[];
  manager : IManager;
  text:any;
  ngOnInit(): void {
      this.services.getDepartment().subscribe(
        data => {
          this.dept=data
        }
      );
      this.text=this.data;
  }

  ChangeDepartment(e){
    const id = e.target.value;
    if(id!=0){
    this.services.getManagers(id).subscribe(
      data =>{
        this.managers = data
      }
    )
    }else{
      this.managers = null;
    }

  }
  ChangeManager(e){
    const id = e.target.value;
    if(id!=0){
      this.manager = this.managers.find(x => x.managerId==id);
    }
  }
  close(){
    this.Ref.close("Closed ");
  }
}
