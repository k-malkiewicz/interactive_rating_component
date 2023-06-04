import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-thank-you-card',
  templateUrl: './thank-you-card.component.html',
  styleUrls: ['./thank-you-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ThankYouCardComponent {
  @Input() selectedRating?: number;
}
