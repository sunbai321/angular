import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data=[];
  fn1(item){
    this.data.push(item);
    console.log(this.data);
  }
}
