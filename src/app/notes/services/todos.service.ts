import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoInterface } from '../types/todo.interface';
import { FilterEnum } from '../types/filter.enum';

@Injectable()
export class TodosService {
  todos$ = new BehaviorSubject<TodoInterface[]>(JSON.parse(localStorage.getItem("todos")) || []);
  filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all);
  

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      text,
      isCompleted: false,
      id: Math.random().toString(16),
    };
   var todos = JSON.parse(localStorage.getItem("todos")) 
   if(!todos.length){
        todos=[]
   }
    todos.push(newTodo)
    localStorage.setItem("todos",JSON.stringify(todos))
    const updatedTodos = [...this.todos$.getValue(), newTodo];
    this.todos$.next(updatedTodos);
  }

  toggleAll(isCompleted: boolean): void {
    console.log('isCompleted', isCompleted);
    const updatedTodos = this.todos$.getValue().map((todo) => {
      return {
        ...todo,
        isCompleted,
      };
    });
    localStorage.setItem("todos",JSON.stringify(updatedTodos))
    this.todos$.next(updatedTodos);
  }

  changeFilter(filterName: FilterEnum): void {
    this.filter$.next(filterName);
    localStorage.setItem("todos",JSON.stringify( this.filter$))
  }

  changeTodo(id: string, text: string): void {
    const updatedTodos = this.todos$.getValue().map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
        };
      }

      return todo;
    });
    this.todos$.next(updatedTodos);
    localStorage.setItem("todos",JSON.stringify( updatedTodos))
  }

  removeTodo(id: string): void {
    const updatedTodos = this.todos$
      .getValue()
      .filter((todo) => todo.id !== id);

    this.todos$.next(updatedTodos);
    localStorage.setItem("todos",JSON.stringify( updatedTodos))
  }

  toggleTodo(id: string): void {
    const updatedTodos = this.todos$.getValue().map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    this.todos$.next(updatedTodos);
    localStorage.setItem("todos",JSON.stringify( updatedTodos))
  }
}