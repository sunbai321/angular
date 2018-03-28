import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodlistComponent } from './components/goodlist/goodlist.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms'; 
import { ActivatedRoute } from '@angular/router';

const routes: Routes = [
  {path:'goodlist',component:GoodlistComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:"home",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
