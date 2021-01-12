import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  filter: string = '';
  todos: Todo[];
  addToDo: string = '';
  todo: Todo = { task: '', completed: false };
  constructor() {
    this.todos = [
      { task: 'Laundry', completed: false },
      { task: 'Clean Kitchen', completed: true },
      { task: 'Clean Bathrooms', completed: false },
      { task: 'Vacuum', completed: true },
      { task: 'Schedule Wallpaper Removal', completed: false },
      { task: 'Select Kitchen Remodel Company', completed: false },
    ];
  }
  addTask(): void {
    this.todo = { task: this.addToDo, completed: false };
    this.todos.push(this.todo);
  }
  removeTask(index: number): void {
    // let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  completeTask(todo: Todo): void {
    let index = this.todos.indexOf(todo);
    this.todos[index].completed = true;
  }
  getFilteredResults(): Todo[] {
    return this.todos.filter((todo) => {
      return todo.task.toLowerCase().includes(this.filter.toLowerCase());
    });
  }
  ngOnInit(): void {}
}
