webpackJsonp([4],{

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistPageModule", function() { return ArtistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artist__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_artist_list_artist_list_module__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_artist_list_artist_list__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ArtistPageModule = /** @class */ (function () {
    function ArtistPageModule() {
    }
    ArtistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__artist__["a" /* ArtistPage */],
                __WEBPACK_IMPORTED_MODULE_3__components_artist_list_artist_list_module__["a" /* ArtistListModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_artist_list_artist_list__["a" /* ArtistListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__artist__["a" /* ArtistPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__components_artist_list_artist_list_module__["a" /* ArtistListModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_artist_list_artist_list__["a" /* ArtistListComponent */]
            ]
        })
    ], ArtistPageModule);
    return ArtistPageModule;
}());

//# sourceMappingURL=artist.module.js.map

/***/ })

});
//# sourceMappingURL=4.js.map