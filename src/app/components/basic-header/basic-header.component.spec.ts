import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientHeaderComponent } from './basic-header.component';

describe('GradientHeaderComponent', () => {
  let component: GradientHeaderComponent;
  let fixture: ComponentFixture<GradientHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GradientHeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
