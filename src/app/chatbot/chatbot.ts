import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  standalone: false,
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css',
})
export class Chatbot {
   @Output() chat = new EventEmitter<boolean>();
   question="";
   messages: any[] = [];

questions = [
  'Just saying hello!',
  'Tell us about yourself',
  "What's your favourite project?",
  'Why should someone hire you?',
  "We'd like to hire you"
];

  close(){
    this.chat.emit(true);
  }


}
