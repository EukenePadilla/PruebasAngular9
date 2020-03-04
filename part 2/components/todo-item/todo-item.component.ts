import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  @Output() checkedItem = new EventEmitter();//función necesaria para pasarle datos del hijo al padre y viceversa
  @Output() doubleClickedItem = new EventEmitter();//función necesaria para pasarle datos del hijo al padre y viceversa
  // @Output() blurredItem = new EventEmitter();//función necesaria para pasarle datos del hijo al padre y viceversa
  // @Output() enteredItem = new EventEmitter();//función necesaria para pasarle datos del hijo al padre y viceversa
  @Output() cancelledItem = new EventEmitter();//función necesaria para pasarle datos del hijo al padre y viceversa
  @Output() deletedItem = new EventEmitter();//función necesaria para pasarle datos del hijo al padre y viceversa


  constructor() { }

  ngOnInit(): void {
  }

  //el nombre de la funcion que está, es el que está en el html del padre(primer-componente)
  //aqui lo que estamos haciendo es pasarle los datos al padre por lo de emit() 
  doneEdit(todo:Todo):void{
    this.checkedItem.emit(todo);
  }
  editTodo(todo:Todo):void{
    this.doubleClickedItem.emit(todo);
  }
  cancelEdit(todo:Todo):void{
    this.cancelledItem.emit(todo);
  }
  deleteTosdo(todo:Todo):void{
    this.deletedItem.emit(todo);
  }
}
