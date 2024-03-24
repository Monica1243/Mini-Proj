import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
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
