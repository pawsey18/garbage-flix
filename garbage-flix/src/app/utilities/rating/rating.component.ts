import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  constructor() {}

  @Input()
  maxRating = 5;
  @Input()
  selectedStar = 0;
  @Output()
  onRating: EventEmitter<number> = new EventEmitter<number>();
  previousStar = 0;
  maxRatingArray: any[] | undefined;

  ngOnInit(): void {
    this.maxRatingArray = Array(this.maxRating).fill(0);
  }

  handleMouseEnter(index: number) {
    this.selectedStar = index + 1;
  }

  handleMouseLeave(index: number) {
    if (this.previousStar !== 0) {
      this.selectedStar = this.previousStar;
    } else {
      this.selectedStar = 0;
    }
  }

  rate(index: number) {
    this.selectedStar = index + 1;
    this.previousStar = this.selectedStar;

    this.onRating.emit(this.selectedStar);
  }
}
