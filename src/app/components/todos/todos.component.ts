import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  todos = [];
  haha:string;
  constructor(private todoService:TodoService) { }
   
  ngOnInit() {
    this.getTodos();
  }

  getTodos(){
    this.todos=this.todoService.getTodos();
    console.log(this.todos);
  }

  deleteTodo(todos){
    this.todos = this.todos.filter(todo => todo !== todos);
    this.todoService.deleteTodo(this.todos);
  }

  addTodo(todo) {
    this.todos.push(todo);
    this.todoService.addTodos(this.todos);
    console.log(todo);
  }
}
