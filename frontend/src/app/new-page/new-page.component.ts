import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent {
  titleQueryParam: string = '';

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(event: Event): void {
    this.route.queryParams.subscribe(params => {
      this.titleQueryParam = params['value'] || null; 
    });
    
  }
  resizeTitleBox(element: HTMLInputElement) {
    element.style.width = 'auto';
    if (element.scrollWidth > parseInt(window.getComputedStyle(element).maxWidth || '0')) {
      element.style.width = window.getComputedStyle(element).maxWidth || '';
    } else {
      element.style.width = element.scrollWidth + 'px';
    }
  }

  onSave(){
    this.router.navigate(['Home'])
  }
}
