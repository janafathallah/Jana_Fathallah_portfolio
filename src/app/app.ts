import { ChangeDetectorRef, Component, EventEmitter, Input, signal, ViewChild } from '@angular/core';
import { Skills } from './skills/skills';
import { Internships } from './internships/internships';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PersonalWebsite');

  constructor(private cdr: ChangeDetectorRef) { }
  selectedComponent = '';
  contact = false;
  isDarkMode = false;
  @ViewChild(Skills) skillsComponent!: Skills;
  @ViewChild(Internships) internComponent!: Internships;

  onComponent(name: string) {
    this.selectedComponent = name;
    const section = document.getElementById(name);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (name == 'Skills') {
      this.skillsComponent.animateAll();
    }
    this.internComponent?.close();

    this.cdr.detectChanges();
    this.onChat(true);
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
