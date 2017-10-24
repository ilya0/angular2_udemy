import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartlikeComponent } from './heartlike.component';

describe('HeartlikeComponent', () => {
  let component: HeartlikeComponent;
  let fixture: ComponentFixture<HeartlikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartlikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartlikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
