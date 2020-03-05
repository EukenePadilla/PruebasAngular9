import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { trigger, transition, style, animate } from '@angular/animations';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.scss'],
  providers: [TodoService],
  animations: [
    trigger('fade',[
      transition(':enter',[
        style({opacity:0,transform:'translateY(30px)'}),
        animate(500,style({opacity:1,transform: 'translateY(0px)'}))
      ]),

      transition(':leave',[
        animate(500,style({opacity:0,transform: 'translateY(30px)'}))
      ])
    ])
  ]
})
export class PrimerComponenteComponent implements OnInit {
    tosdoTitle: string;


  constructor(public todoService:TodoService) { }

  ngOnInit(){
     this.tosdoTitle = '';
  }

  addTodo():void{
    if(this.tosdoTitle.trim().length===0){
      return;
    }

    this.todoService.addTodo(this.tosdoTitle);
   
    this.tosdoTitle="";
  }


 }
