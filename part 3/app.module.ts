import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.

import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './components/primer-componente/primer-componente.component';
import { AutofocusFixModule } from 'ngx-autofocus-fix';
import { TodoItemComponent } from './components/todo-item/todo-item.component'; // <--- new code
// import { TodoService } from 'src/app/services/todo.service';
@NgModule({
  declarations: [//aqui van los componentes
    AppComponent,
    PrimerComponenteComponent,
    TodoItemComponent
  ],
  imports: [//aqui van las librerias que queremos utilizar
    BrowserModule,
    FormsModule,
    AutofocusFixModule.forRoot(),
    BrowserAnimationsModule,
  ],
  // providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
  // // private todoService:TodoService;

  // constructor(private todoService:TodoService){
  //   // this.todoService=todoService;
  // }
}
