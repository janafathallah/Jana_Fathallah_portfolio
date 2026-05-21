import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradProject } from './grad-project';

describe('GradProject', () => {
  let component: GradProject;
  let fixture: ComponentFixture<GradProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradProject],
    }).compileComponents();

    fixture = TestBed.createComponent(GradProject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
