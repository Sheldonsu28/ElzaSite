import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoContentViewComponent } from './video-content-view.component';

describe('VideoContentViewComponent', () => {
  let component: VideoContentViewComponent;
  let fixture: ComponentFixture<VideoContentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoContentViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoContentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
