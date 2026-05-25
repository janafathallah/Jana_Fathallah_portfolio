import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  standalone: false,
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css',
})
export class Chatbot{
   @Output() chat = new EventEmitter<boolean>();
   messages: any[] = [];
   showQuestions=true;

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

  response(response: string){
    this.showQuestions=false;
    this.messages.push({type: 'user', text: response});
    
    if(response==='Just saying hello!'){
      this.messages.push(
        {type:'bot',text:'Hello!'},
        {type:'bot',text:'Thanks for saying hi 😁'},
        {type:'bot',text:'I hope youve enjoyed browsing my work'},
        {type:'bot',text:'Can I help you with anything else?'}
      )
      this.showQuestions=true;
    }
    else if(response==='Tell us about yourself'){
      this.messages.push(
        {type:'bot',text:''},
        {type:'bot',text:'Thanks for saying hi 😁'},
        {type:'bot',text:'I hope youve enjoyed browsing my work'},
        {type:'bot',text:'Can I help you with anything else?'}
      )
      this.showQuestions=true;

    }
    else if(response==="What's your favourite project?"){
      this.messages.push(
        {type:'bot',text:'Probably my Attack on Titan strategy game'},
        {type:'bot',text:'not because of the theme, but because it was the first project where I built both frontend and backend from start to finish.'},
        {type:'bot',text:'It was the moment I realised I actually enjoy building full systems and seeing everything come together step by step.'},
        {type:'bot',text:'That project made me realise this is what i want to do.'},
        {type:'bot',text:'Can I help you with anything else?'}
      )
      this.showQuestions=true;
      
    }
    else if(response==='Why should someone hire you?'){
      this.messages.push(
        {type:'bot',text:'Because I don’t give up easily when something doesn’t work'},
        {type:'bot',text:'I just keep figuring it out until it does. I adapt quickly, I learn fast, and I genuinely enjoy improving my skills.'},
        {type:'bot',text:'I’m still early in my journey, but I care a lot about what I’m building, and I don’t just want to be ‘another developer’; I want to actually get good at this and grow into something great.'},
        {type:'bot',text:'Can I help you with anything else?'}
      )
      this.showQuestions=true;
      
    }
    else if(response==="We'd like to hire you"){
      this.messages.push(
        {type:'bot',text:'That’s exciting 😄'},
        {type:'bot',text:'really looking forward to hearing from you'},
        {type:'bot',text:'feel free to reach out anytime!'},
        {type:'bot',text:'Contact me'},
        {type:'bot',text:'Can I help you with anything else?'}
      )
      this.showQuestions=true;

    }
  }

  contactMe(){
    const to = "janafathallahh@gmail.com";

  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=${to}`,
    "_blank"
  );
  }
}
