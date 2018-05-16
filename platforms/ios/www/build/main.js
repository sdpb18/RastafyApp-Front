webpackJsonp([6],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel(user) {
        this._id = user._id;
        this.name = user.name;
        this.lastname = user.lastname;
        this.email = user.email;
        this.password = user.password;
        this.role = user.role;
        this.image = user.image;
        this.gethash = user.gethash;
    }
    return UserModel;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_events__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage_provider__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(46);
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
    function HomePage(nasvCtrl, events, storage, userService) {
        this.nasvCtrl = nasvCtrl;
        this.events = events;
        this.storage = storage;
        this.userService = userService;
    }
    HomePage.prototype.exitApp = function () {
        this.storage.cleanStorage();
        this.userService.logout();
        this.events.publish('logout');
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.events.publish('menu:show');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Joshua/Desktop/BDD-project/app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar hidebackButton="true">\n    <ion-title>\n      Inicio\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg">\n  <ion-grid>\n    <ion-row justify-content-center>\n      <div class="title-label"> Bienvenido a Rastafy</div>\n    </ion-row>\n    <ion-row justify-content-center>\n      <div class="desc-label">Empieza a escuchar música de tus artistas favoritos y descubre nuevas canciones.</div>\n    </ion-row>\n    <ion-row class="btn-row" justify-content-center>\n      <button (click)="exitApp()" ion-button outline class="btn-submit">\n        Salir\n      </button>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Joshua/Desktop/BDD-project/app/src/pages/home/home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_events__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage_provider__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_album_service__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage_provider__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlbumPage = /** @class */ (function () {
    function AlbumPage(navCtrl, navParams, albumService, storageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.albumService = albumService;
        this.storageProvider = storageProvider;
        this.url = __WEBPACK_IMPORTED_MODULE_4__services_global__["a" /* GLOBAL */].url;
    }
    AlbumPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.token = this.storageProvider.getToken();
        this.albumService.getAlbums(this.token).subscribe(function (response) {
            _this.albums = response.data;
            console.log('RESPONSE ALBUM', response);
            console.log('RESPONSE ALBUM DATA', response.data);
        });
    };
    AlbumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-album',template:/*ion-inline-start:"/Users/Joshua/Desktop/BDD-project/app/src/pages/album/album.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Albums</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="bg">\n  <ion-card class="card-content" *ngFor="let album of albums">\n    <img src="{{ url + \'getimagealbum/\'+ album.image}}" />\n    <div class="card-title">{{album?.title}}</div>\n    <!-- <div class="">{{album?.artist.name}}</div> -->\n    <div class="">{{album?.description}}</div>\n    <div class="">{{album?.year}}</div>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/Joshua/Desktop/BDD-project/app/src/pages/album/album.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_album_service__["a" /* AlbumService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_album_service__["a" /* AlbumService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage_provider__["a" /* StorageProvider */]])
    ], AlbumPage);
    return AlbumPage;
}());

//# sourceMappingURL=album.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_artist_service__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage_provider__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArtistPage = /** @class */ (function () {
    function ArtistPage(navCtrl, navParams, userService, artistService, storageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.artistService = artistService;
        this.storageProvider = storageProvider;
        this.url = __WEBPACK_IMPORTED_MODULE_3__services_global__["a" /* GLOBAL */].url;
    }
    ArtistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArtistPage');
    };
    ArtistPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.token = this.storageProvider.getToken();
        this.artistService.getArtists(this.token).subscribe(function (response) {
            _this.artist = response.data;
            console.log(_this.artist);
        });
    };
    ArtistPage.prototype.ngOnInit = function () {
        // conseguir listas del servicio.
    };
    ArtistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-artist',template:/*ion-inline-start:"/Users/Joshua/Desktop/BDD-project/app/src/pages/artist/artist.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Artistas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="bg">\n    <ion-card class="card-content" *ngFor ="let artist of artist">\n      <div class="cloak"></div>\n        <img src="{{ url + \'getimageartist/\'+ artist.image}}"/>\n        <div class="card-title">{{artist?.name}}</div>\n        <div class="card-subtitle">{{artist?.description}}</div>\n    </ion-card>\n</ion-content>\n '/*ion-inline-end:"/Users/Joshua/Desktop/BDD-project/app/src/pages/artist/artist.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_artist_service__["a" /* ArtistService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_artist_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage_provider__["a" /* StorageProvider */]])
    ], ArtistPage);
    return ArtistPage;
}());

//# sourceMappingURL=artist.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_logic_models_user_model__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_util_events__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_storage_storage_provider__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, formBuilder, userService, storage, events, storageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.storage = storage;
        this.events = events;
        this.storageProvider = storageProvider;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_logic_models_user_model__["a" /* UserModel */]({});
        this.isFormSubmited = false;
        this.error = {
            errorMessage: null,
            errorFlag: false
        };
        this.title = 'Rastafy';
        this.createLoginForm();
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.ngOnInit = function () {
        this.storageProvider.cleanStorage();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.isFormSubmited = true;
        this.userService.login(this.user).subscribe(function (response) {
            _this.identity = response.data;
            console.log('RESPONSE', response);
            console.log('IDENTITY', _this.identity);
            if (!_this.identity._id) {
                console.log('error en el servidor');
            }
            else {
                console.log('this.identity', _this.identity);
                _this.storageProvider.setUser(_this.identity);
                _this.storage.set('identity', _this.identity);
                _this.userService.login(_this.user, 'true').subscribe(function (response) {
                    console.log(response, 'response');
                    _this.token = response.data;
                    if (_this.token.length <= 0) {
                        console.log('no se genero token');
                    }
                    else {
                        _this.storageProvider.setToken(_this.token);
                        _this.storage.set('token', _this.token);
                    }
                }, function (errorResponse) {
                    var body = errorResponse._body;
                    _this.isFormSubmited = false;
                });
                _this.isFormSubmited = false;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
            }
        }, function (errorResponse) {
            var body = errorResponse._body;
            _this.isFormSubmited = false;
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.events.publish('menu:hide');
        this.events.subscribe('logout', function () {
            _this.navCtrl.setRoot(LoginPage_1);
        });
        this.clearUserInput();
    };
    LoginPage.prototype.clearUserInput = function () {
        this.loginForm.controls.email.reset();
        this.loginForm.controls.password.reset();
    };
    LoginPage.prototype.createLoginForm = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/Joshua/Desktop/BDD-project/app/src/pages/login/login.html"*/'<ion-content class="bg">\n  <ion-grid no-padding>\n    <ion-row justify-content-center class="logo-row">\n      <img class="logo" src="./assets/imgs/logo-proyecto.svg" alt="">\n    </ion-row>\n    <ion-row justify-content-center class="label-row">\n      <span class="title-label">{{title}}</span>\n    </ion-row>\n  </ion-grid>\n  <ion-grid no-padding class="grid-form">\n    <form (ngSubmit)="login()" [formGroup]="loginForm" novalidate>\n      <ion-list no-lines>\n        <ion-item style="padding: 0px 16px;">\n          <ion-icon name="ios-mail-outline" class="icon" item-left></ion-icon>\n          <ion-input id="input-email" type="text" formControlName="email" \n            placeholder="correo electrónico" clearInput [(ngModel)]="user.email"></ion-input>\n        </ion-item>\n        <ion-item style="padding: 0px 16px;">\n            <ion-icon name="md-lock" class="icon" item-left></ion-icon>\n            <ion-input class="input" id="input-password" type="password" formControlName="password"\n            placeholder="contraseña" clearInput [(ngModel)]="user.password"></ion-input>\n          </ion-item>\n      </ion-list>\n      <ion-row justify-content-center>\n          <button type="submit" [disabled]="loginForm.invalid" class="btn-submit" ion-button outline>\n              <span *ngIf="!isFormSubmited">Iniciar Sesion</span>\n              <img src="./assets/imgs/ico-spinner-white.svg" *ngIf="isFormSubmited" class="ico-spinner-white" />\n          </button>\n      </ion-row>\n      <ion-row justify-content-center>\n          <span class="register-label">no tienes una cuenta? <b (click)="register()">Regístrate</b></span>\n      </ion-row>\n    </form>\n\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Joshua/Desktop/BDD-project/app/src/pages/login/login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular_util_events__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_10__providers_storage_storage_provider__["a" /* StorageProvider */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_events__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_logic_models_user_model__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, formBuilder, events, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.events = events;
        this.userService = userService;
        this.user_register = new __WEBPACK_IMPORTED_MODULE_4__models_logic_models_user_model__["a" /* UserModel */]({});
        this.initRegisterForm();
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.user_register.name = this.registerForm.value.name;
        this.user_register.lastname = this.registerForm.value.lastName;
        this.user_register.email = this.registerForm.value.email;
        this.user_register.role = 'user_role';
        this.user_register.image = '';
        this.user_register.password = this.registerForm.value.password;
        this.userService.register(this.user_register).subscribe(function (response) {
            var user = response.user;
            _this.user_register = user;
            if (!user._id) {
                console.log('Error al registrarse');
            }
            else {
                console.log('usuario registrado');
                _this.clearUserInput();
                _this.navCtrl.pop();
            }
        }, function (error) {
            console.log(error);
        });
    };
    RegisterPage.prototype.clearUserInput = function () {
        this.registerForm.controls.name.reset();
        this.registerForm.controls.lastName.reset();
        this.registerForm.controls.email.reset();
        this.registerForm.controls.password.reset();
    };
    RegisterPage.prototype.initRegisterForm = function () {
        this.registerForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    RegisterPage.prototype.ionViewWillEnter = function () {
        this.events.publish('menu:hide');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/Joshua/Desktop/BDD-project/app/src/pages/register/register.html"*/'\n<ion-content padding class="bg">\n  <ion-grid class="grid-title">\n    <ion-row justify-content-center>\n      <ion-icon class="ico-back-arrow" name="arrow-back" item-left navPop></ion-icon>\n      <span class="title-label"> Registrate!</span>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <form (ngSubmit)="register()" [formGroup]="registerForm" novalidate>\n      <ion-list no-lines>\n        <ion-item style="padding: 0px 16px;">\n          <ion-input id="input-name" type="text" formControlName="name" placeholder="Nombre" clearInput></ion-input>\n        </ion-item>\n        <ion-item style="padding: 0px 16px;">\n          <ion-input id="input-lastname" type="text" formControlName="lastName" placeholder="Apellido" clearInput></ion-input>\n        </ion-item>\n        <ion-item style="padding: 0px 16px;">\n          <ion-input id="input-email" type="text" formControlName="email" placeholder="Correo electrónico" clearInput></ion-input>\n        </ion-item>\n        <ion-item style="padding: 0px 16px;">\n          <ion-input id="input-password" type="password" formControlName="password" placeholder="Contraseña" clearInput></ion-input>\n        </ion-item>\n      </ion-list>\n      <ion-row justify-content-center>\n          <button type="submit" [disabled]="registerForm.invalid" class="btn-submit" ion-button outline>Regístrate</button>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Joshua/Desktop/BDD-project/app/src/pages/register/register.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_events__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_edit_form_edit_form__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage_provider__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, modalCtrl, userService, storageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.userService = userService;
        this.storageProvider = storageProvider;
        console.log(this.user);
        console.log(this.token);
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.user = this.storageProvider.getUser();
        this.token = this.storageProvider.getToken();
    };
    ProfilePage.prototype.presentEditModal = function () {
        var editFormModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_edit_form_edit_form__["a" /* EditFormComponent */], { profile: this.user });
        editFormModal.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/Joshua/Desktop/BDD-project/app/src/pages/profile/profile.html"*/'<ion-content padding class="bg">\n  <ion-grid class="grid-img">\n    <ion-row justify-content-center>\n      <div class="oval-img"></div>\n    </ion-row>\n    <ion-row justify-content-center>\n      <span class="user-label"> {{user?.name}} {{user?.lastname}}</span>\n    </ion-row>\n    <ion-row justify-content-center>\n      <span class="email-label">{{user?.email}}</span>\n    </ion-row>\n    <ion-row justify-content-center>\n      <button (click)="presentEditModal()" ion-button outline class="show-modal"> Editar perfil</button>\n    </ion-row>\n\n    <ion-row class="media-row">\n      <ion-col col-4>\n        <ion-row justify-content-center class="number-row">0</ion-row>\n        <ion-row justify-content-center class="desc-row">Listas</ion-row>\n      </ion-col>\n\n      <ion-col col-4>\n        <ion-row justify-content-center class="number-row">0</ion-row>\n        <ion-row justify-content-center class="desc-row">Seguidores</ion-row>\n      </ion-col>\n\n      <ion-col col-4>\n        <ion-row justify-content-center class="number-row">0</ion-row>\n        <ion-row justify-content-center class="desc-row">Siguiendo</ion-row>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Joshua/Desktop/BDD-project/app/src/pages/profile/profile.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage_provider__["a" /* StorageProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/Joshua/Desktop/BDD-project/app/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Buscar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg">\n\n</ion-content>\n'/*ion-inline-end:"/Users/Joshua/Desktop/BDD-project/app/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 173:
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
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/album/album.module": [
		694,
		5
	],
	"../pages/artist/artist.module": [
		695,
		4
	],
	"../pages/login/login.module": [
		696,
		3
	],
	"../pages/profile/profile.module": [
		697,
		2
	],
	"../pages/register/register.module": [
		698,
		1
	],
	"../pages/search/search.module": [
		699,
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
webpackAsyncContext.id = 218;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artist_list__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ArtistListModule = /** @class */ (function () {
    function ArtistListModule() {
    }
    ArtistListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* IonicModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__artist_list__["a" /* ArtistListComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__artist_list__["a" /* ArtistListComponent */]
            ]
        })
    ], ArtistListModule);
    return ArtistListModule;
}());

//# sourceMappingURL=artist-list.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
 * Generated class for the ArtistListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ArtistListComponent = /** @class */ (function () {
    function ArtistListComponent() {
        console.log(this.artist);
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('artistInput'),
        __metadata("design:type", Array)
    ], ArtistListComponent.prototype, "artist", void 0);
    ArtistListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'artist-list',template:/*ion-inline-start:"/Users/Joshua/Desktop/BDD-project/app/src/components/artist-list/artist-list.html"*/'<!-- Generated template for the ArtistListComponent component -->\n<ion-card *ngFor ="let artist of artist">\n    <!-- <img src="img/card-saopaolo.png"/> -->\n    <div class="card-title">{{artist?.name}}</div>\n    <div class="card-subtitle">{{artist?.description}}</div>\n</ion-card>\n'/*ion-inline-end:"/Users/Joshua/Desktop/BDD-project/app/src/components/artist-list/artist-list.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ArtistListComponent);
    return ArtistListComponent;
}());

//# sourceMappingURL=artist-list.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_form__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditFormModule = /** @class */ (function () {
    function EditFormModule() {
    }
    EditFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* IonicModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__edit_form__["a" /* EditFormComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__edit_form__["a" /* EditFormComponent */]
            ], entryComponents: [__WEBPACK_IMPORTED_MODULE_1__edit_form__["a" /* EditFormComponent */]]
        })
    ], EditFormModule);
    return EditFormModule;
}());

//# sourceMappingURL=edit-form.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(362);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_search_search__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_artist_artist__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_album_album__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_f2p_main_footer_f2p_main_footer_module__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_storage_storage_provider__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_edit_form_edit_form_module__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_edit_form_edit_form__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_artist_list_artist_list_module__ = __webpack_require__(354);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_artist_artist__["a" /* ArtistPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_album_album__["a" /* AlbumPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15__components_f2p_main_footer_f2p_main_footer_module__["a" /* F2pMainMenuModule */],
                __WEBPACK_IMPORTED_MODULE_19__components_artist_list_artist_list_module__["a" /* ArtistListModule */],
                __WEBPACK_IMPORTED_MODULE_17__components_edit_form_edit_form_module__["a" /* EditFormModule */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/album/album.module#AlbumPageModule', name: 'AlbumPage', segment: 'album', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/artist/artist.module#ArtistPageModule', name: 'ArtistPage', segment: 'artist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_artist_artist__["a" /* ArtistPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_album_album__["a" /* AlbumPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__components_edit_form_edit_form__["a" /* EditFormComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_16__providers_storage_storage_provider__["a" /* StorageProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlbumService = /** @class */ (function () {
    function AlbumService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    AlbumService.prototype.getAlbums = function (token, artist) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + 'getartists/' + artist, options)
            .map(function (res) { return res.json(); });
    };
    AlbumService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], AlbumService);
    return AlbumService;
}());

//# sourceMappingURL=album.service.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageProvider = /** @class */ (function () {
    function StorageProvider() {
    }
    StorageProvider.prototype.setToken = function (incomingToken) {
        this.token = incomingToken;
    };
    StorageProvider.prototype.getToken = function () {
        return this.token;
    };
    StorageProvider.prototype.getUser = function () {
        console.log(this.user, 'get');
        return this.user;
    };
    StorageProvider.prototype.setUser = function (incomingUser) {
        this.user = incomingUser;
    };
    StorageProvider.prototype.setArtists = function (incomingArtist) {
        this.artists = incomingArtist;
    };
    StorageProvider.prototype.getArtist = function () {
        return this.artists;
    };
    StorageProvider.prototype.cleanStorage = function () {
        this.user = null;
        this.token = null;
        this.artists = [];
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.provider.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = /** @class */ (function () {
    function UserService(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
        if (this.token === undefined) {
            this.getToken().subscribe(function (response) {
                _this.token = response;
            });
        }
    }
    UserService.prototype.login = function (user, getHash) {
        if (getHash === void 0) { getHash = null; }
        if (getHash !== null) {
            user.gethash = getHash;
        }
        var params = JSON.stringify(user);
        console.log(params);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.url + 'login', params, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.register = function (user_to_register) {
        var params = JSON.stringify(user_to_register);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.url + 'register', params, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.updateUser = function (user_to_update) {
        var params = JSON.stringify(user_to_update);
        console.log(this.token, 'metodo');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': this.token });
        return this.http.put(this.url + 'updateuser/' + user_to_update._id, params, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getIdentity = function () {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].fromPromise(this.storage.get('identity').then(function (x) {
            return Promise.resolve(x);
        }));
    };
    UserService.prototype.getToken = function () {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].fromPromise(this.storage.get('token').then(function (x) {
            return Promise.resolve(x);
        }));
    };
    UserService.prototype.logout = function () {
        this.storage.remove('identity');
        this.storage.remove('token');
        this.storage.clear();
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GLOBAL; });
var GLOBAL = {
    url: 'http://localhost:3977/api/',
    ip: '192.168.0.20'
};
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArtistService = /** @class */ (function () {
    function ArtistService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    ArtistService.prototype.getArtists = function (token, page) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + 'getartists/' + page, options)
            .map(function (res) { return res.json(); });
    };
    ArtistService.prototype.getArtist = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + 'getartist/' + id, options)
            .map(function (res) { return res.json(); });
    };
    ArtistService.prototype.edittArtist = function (token, id, artist) {
        var params = JSON.stringify(artist);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.url + 'artist/' + id, params, options)
            .map(function (res) { return res.json(); });
    };
    ArtistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ArtistService);
    return ArtistService;
}());

//# sourceMappingURL=artist.service.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(159);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Joshua/Desktop/BDD-project/app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n<f2p-main-footer></f2p-main-footer>\n'/*ion-inline-end:"/Users/Joshua/Desktop/BDD-project/app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return F2pMainMenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__f2p_main_footer__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var F2pMainMenuModule = /** @class */ (function () {
    function F2pMainMenuModule() {
    }
    F2pMainMenuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* IonicModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__f2p_main_footer__["a" /* F2pMainFooterComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__f2p_main_footer__["a" /* F2pMainFooterComponent */]
            ]
        })
    ], F2pMainMenuModule);
    return F2pMainMenuModule;
}());

//# sourceMappingURL=f2p-main-footer.module.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return F2pMainFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_search_search__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_artist_artist__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_album_album__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_util_events__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var F2pMainFooterComponent = /** @class */ (function () {
    function F2pMainFooterComponent(events) {
        this.events = events;
        this.homePage = __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */];
        this.searchPage = __WEBPACK_IMPORTED_MODULE_2__pages_search_search__["a" /* SearchPage */];
        this.artistPage = __WEBPACK_IMPORTED_MODULE_3__pages_artist_artist__["a" /* ArtistPage */];
        this.albumPage = __WEBPACK_IMPORTED_MODULE_4__pages_album_album__["a" /* AlbumPage */];
        this.profilePage = __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */];
        this.hideFooterLogin = true;
    }
    F2pMainFooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hideFooterLogin = true;
        this.events.subscribe('menu:hide', function () {
            console.log('hide');
            _this.hideFooterLogin = true;
        });
        this.events.subscribe('menu:show', function () {
            console.log('show');
            _this.hideFooterLogin = false;
        });
    };
    F2pMainFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'f2p-main-footer',template:/*ion-inline-start:"/Users/Joshua/Desktop/BDD-project/app/src/components/f2p-main-footer/f2p-main-footer.html"*/'<ion-tabs *ngIf="!hideFooterLogin">\n    <ion-tab [root]="homePage" tabIcon="md-home" tabTitle="Inicio"></ion-tab>\n    <ion-tab [root]="artistPage" tabIcon="md-star-half" tabTitle="Artistas"></ion-tab>\n    <ion-tab [root]="albumPage" tabIcon="md-albums" tabTitle="Albums"></ion-tab>\n    <ion-tab [root]="profilePage" tabIcon="md-person" tabTitle="Perfil"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/Joshua/Desktop/BDD-project/app/src/components/f2p-main-footer/f2p-main-footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular_util_events__["a" /* Events */]])
    ], F2pMainFooterComponent);
    return F2pMainFooterComponent;
}());

//# sourceMappingURL=f2p-main-footer.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_logic_models_user_model__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditFormComponent = /** @class */ (function () {
    function EditFormComponent(navParams, viewCtrl, userService, formBuilder, storage) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.user_update = new __WEBPACK_IMPORTED_MODULE_4__models_logic_models_user_model__["a" /* UserModel */]({});
        this.isFormSubmited = false;
        this.initUpdateForm();
        this.user = this.navParams.get('profile');
        console.log(this.user);
    }
    // updateUser() {
    //   this.isFormSubmited = true;
    //   this.user_update._id = this.user._id;
    //   this.user_update.name = this.updateForm.value.name;
    //   this.user_update.lastname = this.updateForm.value.lastName;
    //   this.user_update.email = this.updateForm.value.email;
    //   this.user_update.role = 'user_role';;
    //   this.user_update.password = this.user.password;
    //   this.userService.updateUser(this.user_update).subscribe(response => {
    //     let identity = response.user;
    //     if (identity !== null) {
    //       this.user = response.user;
    //       this.storage.set('identity', (identity));
    //       this.isFormSubmited = false;
    //       console.log('datos actualizado correctamente');
    //       this.dismiss();
    //     }
    //   }, error => {
    //     console.log('error', error);
    //     this.isFormSubmited = false;
    //   });
    // }
    EditFormComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditFormComponent.prototype.ionViewWillEnter = function () {
        this.isFormSubmited = false;
    };
    EditFormComponent.prototype.initUpdateForm = function () {
        this.updateForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    };
    EditFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'edit-form',template:/*ion-inline-start:"/Users/Joshua/Desktop/BDD-project/app/src/components/edit-form/edit-form.html"*/'<!-- Generated template for the EditFormComponent component -->\n<ion-content class="bg">\n  <ion-grid class="grid-title">\n    <ion-row justify-content-center>\n      <ion-icon class="ico-back-arrow" name="arrow-back" item-left navPop></ion-icon>\n      <span class="title-label"> Actualizar datos</span>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="grid-form">\n    <input class="input-img" type="file" [(ngModel)]="user_update.image" id="upimgfile" name="uploadfile">\n    <form (ngSubmit)="updateUser()" [formGroup]="updateForm" novalidate>\n      <ion-list no-lines>\n        <ion-item style="padding: 0px 16px;">\n          <ion-input id="input-name" type="text" formControlName="name" placeholder="Nombre: {{user?.name}}" clearInput></ion-input>\n        </ion-item>\n        <ion-item style="padding: 0px 16px;">\n          <ion-input id="input-lastname" type="text" formControlName="lastName" placeholder="Apellido: {{user?.lastname}}" clearInput></ion-input>\n        </ion-item>\n        <ion-item style="padding: 0px 16px;">\n          <ion-input id="input-email" type="text" formControlName="email" placeholder="Correo: {{user?.email}}" clearInput></ion-input>\n        </ion-item>\n      </ion-list>\n      <ion-row justify-content-center>\n        <button type="submit" [disabled]="updateForm.invalid" class="btn-submit" ion-button outline>\n          <span *ngIf="!isFormSubmited">Actualizar</span>\n          <img src="./assets/imgs/ico-spinner-white.svg" *ngIf="isFormSubmited" class="ico-spinner-white" />\n        </button>\n      </ion-row>\n    </form>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/Joshua/Desktop/BDD-project/app/src/components/edit-form/edit-form.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], EditFormComponent);
    return EditFormComponent;
}());

//# sourceMappingURL=edit-form.js.map

/***/ })

},[357]);
//# sourceMappingURL=main.js.map