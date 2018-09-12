import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookCommentComponent } from './facebook-comment.component';

describe('FacebookCommentComponent', () => {
  let component: FacebookCommentComponent;
  let fixture: ComponentFixture<FacebookCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
