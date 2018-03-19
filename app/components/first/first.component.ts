import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

@Output() onkeyUp = new EventEmitter ();

  constructor() { }

  ngOnInit() {
  }
tolist=[];
  content='';
  keyData(e){
    if(e.keyCode == 13){
      this.onkeyUp.emit(this.content);
      this.tolist.push(this.content);
      this.content="";
      console.log(this.tolist);
    }
  }
}
