import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YellComponent } from './yell.component';

describe('YellComponent', () => {
  let component: YellComponent;
  let fixture: ComponentFixture<YellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
