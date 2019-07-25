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
      complete: false,
    },
    {
      message: 'buy a elephant',
      complete: true,
    }
  ];
  inputValue = '';
  showType = 0;
  constructor() { }

  ngOnInit() {
  }


  destroyItem(index: number) {
    this.todoList.splice(index, 1);
  }
  toggleItem(index: number) {
    this.todoList[index].complete = !this.todoList[index].complete;
  }
  toggleAll(value: boolean) {
    for(let i = 0 ; i < this.todoList.length; i++ ) {
      this.todoList[i].complete = value;
    }
  }
  addItem(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.todoList.push({
        message: this.inputValue,
        complete: false
      });
      this.inputValue = '';
    }
  }
}
