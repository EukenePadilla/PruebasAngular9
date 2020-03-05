import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.scss'],
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
  tosdos: Todo[];
  tosdoTitle: string;
  idForTodo:number;
  title:string;
  beforeEditingCache:string;
  filter:string;
  anyRemainingModel: boolean;

  constructor() { }

  ngOnInit(){
    this.filter='all';
    this.beforeEditingCache="";
    this.title="LAUGARREN FROGA";
    this.tosdoTitle = '';
    this.anyRemainingModel = true;
    this.idForTodo=4;
    this.tosdos =[
      {
      'id':1,
      'title':'Finish Angular Screencast',
      'completed':false,
      'editing':false,
    },
    {
      'id':2,
      'title':'Take over the world',
      'completed':false,
      'editing':false,
    },
    {
      'id':3,
      'title':'One more thing',
      'completed':false,
      'editing':false,
    },
  ] ;
  }

  addTodo():void{
    if(this.tosdoTitle.trim().length===0){
      return;
    }

    this.tosdos.push({
      id:this.idForTodo,
      title: this.tosdoTitle,
      completed:false,
      editing:false
    })



    this.tosdoTitle="";
    this.idForTodo++;
  }
  editTodo(todo:Todo):void{
    this.beforeEditingCache=todo.title;//cuando haga doble click guardaremos el titulo clickado
    
    todo.editing=true;//y mostraremos el input con el nombre del titulo clickado
  }

  doneEdit(todo:Todo):void{
    if(todo.title.trim().length===0){/*si el titulo clickado(quitando espacios antes y despues del string) 
      esta vacio, se pondrá el nombre que ya teníamos guardado en esta variable*/
      todo.title=this.beforeEditingCache;
    }
    this.anyRemainingModel = this.anyRemaining();
    todo.editing = false;

    todo.editing=false; /* cuando ha terminado de editar y da enter o clicka en otro titulo,
    gracias al autofocus y a convertirlo en falso,desaparece el input de editar */
  }

  cancelEdit(todo:Todo):void{
    todo.title=this.beforeEditingCache;
    todo.editing=false; 
  }

  checkAllTodos():void{
    this.tosdos.forEach(elemento=> elemento.completed = (<HTMLInputElement> event.target).checked);/* Aqui esta mirando
    cada elemento del array tosdos para decirle que cambie el atributo completed de cada uno de los elementos a true*/
  
    this.anyRemainingModel = this.anyRemaining();

  }
  anyRemaining(): boolean {
    return this.remaining() !== 0;
  }

  remaining():number{
    return this.tosdos.filter(elemento=> !elemento.completed ).length;
     
  }  

  tosdosFiltered():Todo[]{
    if(this.filter==="all"){
      return this.tosdos
    }else if (this.filter ==="active"){
      return this.tosdos.filter(elemento => !elemento.completed)
    }else if (this.filter ==="completed"){
      return this.tosdos.filter(elemento => elemento.completed)
    }

    return this.tosdos
  }
  
  atLeastOneCompleted():boolean{
    return this.tosdos.filter(elemento=> elemento.completed ).length>0;/*Si hay alguno que este completado,
    el length de tosdos basado en el filtro, será mayor a 0 por lo que devolverá un true, si no false.
    En caso de que devuelva true, se mostrará el botón que hay en el html, con false, no saldrá en pantalla*/
  }

  clearCompleted():void{
    this.tosdos=this.tosdos.filter(elemento=> !elemento.completed );/*Cuando clickas y te manda a esta funcion,
    va a hacer que todos los que esten checkeados desaparezcan de tu vista, porque se queda gracias al filtro solo los 
    elementos no completados en el array de tosdos*/
  }

  deleteTosdo(todo:Todo):void{
    
    this.tosdos=this.tosdos.filter(elemento=> elemento.id !== todo.id );
  }
}
