import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PersonalWebsite');
  selectedComponent = '';


  onComponent(name: string) {
      this.selectedComponent = name;
      const section = document.getElementById(name);
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
