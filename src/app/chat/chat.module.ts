import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatappComponent } from './chatapp/chatapp.component';



@NgModule({
  declarations: [ChatappComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ChatappComponent
  ]
})
export class ChatModule { }
