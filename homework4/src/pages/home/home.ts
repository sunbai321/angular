import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [];

    constructor(public navCtrl: NavController) {
      for (let i = 0; i < 3; i++) {
        this.items.push( this.items.length );
      }
 
  }

  icons:any='infor';

 @ViewChild(Slides) slides:Slides;
 
  goToSlide(){
   this.slides.slideTo(2,500);
 }

// 上拉加载
 doInfinite(infiniteScroll) {
  console.log('Begin async operation');

  setTimeout(() => {
    for (let i = 0; i < 3; i++) {
      this.items.push( this.items.length );
    }

    console.log('Async operation has ended');
    infiniteScroll.complete();
    if(this.items.length>=9){
      infiniteScroll.enable(false);
      this.items.push('');
    }
  }, 500);
}



// 下拉刷新
doRefresh(refresher) {
  console.log('刷新开始', refresher);

  setTimeout(() => {
    console.log('刷新完毕');
    refresher.complete();
  }, 2000);
}



}
