import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarWithImgComponent } from './car-with-img.component';

describe('CarWithImgComponent', () => {
  let component: CarWithImgComponent;
  let fixture: ComponentFixture<CarWithImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarWithImgComponent]
    });
    fixture = TestBed.createComponent(CarWithImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
