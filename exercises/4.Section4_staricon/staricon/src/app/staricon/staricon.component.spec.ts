import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StariconComponent } from './staricon.component';

describe('StariconComponent', () => {
  let component: StariconComponent;
  let fixture: ComponentFixture<StariconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StariconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StariconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
