import { Component, Input, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterModule],
  templateUrl: './card.html',
  styles: ``,
})
export class Card {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() button: string = '';
  @Input() buttonEnabled: boolean = true;
  @Input() internRoute: boolean = false;
  @Input() destination: string = '#';
}
