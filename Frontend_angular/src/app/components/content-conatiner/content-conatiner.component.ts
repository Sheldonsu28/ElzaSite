import { Component, Directive, Input, ViewChild, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'content-container',
  templateUrl: './content-conatiner.component.html',
  styleUrls: ['./content-conatiner.component.css']
})

export class ContentConatinerComponent{

  @Input('sectionTitle') title: string = '';
  constructor(){}
  
}
