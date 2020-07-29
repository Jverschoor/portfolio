import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxStarBackgroundComponent } from './parallax-star-background.component';

describe('ParallaxStarBackgroundComponent', () => {
  let component: ParallaxStarBackgroundComponent;
  let fixture: ComponentFixture<ParallaxStarBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxStarBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxStarBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
