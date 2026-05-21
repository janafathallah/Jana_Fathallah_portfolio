import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  standalone: false,
  templateUrl: './panel.html',
  styleUrl: './panel.css',
})
export class Panel {
  @Output() component = new EventEmitter<string>();


  onclick(name: string) {
    this.component.emit(name);
    console.log(name);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

     const panel = document.getElementById('ul');

  if (panel) {
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    const opacity = Math.min(scrollTop / 120, 0.28);

    panel.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
  }
  }
}
