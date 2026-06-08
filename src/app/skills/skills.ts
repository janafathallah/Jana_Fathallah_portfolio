import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements AfterViewInit {

private hasAnimated = false;

private skillIds = [
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

constructor(private el: ElementRef) {}

ngAfterViewInit() {
  this.createObserver();
}

createObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animateAll();
        }

        if (!entry.isIntersecting) {
          this.hasAnimated = false;
          this.resetAll();
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(this.el.nativeElement);
}

animateAll() {
  this.resetAll();

  // FORCE DOM RESET (critical part)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      this.animateGroup(
        ['html', 'css', 'js', 'angular', 'sql', 'java'],
        300
      );

      this.animateGroup(
        ['teamwork', 'communication', 'problemSolving', 'creativity'],
        300
      );
    });
  });
}

animateGroup(ids: string[], delay: number) {
  ids.forEach((id, i) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;

      const target = getComputedStyle(el)
        .getPropertyValue('--target')
        .trim();

      el.style.setProperty('--progress', target);
    }, i * delay);
  });
}

resetAll() {
  this.skillIds.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.transition = 'none';
    el.style.setProperty('--progress', '0%');
    void el.offsetHeight;
    el.style.transition = '';
  });
}
}
