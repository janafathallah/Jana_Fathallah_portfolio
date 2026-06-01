import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  standalone: false,
  templateUrl: './panel.html',
  styleUrl: './panel.css',
})
export class Panel {
  @Output() component = new EventEmitter<string>();
  @Output() contact = new EventEmitter<boolean>();
  @Output() mode = new EventEmitter<boolean>();
  @Input() darkMode!: boolean;

  onclick(name: string) {
    this.component.emit(name);
  }
  onContact(){
    this.contact.emit(true);
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {

     const panel = document.getElementById('ul');
     const button =document.getElementById('button');

  if (panel && button) {
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    const opacity = Math.min(scrollTop / 120, 0.28);

    panel.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
    button.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
  }
  }

  toggleMode(){
    if(this.darkMode){
      this.mode.emit(false);
    }
    else{
      this.mode.emit(true);
    }
  }
}
