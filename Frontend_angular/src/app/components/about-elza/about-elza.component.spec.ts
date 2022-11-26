import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutElzaComponent } from './about-elza.component';

describe('AboutElzaComponent', () => {
  let component: AboutElzaComponent;
  let fixture: ComponentFixture<AboutElzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutElzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutElzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
