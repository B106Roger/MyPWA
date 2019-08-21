import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  count = 0;
  msg1 = '';
  msg2 = '';
  msg3 = '';
  msg4 = '';
  msg5 = '';
  msg6 = '';
  msg7 = '';
  msg8 = '';
  msg9 = '';
  msg10 = '';
  sequential = 0;
  constructor() { }

  ngOnInit() {
  }
  cleanAll() {
    this.msg1 = '';
    this.msg2 = '';
    this.msg3 = '';
    this.msg4 = '';
    this.msg5 = '';
    this.msg6 = '';
    this.msg7 = '';
    this.msg8 = '';
    this.msg9 = '';
    this.msg10 = '';
    this.sequential = 0;
  }
  seqPlus() {
    this.sequential += 1;
    return this.sequential.toString();
  }
}
