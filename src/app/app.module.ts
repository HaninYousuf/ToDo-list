// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { TodoListComponent } from './todo-list/todo-list.component';
// import { TaskComponent } from './task/task.component';
// import { FormsModule } from '@angular/forms';


// @NgModule({
//   declarations: [
//     AppComponent,
//     TodoListComponent,
//     TaskComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     // ...
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this line

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import the component

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent // Add the component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule // Add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
