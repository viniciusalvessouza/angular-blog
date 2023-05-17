import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dadosFalsos} from '../../dadosFalsos/dadosFalsos'
import { NEVER } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover:string ='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.GUk8sz7MvppUwEI-6bXpSwHaHa%26pid%3DApi&f=1&ipt=706b0e28ca380651724dc5b4dad4d81fc76575d4729d5f96582032f4d65646a6&ipo=images'
  @Input()
  contentTitle:string  ='titulo nao encontrado'
  @Input()
  description_content:string ='Esse titulo pode ter sido removido ou esta inacessivel no momento'

  private id:string|null ='0'

  constructor(private route:ActivatedRoute){
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value=>{
      this.id = value.get('id')
      //console.log(dadosFalsos[x])
      this.setValuesToComponet(this.id)
    })
  }

  setValuesToComponet(id:string|null){
    const result = dadosFalsos.filter(article=>
      article.id ==id
      )
    
    if(result.length != 0 ){

      this.photoCover = result[0].photo
      this.contentTitle = result[0].title
      this.description_content = result[0].description
   }

  }


}
