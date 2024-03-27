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

  pages: any[] = this.pageService.page;

  ngOnInit(){
    this.pageService.getAllPage().then(
      data => {
        this.pages = data;
      }
    ).catch(err => console.log('Error in getting all the pages'));
  }

  deletePage(Page_Id: string | null) {
    if (Page_Id) {
        this.pageService.delete(Page_Id).then(data => {
          if(data == 200){
            window.location.reload();
          }
        })
    }
  }

  naviagteToPage(Page_Id: string ){
    if(Page_Id){
      this.pageService.Page_Id = Page_Id;
      this.router.navigate(['NewPage'], { queryParams : {Page_Id : Page_Id}});
    }
  }

  naviagteToNewPage(){
    this.router.navigate(['NewPage']);
  }

}
