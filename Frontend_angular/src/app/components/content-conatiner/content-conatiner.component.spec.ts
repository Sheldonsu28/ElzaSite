import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentConatinerComponent } from './content-conatiner.component';

describe('ContentConatinerComponent', () => {
  let component: ContentConatinerComponent;
  let fixture: ComponentFixture<ContentConatinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentConatinerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentConatinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
