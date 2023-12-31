import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullNewsComponent } from './full-news.component';

describe('FullNewsComponent', () => {
  let component: FullNewsComponent;
  let fixture: ComponentFixture<FullNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullNewsComponent]
    });
    fixture = TestBed.createComponent(FullNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
