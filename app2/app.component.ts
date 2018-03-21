import { Component } from '@angular/core';
import { ChunchuService } from './services/chunchu.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public chunchu:ChunchuService){}
  data=[];
  fn1(item){
    this.data.push(item);
    this.chunchu.addData('data1',this.data);
    console.log(this.data);
  }
a;
da1;
noOnInit(){
  this.a=this.chunchu.showData('data1');
  this.da1=this.a.split(',');
  if(this.da1 != ''){
  this.data=this.da1;}
  

}






}
