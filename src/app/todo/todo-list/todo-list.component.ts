import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoFormComponent } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  clickAddTodo() {
    const modal = this.modalService.open(TodoFormComponent);
    modal.result.then(
      this.handleModalTodoFormClose.bind(this),
      this.handleModalTodoFormClose.bind(this)
    )
  }

  handleModalTodoFormClose(response) {
    // is response an object?
    // if (response === Object(response)) {
    //   if (response.createMode) {
    //     response.todo.id = response.id;
    //     this.todos.unshift(response.todo);
    //   } else {
    //     let index = this.todos.findIndex(value => value.id == response.id);
    //     this.todos[index] = response.todo;
    //   }
    // }
    alert('modal cerrado')
  }

}
