import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills  implements AfterViewInit {

  private hasAnimated = false;
  private intervals: any[] = [];

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.createObserver();
  }

createObserver() {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        if (!this.hasAnimated) {
          this.hasAnimated = true;

          setTimeout(() => {
            this.animateAll();
          }, 80);
        }
      } else {
        this.hasAnimated = false;
        this.resetAll();
      }
    }
  }, {
    threshold: 0.3
  });

  observer.observe(this.el.nativeElement);
}

animateAll() {
  this.resetAll();

  this.animateGroup(
  ['html', 'css', 'js', 'angular', 'sql', 'java'],
  30,
  500
);

  this.animateGroup(
    ['teamwork', 'communication', 'problemSolving', 'creativity'],
    30,
    500
  );
}

animateGroup(ids: string[], speed: number, delayBetweenStarts: number) {
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];

    setTimeout(() => {
      const el = document.getElementById(id);

      if (!el) return;

      const target = parseInt(
        getComputedStyle(el).getPropertyValue('--target')
      );

      let current = 0;

      const interval = setInterval(() => {
        if (current >= target) {
          clearInterval(interval);
          return;
        }

        current++;
        el.style.setProperty('--progress', `${current}%`);
      }, speed);

      this.intervals.push(interval);
    }, i * delayBetweenStarts);
  }
}
resetAll() {
  const ids = [
    'html',
    'css',
    'js',
    'angular',
    'sql',
    'java',
    'teamwork',
    'communication',
    'problemSolving',
    'creativity'
  ];

  for (const interval of this.intervals) {
    clearInterval(interval);
  }

  this.intervals = [];

  for (const id of ids) {
    const el = document.getElementById(id);

    if (el) {
      el.style.setProperty('--progress', '0%');
      el.style.animation = 'none';
    }
  }
}
}
