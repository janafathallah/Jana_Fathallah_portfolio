import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Intern {
   internships = [
    { role: "Front-end Developer Intern", company: "Hassan Allam Holding", duration: "February 2026-August 2026", locationType: "On-Site",
      status: true, description: "working on real-world web development projects; integrating APIs and building responsive user interfaces", technologiesUsed: "Angular, JavaScript, HTML, CSS, REST APIs"
    },
    { role: "Junior Teaching Assistant-Data Structures & Algorithms", company: "German University in Cairo", duration: "September 2024-January 2025", locationType: "On-Site",
      status: false, description: "Assisted students with Java-based data structures and algorithms while reinforcing object-oriented programming concepts and reviewing code assignments.", technologiesUsed: "Java, OOP, Data Structures"
    },
    { role: "Information Technology Intern", company: "ORA Developers", duration: "July 2025", locationType: "On-Site",
      status: false, description: "Worked with technical support and applications teams on employee onboarding and offboarding systems, Salesforce workflows and SQL queries", technologiesUsed: "SQL Server, SSMS, Salesforce, Active Directory"
    },
    { role: "Front-end Developer Intern", company: "Elevvo Pathways", duration: "October 2025", locationType: "Remote",
      status: false, description: "Developed responsive web interfaces while applying mobile-first design principles and interctive UI features such as animations, dark/light mode toggles, and form validation", technologiesUsed: "HTML, CSS, JavaScript, Responsive Design"
    },

  ]
}
