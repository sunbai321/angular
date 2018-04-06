webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MinePage = /** @class */ (function () {
    function MinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MinePage');
    };
    MinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mine',template:/*ion-inline-start:"D:\ionicApp1\src\pages\mine\mine.html"*/'<div padding>\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="kittens">\n        Kittens\n      </ion-segment-button>\n      <ion-segment-button value="puppies">\n        Puppies\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  \n  <div [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'puppies\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="img/thumbnail-puppy-1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n      ...\n    </ion-list>\n  \n    <ion-list *ngSwitchCase="\'kittens\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="img/thumbnail-kitten-1.jpg">\n        </ion-thumbnail>\n        <h2>Luna</h2>\n      </ion-item>\n      ...\n    </ion-list>\n  </div>'/*ion-inline-end:"D:\ionicApp1\src\pages\mine\mine.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MinePage);
    return MinePage;
}());

//# sourceMappingURL=mine.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/message/message.module": [
		274,
		1
	],
	"../pages/mine/mine.module": [
		275,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mine_mine__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_message__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__mine_mine__["a" /* MinePage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__message_message__["a" /* MessagePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionicApp1\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="发布" tabIcon="create"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="查看" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="消息" tabIcon="chatbubbles"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="我的" tabIcon="contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\ionicApp1\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\ionicApp1\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionicApp1\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\ionicApp1\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionicApp1\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [];
        this.icons = 'infor';
        for (var i = 0; i < 3; i++) {
            this.items.push(this.items.length);
        }
    }
    HomePage.prototype.goToSlide = function () {
        this.slides.slideTo(2, 500);
    };
    // 上拉加载
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 3; i++) {
                _this.items.push(_this.items.length);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
            if (_this.items.length >= 9) {
                infiniteScroll.enable(false);
                _this.items.push('');
            }
        }, 500);
    };
    // 下拉刷新
    HomePage.prototype.doRefresh = function (refresher) {
        console.log('刷新开始', refresher);
        setTimeout(function () {
            console.log('刷新完毕');
            refresher.complete();
        }, 2000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\ionicApp1\src\pages\home\home.html"*/'<ion-header no-border >\n  <ion-navbar class="ferg" color=\'yes\'>\n    <button ion-button icon-only menuToggle>\n        <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title> \n\n      <img src="assets/imgs/2.png">\n    <div class="hehe2"><img src="assets/imgs/3.png"></div>\n  \n\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <!-- 下拉刷新 -->\n <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content  pullingIcon="arrow-dropdown"\n    pullingText="Pull to refresh"\n    refreshingSpinner="circles"\n    refreshingText="正在刷新....">\n  </ion-refresher-content>\n  </ion-refresher>\n<!-- 滚动组件 -->\n  <!-- <ion-scroll class="fri" scrollX=\'true\'>\n      <span>好友</span>\n      <span>好友</span>\n      <span>好友</span>\n      <span>好友</span>\n      <span>好友</span>\n      <span>好友</span>\n      <span>好友</span>\n      <span>好友</span>\n      <span>好友</span>\n      <span>好友</span>\n      <span>好友</span>\n      <span>好友</span>\n      <span>好友</span>\n      <span>好友</span>\n      <span>好友</span>\n  \n    </ion-scroll> -->\n\n    <!-- <ion-scroll class="fri" scrollY=\'true\' scrollX=\'true\'>\n        <span>好友</span><br>\n        <span>好友</span><br>\n        <span>好友</span><br>\n        <span>好友</span><br>\n        <span>好友</span><br>\n     </ion-scroll> -->\n\n\n<!-- <ion-content padding> -->\n<ion-slides class="one" loop=true>\n  <ion-slide >\n   <img src="assets/imgs/slide1.png">\n  </ion-slide>\n  <!-- <ion-slide>\n    <img src="assets/imgs/slide1.png">\n  </ion-slide> -->\n\n</ion-slides>\n<!-- menuToggle控制点哪菜单出来 -->\n  <!-- <button menuToggle ion-button (click)=\'go()\' class="two">跳转</button> -->\n\n  <!-- 信息头 -->\n  <ion-segment [(ngModel)]="icons" color="yes">\n      <ion-segment-button value="infor" >\n       找信息\n      </ion-segment-button>\n      <ion-segment-button value="service">\n        找服务\n      </ion-segment-button>\n    </ion-segment>\n  \n    <!-- 切换的内容 -->\n    <div [ngSwitch]="icons"> \n      <!-- infor必须加引号才是一个字符串，要不加就是变量 -->\n        <ion-list *ngSwitchCase="\'infor\'"> \n            <ion-slides>\n                <ion-slide>\n            \n                  <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    <img src="assets/imgs/4.png">\n                    <p>资产包转让</p>\n                  </ion-col>\n                  <ion-col>\n                    <img src="assets/imgs/5.png">\n                    <p>债权转让</p>\n                  </ion-col>\n                  <ion-col>\n                    <img src="assets/imgs/6.png">\n                    <p>固产转让</p>\n                  </ion-col>\n                  <ion-col>\n                    <img src="assets/imgs/7.png">\n                    <p>商业保理</p>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <img src="assets/imgs/8.png">\n                    <p>典当担保</p>\n                  </ion-col>\n                  <ion-col>\n                    <img src="assets/imgs/9.png">\n                    <p>融资借贷</p>\n                  </ion-col>\n                  <ion-col>\n                    <img src="assets/imgs/10.png">\n                    <p>悬赏信息</p>\n                  </ion-col>\n                  <ion-col>\n                    <img src="assets/imgs/11.png">\n                    <p>尽职调查</p>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <div style="padding-top:0px;"><img src="assets/imgs/left.png"></div>\n            </ion-slide>\n            <ion-slide>\n                <ion-grid>\n                    <ion-row>\n                      <ion-col>\n                        <img src="assets/imgs/13.png">\n                        <p>资产求购</p>\n                      </ion-col>\n                      <ion-col>\n                        <img src="assets/imgs/12.png">\n                        <p>委外催收</p>\n                      </ion-col>\n                      <ion-col>\n                        <img src="assets/imgs/14.png">\n                        <p>法律服务</p>\n                      </ion-col>\n                      <ion-col style=" border:0px ">\n                        \n                      </ion-col>\n                    </ion-row>\n                    \n                  </ion-grid>\n                  <div style="padding-top:133px;"><img src="assets/imgs/right.png"></div>\n            </ion-slide>\n          \n          </ion-slides>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'service\'"> \n       \n              <ion-grid>\n            <ion-row>\n              <ion-col>\n                <img src="assets/imgs/4.png">\n                <p>资产包收购</p>\n              </ion-col>\n              <ion-col>\n                <img src="assets/imgs/5.png">\n                <p>催收机构</p>\n              </ion-col>\n              <ion-col>\n                <img src="assets/imgs/6.png">\n                <p>律师事务所</p>\n              </ion-col>\n              <ion-col>\n                <img src="assets/imgs/7.png">\n                <p>保理公司</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <img src="assets/imgs/8.png">\n                <p>资金过桥</p>\n              </ion-col>\n              <ion-col>\n                <img src="assets/imgs/9.png">\n                <p>投资贷款</p>\n              </ion-col>\n              <ion-col>\n                <img src="assets/imgs/10.png">\n                <p>固产收购</p>\n              </ion-col>\n              <ion-col>\n                <img src="assets/imgs/11.png">\n                <p>尽职调查</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        \n    </ion-list>\n   </div>\n\n   <div class="hello"></div>\n\n   <ion-list class="gg">\n\n      <ion-list-header>\n         <img id="hlhl" src="assets/imgs/17.png"><span class="hhhhhh">优质信息</span>  \n      </ion-list-header>\n\n         <ion-item *ngFor="let i of items">\n          \n            <ion-avatar item-start> \n              <p style="color:black">资产包转让<span style="color:#999">--FB001</span></p>\n              <img src="assets/imgs/15.png">\n              <div class="aini">\n                    <p>地区：<span style="color:black">北京</span></p>\n                    <p>来源：<span style="color:black">银行</span></p>\n                    <p>类型：<span style="color:black">抵押</span></p>\n              </div>\n            </ion-avatar>\n\n              <div class="aini2">\n                 <span item-end >500万  &nbsp;&nbsp;  300万</span>\n                 <p style="padding-left:5px;" item-end>总金额 &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;转让价</p>\n                \n               \n           </div>\n      <img id="img1" item-end src="assets/imgs/16.png">\n        </ion-item>\n     \n      \n    </ion-list>\n\n<!-- 上拉加载 -->\n  \n <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n \n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\ionicApp1\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mine_mine__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_message_message__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mine_mine__["a" /* MinePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_message_message__["a" /* MessagePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mine/mine.module#MinePageModule', name: 'MinePage', segment: 'mine', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mine_mine__["a" /* MinePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_message_message__["a" /* MessagePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionicApp1\src\app\app.html"*/'\n<ion-menu [content]="mycontent">\n    <ion-content>\n      <ion-list>\n        <h1>欢迎投资</h1>\n      </ion-list>\n       <ion-scroll class="fri" scrollY=\'true\'>\n      <span>资产包转让</span><br>\n      <span>债权转让</span><br>\n      <span>固产转让</span><br>\n      <span>商业保理</span><br>\n      <span>债权转让</span><br>\n      <span>资产包转让</span><br>\n      <span>债权转让</span><br>\n      <span>固产转让</span><br>\n      <span>商业保理</span><br>\n      <span>债权转让</span><br>\n    \n  \n    </ion-scroll>\n      <button class="haha" full round ion-button menuClose>关闭面板</button>\n    </ion-content>\n  </ion-menu>\n  \n  <ion-nav #mycontent [root]="rootPage"></ion-nav>'/*ion-inline-end:"D:\ionicApp1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagePage = /** @class */ (function () {
    function MessagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MessagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagePage');
    };
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"D:\ionicApp1\src\pages\message\message.html"*/'<!--\n  Generated template for the MessagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>message</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionicApp1\src\pages\message\message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map