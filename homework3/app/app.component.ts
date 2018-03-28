import { Component,OnInit} from '@angular/core';
import { Http,Jsonp, Headers} from '@angular/http';  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public http:Http ,public jsonp:Jsonp){  }
  headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
}
