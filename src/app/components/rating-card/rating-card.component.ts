import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-rating-card',
  templateUrl: './rating-card.component.html',
  styleUrls: ['./rating-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RatingCardComponent {
  selectedRating?: number;
  submitted: boolean = false;

  setRating(num: number): void {
    this.selectedRating = num;
  }

  ok(): void {
    this.submitted = true;
  }
}
