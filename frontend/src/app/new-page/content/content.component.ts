import { Component } from '@angular/core';
import { PageServiceService } from 'src/app/shared/services/page-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  Content!:string;
  constructor(private pageService: PageServiceService){}

  ngOnInit(){
    this.pageService.getContent(this.pageService.Page_Id).then( data => {
      console.log(data);
      this.Content = data.Content;
    }).catch(error => {
      console.log("Error");
    })
  }

  resizeTextArea(content: HTMLElement){
    content.style.height = 'auto';
    if(content.scrollHeight > parseInt(window.getComputedStyle(content).maxHeight)){
      content.style.height = window.getComputedStyle(content).maxHeight;
      content.style.overflow = 'scroll'
    }
    else{
      content.style.height = (content.scrollHeight) + "px";
    }
  }
}
