import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  selectedGithub = '';
  selectedWebsite = '';
  showProjectModal = false;

  openProject(github: string, website: string) {
    this.selectedGithub = github;
    this.selectedWebsite = website;
    this.showProjectModal = true;
  }

  goToGithub() {
    window.open(this.selectedGithub, '_blank');
  }

  goToWebsite() {
    window.open(this.selectedWebsite, '_blank');
  }

  onGame() {
    window.open('_blank');
  }

  onParking() {
    this.openProject(
      'https://github.com/janafathallah/Smart_Parking_System',
      'https://smart-parking-system-nine-pink.vercel.app/login'
    );
  }

  onEmployee() {
    this.openProject(
      'https://github.com/janafathallah/Employee_Management_System',
      'https://employee-management-system-lovat-seven.vercel.app/login'
    );
  }

  onDatabase() {
    window.open('_blank');
  }
}
