import { Component } from '@angular/core';
import { Student } from '../../shared/student.model';

@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './baking.html',
  styleUrls: ['./baking.css']
})
export class ServerComponent {
    // serverId = 10;
    // serverStatus = 'offLine';
    // counter = 0;
    // isLogin = false;
    // userName: string;
    // students: Student[] = [new Student('Bill Gates', 'Computer Science'),
    //                        new Student('Steve Jobs', 'Computer Science'),
    //                        new Student('Elon Musk', 'Computer Science')];
    //
    // getServerStatus() {
    //   return this.serverStatus;
    // }
    //
    // counterPlus() {
    //  this.counter ++;
    // }
    //
    // resetCounter() {
    //   this.counter = 0;
    // }
    //
    // login() {
    //   this.isLogin = true;
    // }
    //
    // signOut() {
    //   this.isLogin = false;
    // }
    //
    // // Event Binding
    // onUpdateUserName(event: Event) {
    //   this.userName = (<HTMLInputElement>event.target).value;
    // }


  ingradients : String[] = ["flour", 'egg', "strawberry", "banana"];
  isUsed: boolean[] = [false, false, false, false];
  result = -1; // -1 empty 0 boom 1 sp 2 bp 3 sbp

  judge() {
    if(!this.isUsed[0] || !this.isUsed[1]) {
      this.result = 0;
    } else if (this.isUsed[2] && this.isUsed[3]){
      this.result = 3;
    } else if (this.isUsed[2]) {
      this.result = 1;
    } else {
      this.result = 2;
    }
  }

  undo() {
    let i: number;
    for(i = 0; i < 4; i++) {
      this.isUsed[i] = false;
    }
    this.result = -1;
  }

  changeCheckedBox(event, index) {
    this.isUsed[index] = event.target.checked;
  }




}
