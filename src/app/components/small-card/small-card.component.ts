import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover:string ='https://folhagospel.com/wp-content/uploads/2017/08/banda_resgate_no_seu_quintal_capa_20171.jpg'
  
  @Input()
  cardTitle:string = 'Banda Resgate a asdasda'

  constructor(){

  }

  ngOnInit(): void {
    
  }

}
