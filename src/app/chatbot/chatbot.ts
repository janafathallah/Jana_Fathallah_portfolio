import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-chatbot',
  standalone: false,
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css',
})
export class Chatbot {
  constructor(private cdr: ChangeDetectorRef) { }
  @Output() chat = new EventEmitter<boolean>();
  messages: any[] = [];
  showQuestions = true;

  questions = [
    'Just saying hello!',
    'Any extracurricular interests or activities?',
    "What's your favourite project?",
    'Why should someone hire you?',
    "We'd like to hire you",
    "Looking for your bachelor thesis paper"
  ];

  close() {
    this.chat.emit(true);
  }
  addBotMessages(messages: string[]) {
    messages.forEach((message, index) => {
      setTimeout(() => {

        this.messages = [...this.messages, { type: 'bot', text: 'typing' }];
        this.scrollToBottom();
        this.cdr.detectChanges();


        setTimeout(() => {
          this.messages = [...this.messages.slice(0, -1), { type: 'bot', text: message }];
          this.scrollToBottom();
          this.cdr.detectChanges();
        }, 1000);

      }, index * 2000);
    });

    setTimeout(() => {
      this.showQuestions = true;
      this.scrollToBottom();
      this.cdr.detectChanges();
    }, messages.length * 2000);
  }
  scrollToBottom() {
    setTimeout(() => {
      const el = document.querySelector('.bottom') as HTMLElement;
      if (el) el.scrollBy({ top: 120, behavior: 'smooth' });
    }, 50);
  }
  response(response: string) {
    this.showQuestions = false;
    this.messages.push({ type: 'user', text: response });
    this.scrollToBottom();

    if (response === 'Just saying hello!') {

      this.addBotMessages([
        'Hello!',
        'Thanks for saying hi 😁',
        'I hope youv’e enjoyed browsing my work',
        'Can I help you with anything else?'
      ]);

    }
    else if (response === 'Any extracurricular interests or activities?') {
      this.addBotMessages([
        'Outside of academics, I’m actively involved in a mix of leadership, creative, and community-based activities.',
        'I’ve participated in Model United Nations conferences, focusing on topics like security and women’s rights.',
        'I’ve also worked in university clubs in design and HR roles, contributing to both branding and event organization.',
        'In addition, I volunteered with HELM Egypt, supporting accessibility and inclusion initiatives for people with disabilities.',
        'I enjoy being part of activities that combine creativity, teamwork, and real-world impact.',
        'Can I help you with anything else?'
      ]);
    }
    else if (response === "What's your favourite project?") {
      this.addBotMessages([
        'Probably my Attack on Titan strategy game',
        'not because of the theme, but because it was the first project where I built both frontend and backend from start to finish.',
        'It was the moment I realised I actually enjoy building full systems and seeing everything come together step by step.',
        'That project made me realise this is what i want to do.',
        'Can I help you with anything else?'
      ]);

    }
    else if (response === 'Why should someone hire you?') {
      this.addBotMessages([
        "Because I don't give up easily when something doesn't work",
        'I just keep figuring it out until it does. I adapt quickly, I learn fast, and I genuinely enjoy improving my skills.',
        "I'm still early in my journey, but I care a lot about what I'm building, and I don't just want to be 'another developer'; I want to actually get good at this and grow into something great.",
        'Can I help you with anything else?'
      ]);

    }
    else if (response === "We'd like to hire you") {
      this.addBotMessages([
        "That's exciting 😄",
        'really looking forward to hearing from you',
        'feel free to reach out anytime!',
        'Contact me',
        'Can I help you with anything else?'
      ]);

    }
    else if (response === 'Looking for your bachelor thesis paper') {
      this.addBotMessages([
        'You can download my bachelor thesis paper below:',
        'Download Bachelor Thesis Paper'
      ]);
    }
  }

  contactMe() {
    const to = "janafathallahh@gmail.com";

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${to}`,
      "_blank"
    );
  }

  downloadPaper() {
    const link = document.createElement('a');
    link.href = '/assets/GUC_BSc_Thesis_S2026_BINF_Jana_Ahmed (5).pdf';
    link.download = 'Bachelor_Thesis.pdf';
    link.click();
  }
}
