import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckResponseComponent } from './check-response.component';

describe('CheckResponseComponent', () => {
  let component: CheckResponseComponent;
  let fixture: ComponentFixture<CheckResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
