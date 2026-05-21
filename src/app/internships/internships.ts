import { Component, ElementRef, ViewChild } from '@angular/core';
import { Intern } from '../service/intern';

@Component({
  selector: 'app-internships',
  standalone: false,
  templateUrl: './internships.html',
  styleUrl: './internships.css',
})
export class Internships {

  constructor(private service: Intern){}
  internship: any;
  @ViewChild("myModal") employeeModel: ElementRef | undefined;
  status=false;

  onClick(comapny: string){
    this.internship = this.service.internships.find((x: { company: string; }) => x.company == comapny);
    this.status=this.internship.status;
    if (this.employeeModel) {
      this.employeeModel.nativeElement.style.display = 'block';
    }
}

close() {
  if (this.employeeModel) {
      this.employeeModel.nativeElement.style.display = 'none';
    }
    this.status=false;
}
}
