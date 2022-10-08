import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManagerModalComponentComponent } from './manager-modal-component/manager-modal-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Manager';

  constructor(private matDialog : MatDialog){

  } 
  OpenPopUp(){
    const popup = this.matDialog.open(ManagerModalComponentComponent,{

      width:'60%',
      height:'50%',
      data:{

        data:'Manager by Department'
      }
    });
    popup.afterClosed().subscribe(items =>{
      console.log(items);
    })
  }
}
