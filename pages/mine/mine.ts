import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ZhucePage } from '../zhuce/zhuce';
import { HomePage } from '../home/home';
import { FindPage } from '../find/find';
import { LoginPage } from '../login/login';
import{ Http,Jsonp }from '@angular/http' ;
import{ HttpModule,JsonpModule }from '@angular/http' ;
import{ Observable}from 'rxjs' ;
import"rxjs/Rx";
import { AlertController } from 'ionic-angular';
import { window } from 'rxjs/operator/window';
/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public jsonp:Jsonp,public alertCtrl: AlertController) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad MinePage');
  }

  zhuce(){
   
     this.navCtrl.push(ZhucePage);
     
    
  }

  tiaozhuan(){
   
    this.navCtrl.push(HomePage);
    
   
 }
forget(){
   
  this.navCtrl.push(FindPage);
  
 
}


// headers=new Headers({'Content-Type':'application/x-www-form-urlencoded'});

denglu(){
  this.navCtrl.push(LoginPage);

//   this.http.post( 'http://datainfo.duapp.com/shopdata/userinfo.php',JSON.stringify({status:'login',userID:'sun',password:'bai'}), {headers:this.headers}).filter(data=>{
//     return data.status === 200;
//   }).map(data=>data.json())
//  .subscribe(
// data=>{ 
        
//      location.href="../contact.html";
    
     
//       },err=>{
      
//         this.denglu2();
// }); 
}

denglu2(){
let alert = this.alertCtrl.create({
title: '错误',
subTitle: '用户名或者密码错误',
buttons: ['关闭']
});
alert.present();
}


}
