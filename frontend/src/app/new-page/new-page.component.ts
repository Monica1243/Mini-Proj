import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent {
  resizeTitleBox(element: HTMLInputElement) {
    element.style.width = 'auto';
    if (element.scrollWidth > parseInt(window.getComputedStyle(element).maxWidth || '0')) {
      element.style.width = window.getComputedStyle(element).maxWidth || '';
    } else {
      element.style.width = element.scrollWidth + 'px';
    }
  }
}
