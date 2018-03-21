import { Injectable } from '@angular/core';

@Injectable()//如果是引入两种服务，必须有
export class ChunchuService {

  constructor() { }
  todoList:any;


addData(key:string,data:any){
    localStorage.setItem(key,data);

    console.log('触发添加数据');
  }

showData(key){
  this.todoList= localStorage.getItem(key);
  return this.todoList;
}

}
