import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maths } from './maths';

describe('Maths', () => {
  let component: Maths;
  let fixture: ComponentFixture<Maths>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maths]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maths);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
