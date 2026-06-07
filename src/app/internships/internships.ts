import { Component, Input, ViewChild } from '@angular/core';
import { Intern } from '../service/intern';

@Component({
  selector: 'app-internships',
  standalone: false,
  templateUrl: './internships.html',
  styleUrl: './internships.css',
})
export class Internships {

  constructor(private service: Intern) { }
  internship: any;
  status = false;
  showModal = false;


  onClick(company: string) {
    this.internship = this.service.internships.find(
      (x: { company: string }) => x.company == company
    );

    this.status = this.internship.status;
    this.showModal = true;
  }

  close() {
    this.showModal = false;
    this.status = false;
  }
}
