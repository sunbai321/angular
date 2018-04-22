import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { XieyiPage } from '../xieyi/xieyi';
import {MinePage } from '../mine/mine';
/**
 * Generated class for the ZhucePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zhuce',
  templateUrl: 'zhuce.html',
})
export class ZhucePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZhucePage');
  }
  haha(){
    this.navCtrl.push(XieyiPage);
 }
 tiaozhuan(){
  this.navCtrl.push(MinePage);
}

}
