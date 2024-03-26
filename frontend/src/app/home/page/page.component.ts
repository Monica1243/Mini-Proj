import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageServiceService } from 'src/app/shared/services/page-service.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  constructor(private pageService: PageServiceService, private router: Router){}

  pages = this.pageService.page;

  deletePage(title: string | undefined) {
    if (title) {
        const index = this.pages.findIndex((page) => page.page === title);
        if (index !== -1) {
            this.pages.splice(index, 1); 
        }
    }
  }

  naviagteToPage(value: string){
    if(value){
      this.router.navigate(['NewPage'], { queryParams : {value : value}});
    }
  }

}
