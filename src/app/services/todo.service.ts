import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  constructor() { } 

  // Get To Dos
  getTodos() {
    return JSON.parse(localStorage.getItem('task'));
  }

  // Add To Dos
  addTodos(todo) {
    return localStorage.setItem("task", JSON.stringify(todo));
  }

  deleteTodo(todo) {
    return localStorage.setItem('task', JSON.stringify(todo));
  }
}
