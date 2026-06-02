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
        }
        else {
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
      15,
      300
    );
    this.animateGroup(
      ['teamwork', 'communication', 'problemSolving', 'creativity'],
      20,
      500
    );
  }

  animateGroup(ids: string[], speed: number, pause: number) {
    let i = 0;
    const next = () => {
      if (i >= ids.length) return;
      const el = document.getElementById(ids[i++]);
      if (!el) {
        next();
        return;
      }
      const target = parseInt(
        getComputedStyle(el).getPropertyValue('--target')
      );
      let current = 0;
      const interval = setInterval(() => {
        current++;
        el.style.setProperty('--progress', current + '%');
        if (current >= target) {
          clearInterval(interval);
          setTimeout(next, pause);
        }
      }, speed);
      this.intervals.push(interval);
    };
    next();
  }

  resetAll() {
    const ids = [
      'html', 'css', 'js', 'angular', 'sql', 'java',
      'teamwork', 'communication', 'problemSolving', 'creativity'
    ];
    for (const i of this.intervals) {
      clearInterval(i);
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
