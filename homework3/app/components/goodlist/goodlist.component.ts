import { Component, OnInit } from '@angular/core';
import { Http,Jsonp} from '@angular/http';  

@Component({
  selector: 'app-goodlist',
  templateUrl: './goodlist.component.html',
  styleUrls: ['./goodlist.component.css']
})
export class GoodlistComponent implements OnInit {

  constructor(public http:Http ,public jsonp:Jsonp){  }

  arr=[];
  ngOnInit() {
   
      this.jsonp.get( 'http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK' ).subscribe( data=>{ 

       console.log(data);
       
        this.arr=data['_body'];

      } );

  }

}
