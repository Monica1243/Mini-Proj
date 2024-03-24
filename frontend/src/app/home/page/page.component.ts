import { Component } from '@angular/core';
import { PageServiceService } from 'src/app/shared/services/page-service.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  constructor(private pageService: PageServiceService){}

  pages = this.pageService.page;
}
