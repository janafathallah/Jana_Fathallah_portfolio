import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  goToGit(){
    window.location.href = "https://github.com/janafathallah";
  }

  goToLinkedIn(){
    window.location.href = "https://www.linkedin.com/in/jana-fathallah-bb71aa287";
  }

  goToEmail(){
    window.location.href = "https://github.com/janafathallah";
  }
}
