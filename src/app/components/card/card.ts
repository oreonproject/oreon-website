import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styles: ``,
})
export class Card {
  @Input() title: string = '';
  @Input() description: string = '';
}
