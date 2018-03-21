import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ChunchuService}from'./services/chunchu.service';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,//实现数据绑定的作用
     FormsModule
  ],
  providers: [ChunchuService],//申明服务
  bootstrap: [AppComponent]
})
export class AppModule { }
