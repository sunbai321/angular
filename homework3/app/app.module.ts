import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
import { HttpModule,JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { GoodlistComponent } from './components/goodlist/goodlist.component';
import { HomeComponent } from './components/home/home.component'; 


@NgModule({
  declarations: [
    AppComponent,
    GoodlistComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
