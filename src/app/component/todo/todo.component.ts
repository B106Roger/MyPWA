import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoList = [
    {
      message: 'buy a unicorn',
      complete: true,
      id: 0
    },
    {
      message: 'buy a elephant',
      complete: false,
      id: 1
    },
    {
      message: 'buy a sister',
      complete: false,
      id: 2
    },
    {
      message: 'buy a dragon',
      complete: true,
      id: 3
    }
  ];
  inputValue = '';
  editingIndex = -1;
  showType = 0;
  constructor() { }

  ngOnInit() {
  }

  numberOfComplete() {
    return this.todoList.filter(e => e.complete === false).length;
  }

  toggleItem(id: number) {
    this.todoList[id].complete = !this.todoList[id].complete;
  }
  toggleAll(value: boolean) {
    for (let i = 0 ; i < this.todoList.length; i++) {
      this.todoList[i].complete = value;
    }
  }

  addItem(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.todoList.push({
        message: this.inputValue,
        complete: false,
        id: this.todoList.length
      });
      this.inputValue = '';
    }
  }
  destroyItem(id: number) {
    this.todoList.splice(id, 1);
    this.renewId();
  }
  destroyAll() {
    for (let i = this.todoList.length - 1 ; i >= 0; --i) {
      if (this.todoList[i].complete === true) {
        this.todoList.splice(i, 1);
      }
    }
    this.renewId();
  }
  private renewId() {
    for (let i = 0 ; i < this.todoList.length; i++) {
      this.todoList[i].id = i;
    }
  }

  startEditMsg(index: number) { this.editingIndex = index; }
  finishEditMsg() { this.editingIndex = -1; }

  showList() {
    if (this.showType === 0) {
      return this.todoList;
    } else if (this.showType === 1) {
      return this.todoList.filter(e => e.complete === false);
    } else if (this.showType === 2) {
      return this.todoList.filter(e => e.complete === true);
    }
  }
}
