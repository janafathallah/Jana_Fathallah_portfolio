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
    const to = "janafathallahh@gmail.com";

  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=${to}`,
    "_blank"
  );
  }
}
