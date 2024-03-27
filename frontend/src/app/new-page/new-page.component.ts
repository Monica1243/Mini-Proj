import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageServiceService } from '../shared/services/page-service.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent {
  titleQueryParam: string = '';
  SubTitleQueryParam: any = '';
  CategoryQueryParam: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private pageService: PageServiceService){}

  ngOnInit(): void {
    for (const element of this.pageService.page) {
      if (element.Page_Id === this.pageService.Page_Id) {
        this.titleQueryParam = element.Title;
        this.CategoryQueryParam = element.Category;
        this.SubTitleQueryParam = element.SubTitle;
        break; 
      }
    }
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
