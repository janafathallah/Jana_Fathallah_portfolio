import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  standalone: false,
  templateUrl: './panel.html',
  styleUrl: './panel.css',
})
export class Panel {
  @Output() component = new EventEmitter<string>();


  onclick(name: string){
    this.component.emit(name);
    console.log(name);
  }
}
