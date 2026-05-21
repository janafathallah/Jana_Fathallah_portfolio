import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraCurriculars } from './extra-curriculars';

describe('ExtraCurriculars', () => {
  let component: ExtraCurriculars;
  let fixture: ComponentFixture<ExtraCurriculars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtraCurriculars],
    }).compileComponents();

    fixture = TestBed.createComponent(ExtraCurriculars);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
