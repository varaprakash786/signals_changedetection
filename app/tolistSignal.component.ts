import { CommonModule } from "@angular/common";
import { Component, signal, WritableSignal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'app-todolistSignal',
    imports:[CommonModule,FormsModule],
    template:`
    <div class="container">
  <div class="todo-app">
    <div class="app-title">
      <h1>To-do app</h1>
      <i class="fa fa-link" aria-hidden="true"></i>
    </div>
    <div class="row">
      <input
        type="text"
        placeholder="Add a to-do item"
        [(ngModel)]="todoName"
        #todo
      />
      <button type="button" class="addBtn" (click)="addTodo(todo)">
        Add Task
      </button>
    </div>
    <ul>
      @for (item of todos(); track item; let i = $index) {
      <li class="todo-item">
        {{ item }}

        <button class="removeBtn" type="button" (click)="removeTodo(i)">
          Remove
        </button>
      </li>
      }
    </ul>
  </div>
</div>


    `,
    styles:`
    .container {
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
}

.todo-app {
  width: 540px;
  min-height: 55vh;
  background-color: #fff;
  padding: 40px 30px 70px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.app-title {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.app-title h1 {
  color: #002765;
  font-size: 40px;
}

.app-title i {
  color: #002765;
  font-size: 30px;
}

.row {
  display: flex; /* Switch to flexbox for better alignment */
  align-items: center;
  width: 100%;
  border-radius: 30px;
  background-color: #edeef0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

input {
  flex: 1;
  border: none;
  padding: 12px 20px;
  font-size: 17px;
  background-color: transparent;
  border-radius: 30px 0 0 30px;
  outline: none;
}

.addBtn {
  flex-shrink: 0; /* Prevent the button from shrinking */
  width: 15vw;
  padding: 12px;
  font-size: 17px;
  background-color: #002765;
  color: #fff;
  cursor: pointer;
  border-radius: 0 30px 30px 0;
  border: none;
  transition: all 0.25s ease;
}

.addBtn:hover {
  filter: brightness(0.9);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  color: #333;
  background-color: #f4f4f4;
  margin-bottom: 8px;
  margin-right: 25px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
}

.removeBtn {
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  background-color: #fc412c;
  color: #fff;
  cursor: pointer;
  border-radius: 20px 30px 30px 0;
  transition: all 0.25s ease;
}

.removeBtn:hover {
  filter: brightness(0.85);
}

button:hover {
  filter: brightness(0.85);
}

    `,
    standalone:true
})

export class TodoListSignalComponent {

  todoName: '' | undefined;
  todos: WritableSignal<string[]> = signal([])

addTodo(todo: HTMLInputElement): void {
    const item = todo.value;
    this.todos.update((todos) => [item, ...todos]);
    todo.value = '';
    todo.focus();
  }

  removeTodo(index: number): void {
    this.todos.update((todos) => [
      ...todos.slice(0, index),
      ...todos.slice(index + 1),
    ]);
  }


    
}