import { Component, OnInit,Input } from '@angular/core';
import{ChunchuService}from'../../services/chunchu.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(public aa:ChunchuService) { }
  b;
  da2;
  ngOnInit() {
    this.b=this.aa.showData('data2');
    this.da2=this.b.split(',');
    if(this.da2 != '')
    {this.arr2=this.da2;}
    console.log(this.b);
  }
@Input() arr1:Array<any>;
  arr2=[];
  
  change(idx){
    this.arr2.push(this.arr1[idx]);
    this.arr1.splice(idx,1);
    this.aa.addData('data1',this.arr1);
    this.aa.addData('data2',this.arr2);
  }
  delData1(idx){
    this.arr1.splice(idx,1);
    this.aa.addData('data1',this.arr1);
    this.aa.addData('data2',this.arr2);
  }

  change2(idx){
    this.arr1.push(this.arr2[idx]);
    this.arr2.splice(idx,1);
    this.aa.addData('data1',this.arr1);
    this.aa.addData('data2',this.arr2);
  }
  delData2(idx){
    this.arr2.splice(idx,1);
    this.aa.addData('data1',this.arr1);
    this.aa.addData('data2',this.arr2);
  }
}
