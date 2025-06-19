import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-download',
  imports: [],
  templateUrl: './download.html',
  styles: ``,
})
export class Download {
  copied(event: MouseEvent, textToCopy: string) {
    const target = event.target as HTMLElement;
    const button = target.closest('button');

    if (!button) return;

    const originalHTML = button.innerHTML;

    navigator.clipboard.writeText(textToCopy).then(() => {
      button.innerHTML = '<i class="bi bi-check"></i>';
      setTimeout(() => {
        button.innerHTML = originalHTML;
      }, 500);
    });
  }
}
