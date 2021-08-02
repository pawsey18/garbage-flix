import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMovieTheatherComponent } from './index-movie-theather.component';

describe('IndexMovieTheatherComponent', () => {
  let component: IndexMovieTheatherComponent;
  let fixture: ComponentFixture<IndexMovieTheatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexMovieTheatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexMovieTheatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
