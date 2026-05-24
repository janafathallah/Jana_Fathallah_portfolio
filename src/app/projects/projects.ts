import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  onGame(){
    window.open('_blank');
  }

  onParking(){
    window.open("https://github.com/janafathallah/Smart_Parking_System",'_blank');
  }

  onEmployee(){
    window.open("https://github.com/janafathallah/Employee_Management_System",'_blank');
  }

  onDatabase(){
    window.open('_blank');
  }
}
