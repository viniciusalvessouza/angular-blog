import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover:string ='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7pnBU2iVYk6Vy1Hl6NPHDgHaE7%26pid%3DApi&f=1&ipt=b8400c9a3bdd0f9300a07c2adb0b0ce977dbbbabe50625c14ec5f3ba1fdd26d7&ipo=images'
  
  @Input()
  cardTitle:string = 'quebrado'

  @Input()
  id:string='0'

  constructor(){

  }

  ngOnInit(): void {
    
  }

}
