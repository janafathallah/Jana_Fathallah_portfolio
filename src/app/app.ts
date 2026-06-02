import { Component, EventEmitter, Input, input, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PersonalWebsite');
  selectedComponent = '';
  contact = false;
  isDarkMode = false;

  onComponent(name: string) {
    this.selectedComponent = name;
    const section = document.getElementById(name);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  onContact(open: boolean) {
    if (open) {
      this.contact = true;

    }
  }
  onChat(close: boolean) {
    if (close) {
      this.contact = false;
    }
  }

  onMode(mode: boolean) {
    if (mode) {
      document.body.classList.add('dark-mode');
      this.isDarkMode = true;

    } else {
      document.body.classList.remove('dark-mode');
      this.isDarkMode = false;
    }
  }
}
