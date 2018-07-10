import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoInput: string = "";
  todos= [];

   createTodo() {
     let trimmedInput = this.todoInput.trim();
     if(trimmedInput !== "") {

     this.todos.push({
       isChecked: false,
       name: this.todoInput
     });
     }
     //code that will create a todo
    this.todoInput = "";
   }

   editTodo(todo) {
    let index = this.todos.indexOf(todo);
    console.log(index)

    let tempTodoDesc = this.todos[index].name;

    this.todos[index].name = prompt("Please edit your todo", this.todos[index].name);
    // , this.todos[index].name); this part makes the todo not disapear when you dont edit your todo
    console.log(this.todos[index].name);
    if(this.todos[index].name == null ) {
      this.todos[index].name = tempTodoDesc;
      //we changed this so that when we pressed cancel our todo wouldnt disappear
      //we changed from an array to objects, beacuse of that we had to put .name after every [index] 
    }
  //  rename data input to whatever i write
  //edits the todo
   }

   deleteTodo(todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
   }

   deleteAll() {
     this.todos = []
   }

   checkOffTodo(todo) {
     todo.isChecked = !todo.isChecked;
   }
}
