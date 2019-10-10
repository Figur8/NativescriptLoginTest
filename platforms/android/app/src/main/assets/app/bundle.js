require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__("../node_modules/css-loader/dist/cjs.js?!../node_modules/nativescript-theme-core/css/core.light.css"), "");

// Module
exports.push([module.i, "/*\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\n*/\n", ""]);

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _item_items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/item/items.component.ts");
/* harmony import */ var _teste_teste_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/teste/teste.component.ts");




var routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: _item_items_component__WEBPACK_IMPORTED_MODULE_2__["ItemsComponent"] },
    { path: "teste", component: _teste_teste_component__WEBPACK_IMPORTED_MODULE_3__["testeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- https://docs.nativescript.org/angular/core-concepts/angular-navigation.html#page-router-outlet -->\n<page-router-outlet></page-router-outlet>\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-geolocation/geolocation.js");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__);


var AppComponent = /** @class */ (function () {
    function AppComponent(zone) {
        this.zone = zone;
        this.latitude = 0;
        this.longitude = 0;
    }
    AppComponent.prototype.getDeviceLocation = function () {
        return new Promise(function (resolve, reject) {
            nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__["enableLocationRequest"]().then(function () {
                nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__["getCurrentLocation"]({ timeout: 10000 }).then(function (location) {
                    resolve(location);
                }).catch(function (error) {
                    reject(error);
                });
            });
        });
    };
    AppComponent.prototype.updateLocation = function () {
        var _this = this;
        this.getDeviceLocation().then(function (result) {
            _this.latitude = result.latitude;
            _this.longitude = result.longitude;
        }, function (error) {
            console.error(error);
        });
    };
    AppComponent.prototype.startWatchingLocation = function () {
        var _this = this;
        this.watchId = nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__["watchLocation"](function (location) {
            if (location) {
                _this.zone.run(function () {
                    _this.latitude = location.latitude;
                    _this.longitude = location.longitude;
                });
            }
        }, function (error) {
            console.log(error);
        }, { updateDistance: 1, minimumUpdateTime: 1000 });
    };
    AppComponent.prototype.stopWatchingLocation = function () {
        if (this.watchId) {
            nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__["clearWatch"](this.watchId);
            this.watchId = null;
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __webpack_require__("./app/app.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _item_items_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/item/items.component.ts");
/* harmony import */ var _item_item_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/item/item-detail.component.ts");
/* harmony import */ var _teste_teste_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/teste/teste.component.ts");







// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _item_items_component__WEBPACK_IMPORTED_MODULE_4__["ItemsComponent"],
                _item_item_detail_component__WEBPACK_IMPORTED_MODULE_5__["ItemDetailComponent"],
                _teste_teste_component__WEBPACK_IMPORTED_MODULE_6__["testeComponent"]
            ],
            providers: [],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/item/item-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Details\" class=\"action-bar\"></ActionBar>\n<FlexboxLayout flexDirection=\"column\" class=\"page\">\n    <FlexboxLayout class=\"m-15\">\n        <Label class=\"h2\" [text]=\"item.id + '. '\"></Label>\n        <Label class=\"h2\" [text]=\"item.name\"></Label>\n    </FlexboxLayout>\n    <Label class=\"h4\" [text]=\"item.role\"></Label>\n</FlexboxLayout>\n"

/***/ }),

/***/ "./app/item/item-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailComponent", function() { return ItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/item/item.service.ts");



var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(itemService, route) {
        this.itemService = itemService;
        this.route = route;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
    };
    ItemDetailComponent.ctorParameters = function () { return [
        { type: _item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    ItemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-details",
            template: __webpack_require__("./app/item/item-detail.component.html"),
            styles: [__webpack_require__("./app/item/item.css")]
        }),
        __metadata("design:paramtypes", [_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());



/***/ }),

/***/ "./app/item/item.css":
/***/ (function(module, exports) {

module.exports = ".page {\n  align-items: center;\n  flex-direction: column;\n}\n.form {\n  margin-left: 30;\n  margin-right: 30;\n  flex-grow: 2;\n  vertical-align: middle;\n}\n\n.btn { background-color: #28ABE2 }"

/***/ }),

/***/ "./app/item/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

// import client from "~/app/lib/fusionAuthClientInstance";
// import {IdentityProviderLoginRequest, LoginRequest} from "@fusionauth/typescript-client";
var ItemService = /** @class */ (function () {
    // login = 'ismaelteste';
    // password = '123456789';
    // private client = new DefaultRESTClientBuilder().build('http://192.168.217.250:9011');;
    function ItemService() {
        // console.info(this.clientTeste());
    }
    ItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./app/item/items.component.html":
/***/ (function(module, exports) {

module.exports = "<FlexboxLayout class=\"page\">\n  <StackLayout class=\"form\">\n    <Image src=\"https://www.carnegietechnologies.com/sites/ct/assets/image/logo-octopus.png\" loadMode=\"async\" stretch=\"aspectFit\"></Image>\n\n    <StackLayout class=\"input-field\">\n      <TextField hint=\"email\" class=\"input\" keyboardType=\"email\" autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n    </StackLayout>\n  \n    <StackLayout class=\"input-field\">\n      <TextField hint=\"Password\" secure=\"true\"  class=\"input\"></TextField>\n    </StackLayout>\n  \n    <Button text=\"Log In\" [nsRouterLink]=\"['/teste']\" pageTransition=\"slide\" clearHistory=\"false\" class=\"btn btn-primary\"></Button>\n    \n  </StackLayout>\n</FlexboxLayout>"

/***/ }),

/***/ "./app/item/items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_lib_fusionAuthClientInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/lib/fusionAuthClientInstance.ts");
/* harmony import */ var _app_lib_fusionAuthClientInstance__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_lib_fusionAuthClientInstance__WEBPACK_IMPORTED_MODULE_2__);



var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(router) {
        this.router = router;
        this.login = 'ismaelteste';
        this.password = '123456789';
        // private client = new DefaultRESTClientBuilder().build('http://192.168.217.250:9011');;
        this.request = {
            "loginId": this.login,
            "password": this.password,
            "applicationId": "fca4814f-645c-4c3f-a9b0-2b2ca7a2e835"
        };
        this.explanationPromise();
        // console.info(this.clientLogin());
    }
    ItemsComponent.prototype.ngOnInit = function () {
    };
    ItemsComponent.prototype.explanationPromise = function () {
        new Promise(function (resolve) { resolve(5); })
            .then(function (num) { return num * 2; })
            .then(function (result) { return 10 / result; })
            .then(function (newVal) { return newVal + 5; }, function (err) { return 10; })
            .then(function (fim) { return console.log("fim: ", fim); });
    };
    ItemsComponent.prototype.clientLogin = function () {
        return _app_lib_fusionAuthClientInstance__WEBPACK_IMPORTED_MODULE_2___default.a.login(this.request)
            .then(this.handleResponse, this.handleErrorResponse);
    };
    ItemsComponent.prototype.handleResponse = function (clientResponse) {
        console.info(JSON.stringify(clientResponse, null, 2));
    };
    ItemsComponent.prototype.handleErrorResponse = function (clientResponse) {
        console.error(JSON.stringify(clientResponse, null, 2));
    };
    ItemsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    ItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-items",
            template: __webpack_require__("./app/item/items.component.html"),
            styles: [__webpack_require__("./app/item/item.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./app/lib/fusionAuthClientInstance.ts":
/***/ (function(module, exports) {

// import {FusionAuthClient} from "@fusionauth/typescript-client";
//
// export default new FusionAuthClient("ZfBqkW7YrJrNlhCb5YLflzQnjYRG9afyVrjRssPhHmk", 'http://192.168.217.250:9011');


/***/ }),

/***/ "./app/teste/teste.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"{N} Geolocation Example\"></ActionBar>\n<GridLayout>\n    <StackLayout>\n        <Label text=\"Latitude: {{ latitude }}\"></Label>\n        <Label text=\"Longitude: {{ longitude }}\"></Label>\n        <Button class=\"btn btn-primary btn-active\" text=\"Update\" (tap)=\"updateLocation()\"></Button>\n        <Button class=\"btn btn-primary btn-active\" text=\"Watch Location\" (tap)=\"startWatchingLocation()\"></Button>\n        <Button class=\"btn btn-primary btn-active\" text=\"Stop Watching\" (tap)=\"stopWatchingLocation()\"></Button>\n    </StackLayout>\n</GridLayout>"

/***/ }),

/***/ "./app/teste/teste.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testeComponent", function() { return testeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-geolocation/geolocation.js");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__);


var testeComponent = /** @class */ (function () {
    function testeComponent(zone) {
        this.zone = zone;
        this.latitude = 0;
        this.longitude = 0;
    }
    testeComponent.prototype.getDeviceLocation = function () {
        return new Promise(function (resolve, reject) {
            nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__["enableLocationRequest"]().then(function () {
                nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__["getCurrentLocation"]({ timeout: 10000 }).then(function (location) {
                    resolve(location);
                }).catch(function (error) {
                    reject(error);
                });
            });
        });
    };
    testeComponent.prototype.updateLocation = function () {
        var _this = this;
        this.getDeviceLocation().then(function (result) {
            _this.latitude = result.latitude;
            _this.longitude = result.longitude;
        }, function (error) {
            console.error(error);
        });
    };
    testeComponent.prototype.startWatchingLocation = function () {
        var _this = this;
        this.watchId = nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__["watchLocation"](function (location) {
            if (location) {
                _this.zone.run(function () {
                    _this.latitude = location.latitude;
                    _this.longitude = location.longitude;
                });
            }
        }, function (error) {
            console.log(error);
        }, { updateDistance: 1, minimumUpdateTime: 1000 });
    };
    testeComponent.prototype.stopWatchingLocation = function () {
        if (this.watchId) {
            nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__["clearWatch"](this.watchId);
            this.watchId = null;
        }
    };
    testeComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    testeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__("./app/teste/teste.component.html") }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], testeComponent);
    return testeComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");

        let applicationCheckPlatform = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        

var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"main.js","android":{"v8Flags":"--expose_gc","markingMode":"none"}};

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2l0ZW0vaXRlbS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2l0ZW0vaXRlbS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW1zLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW1zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2Z1c2lvbkF1dGhDbGllbnRJbnN0YW5jZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvdGVzdGUvdGVzdGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Rlc3RlL3Rlc3RlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7O0FDWkEseUVBQTJCLG1CQUFPLENBQUMsZ0RBQWdEO0FBQ25GO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLG9HQUErRjs7QUFFakg7QUFDQSxjQUFjLFFBQVM7O0FBRXZCO0FBQ0Es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RUFBRTtnQkFDVCxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDVixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7b0JBQ2xDLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztnQkFDeEMsQ0FBQyxDQUFDLENBQUM7YUFDTjtRQUNMLENBQUMsRUFBRSxlQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLEVBQUUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVNLDZDQUFvQixHQUEzQjtRQUNJLElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLG1FQUFzQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUN2QjtJQUNMLENBQUM7O2dCQTVDZ0Msb0RBQU07O0lBTjlCLGNBQWM7UUFEMUIsK0RBQVMsQ0FBQyxFQUFDLGlFQUFtQyxFQUFDLENBQUM7eUNBT1osb0RBQU07T0FOOUIsY0FBYyxDQW9EMUI7SUFBRCxxQkFBQztDQUFBO0FBcEQwQjs7Ozs7Ozs7Ozs7Ozs7QUNEM0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdDQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsY0FBZ0Y7QUFDTjtBQUMxRSwrREFBc0U7QUFDdEUsZ0RBQXlEO0FBQ3pELDJCQUF5RTtBQUN6RSxpQkFBd0U7QUFDVztBQUNuRixrQ0FBeUQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiksIFwiXCIpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLmNzcyBmaWxlIGlzIHdoZXJlIHlvdSBwbGFjZSBDU1MgcnVsZXMgdGhhdFxcbnlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRvIHlvdXIgZW50aXJlIGFwcGxpY2F0aW9uLiBDaGVjayBvdXRcXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3N0eWxpbmcgZm9yIGEgZnVsbCBsaXN0IG9mIHRoZSBDU1NcXG5zZWxlY3RvcnMgYW5kIHByb3BlcnRpZXMgeW91IGNhbiB1c2UgdG8gc3R5bGUgVUkgY29tcG9uZW50cy5cXG5cXG4vKlxcbkluIG1hbnkgY2FzZXMgeW91IG1heSB3YW50IHRvIHVzZSB0aGUgTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgaW5zdGVhZFxcbm9mIHdyaXRpbmcgeW91ciBvd24gQ1NTIHJ1bGVzLiBGb3IgYSBmdWxsIGxpc3Qgb2YgY2xhc3MgbmFtZXMgaW4gdGhlIHRoZW1lXFxucmVmZXIgdG8gaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS90aGVtZS5cXG4qL1xcblwiLCBcIlwiXSk7XG5cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgdGVzdGVDb21wb25lbnR9IGZyb20gXCIuL3Rlc3RlL3Rlc3RlLmNvbXBvbmVudFwiXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaXRlbXNcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJpdGVtc1wiLCBjb21wb25lbnQ6IEl0ZW1zQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcInRlc3RlXCIsIGNvbXBvbmVudDogdGVzdGVDb21wb25lbnQgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL2NvcmUtY29uY2VwdHMvYW5ndWxhci1uYXZpZ2F0aW9uLmh0bWwjcGFnZS1yb3V0ZXItb3V0bGV0IC0tPlxcbjxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCAqIGFzIEdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyBcblxuICAgIHB1YmxpYyBsYXRpdHVkZTogbnVtYmVyO1xuICAgIHB1YmxpYyBsb25naXR1ZGU6IG51bWJlcjtcbiAgICBwcml2YXRlIHdhdGNoSWQ6IG51bWJlcjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xuICAgICAgICB0aGlzLmxhdGl0dWRlID0gMDtcbiAgICAgICAgdGhpcy5sb25naXR1ZGUgPSAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RGV2aWNlTG9jYXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIEdlb2xvY2F0aW9uLmVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIEdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7dGltZW91dDogMTAwMDB9KS50aGVuKGxvY2F0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVMb2NhdGlvbigpIHtcbiAgICAgICAgdGhpcy5nZXREZXZpY2VMb2NhdGlvbigpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMubGF0aXR1ZGUgPSByZXN1bHQubGF0aXR1ZGU7XG4gICAgICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IHJlc3VsdC5sb25naXR1ZGU7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnRXYXRjaGluZ0xvY2F0aW9uKCkge1xuICAgICAgICB0aGlzLndhdGNoSWQgPSBHZW9sb2NhdGlvbi53YXRjaExvY2F0aW9uKGxvY2F0aW9uID0+IHtcbiAgICAgICAgICAgIGlmKGxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF0aXR1ZGUgPSBsb2NhdGlvbi5sYXRpdHVkZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb25naXR1ZGUgPSBsb2NhdGlvbi5sb25naXR1ZGU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSwgeyB1cGRhdGVEaXN0YW5jZTogMSwgbWluaW11bVVwZGF0ZVRpbWU6IDEwMDAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0b3BXYXRjaGluZ0xvY2F0aW9uKCkge1xuICAgICAgICBpZih0aGlzLndhdGNoSWQpIHtcbiAgICAgICAgICAgIEdlb2xvY2F0aW9uLmNsZWFyV2F0Y2godGhpcy53YXRjaElkKTtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IHRlc3RlQ29tcG9uZW50IH0gZnJvbSBcIi4vdGVzdGUvdGVzdGUuY29tcG9uZW50XCI7XG5cblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSHR0cENsaWVudCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEl0ZW1zQ29tcG9uZW50LFxuICAgICAgICBJdGVtRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICB0ZXN0ZUNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkRldGFpbHNcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj48L0FjdGlvbkJhcj5cXG48RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVxcXCJjb2x1bW5cXFwiIGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcIm0tMTVcXFwiPlxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJoMlxcXCIgW3RleHRdPVxcXCJpdGVtLmlkICsgJy4gJ1xcXCI+PC9MYWJlbD5cXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaDJcXFwiIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIj48L0xhYmVsPlxcbiAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgIDxMYWJlbCBjbGFzcz1cXFwiaDRcXFwiIFt0ZXh0XT1cXFwiaXRlbS5yb2xlXFxcIj48L0xhYmVsPlxcbjwvRmxleGJveExheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtLWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9pdGVtLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5wYWdlIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZm9ybSB7XFxuICBtYXJnaW4tbGVmdDogMzA7XFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgZmxleC1ncm93OiAyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmJ0biB7IGJhY2tncm91bmQtY29sb3I6ICMyOEFCRTIgfVwiIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuLy8gaW1wb3J0IGNsaWVudCBmcm9tIFwifi9hcHAvbGliL2Z1c2lvbkF1dGhDbGllbnRJbnN0YW5jZVwiO1xuLy8gaW1wb3J0IHtJZGVudGl0eVByb3ZpZGVyTG9naW5SZXF1ZXN0LCBMb2dpblJlcXVlc3R9IGZyb20gXCJAZnVzaW9uYXV0aC90eXBlc2NyaXB0LWNsaWVudFwiO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBJdGVtU2VydmljZSB7XG4gICAgLy8gbG9naW4gPSAnaXNtYWVsdGVzdGUnO1xuICAgIC8vIHBhc3N3b3JkID0gJzEyMzQ1Njc4OSc7XG4gICAgLy8gcHJpdmF0ZSBjbGllbnQgPSBuZXcgRGVmYXVsdFJFU1RDbGllbnRCdWlsZGVyKCkuYnVpbGQoJ2h0dHA6Ly8xOTIuMTY4LjIxNy4yNTA6OTAxMScpOztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBjb25zb2xlLmluZm8odGhpcy5jbGllbnRUZXN0ZSgpKTtcbiAgICB9XG5cbiAgLy8gICByZXF1ZXN0IDogTG9naW5SZXF1ZXN0ID0ge1xuICAvLyAgICAgICBcImxvZ2luSWRcIjogdGhpcy5sb2dpbixcbiAgLy8gICAgICAgXCJwYXNzd29yZFwiOiB0aGlzLnBhc3N3b3JkLFxuICAvLyAgICAgICBcImFwcGxpY2F0aW9uSWRcIjogXCJmY2E0ODE0Zi02NDVjLTRjM2YtYTliMC0yYjJjYTdhMmU4MzVcIlxuICAvLyAgIH07XG4gIC8vXG4gIC8vICAgbG9naW5SZXF1ZXN0KCl7XG4gIC8vICAgICByZXR1cm4gY2xpZW50LmxvZ2luKHRoaXMucmVxdWVzdCk7XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIGNsaWVudFRlc3RlKCkge1xuICAvLyAgICAgICByZXR1cm4gdGhpcy5sb2dpblJlcXVlc3QoKVxuICAvLyAgICAgICAgIC50aGVuKHRoaXMuaGFuZGxlUmVzcG9uc2UsIHRoaXMuaGFuZGxlRXJyb3JSZXNwb25zZSk7XG4gIC8vICAgICB9XG4gIC8vXG4gIC8vXG4gIC8vIHB1YmxpYyBoYW5kbGVSZXNwb25zZShjbGllbnRSZXNwb25zZSkge1xuICAvLyAgIGNvbnNvbGUuaW5mbyhKU09OLnN0cmluZ2lmeShjbGllbnRSZXNwb25zZSwgbnVsbCwgMikpO1xuICAvLyB9XG4gIC8vXG4gIC8vIHB1YmxpYyBoYW5kbGVFcnJvclJlc3BvbnNlKGNsaWVudFJlc3BvbnNlKSB7XG4gIC8vICAgY29uc29sZS5lcnJvcihKU09OLnN0cmluZ2lmeShjbGllbnRSZXNwb25zZSwgbnVsbCwgMikpO1xuICAvLyB9XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8RmxleGJveExheW91dCBjbGFzcz1cXFwicGFnZVxcXCI+XFxuICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiPlxcbiAgICA8SW1hZ2Ugc3JjPVxcXCJodHRwczovL3d3dy5jYXJuZWdpZXRlY2hub2xvZ2llcy5jb20vc2l0ZXMvY3QvYXNzZXRzL2ltYWdlL2xvZ28tb2N0b3B1cy5wbmdcXFwiIGxvYWRNb2RlPVxcXCJhc3luY1xcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIj48L0ltYWdlPlxcblxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiaW5wdXRcXFwiIGtleWJvYXJkVHlwZT1cXFwiZW1haWxcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICBcXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxuICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJQYXNzd29yZFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiAgY2xhc3M9XFxcImlucHV0XFxcIj48L1RleHRGaWVsZD5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gIFxcbiAgICA8QnV0dG9uIHRleHQ9XFxcIkxvZyBJblxcXCIgW25zUm91dGVyTGlua109XFxcIlsnL3Rlc3RlJ11cXFwiIHBhZ2VUcmFuc2l0aW9uPVxcXCJzbGlkZVxcXCIgY2xlYXJIaXN0b3J5PVxcXCJmYWxzZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+PC9CdXR0b24+XFxuICAgIFxcbiAgPC9TdGFja0xheW91dD5cXG48L0ZsZXhib3hMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCJ+L2FwcC9saWIvZnVzaW9uQXV0aENsaWVudEluc3RhbmNlXCI7XG5pbXBvcnQge0xvZ2luUmVxdWVzdH0gZnJvbSBcIkBmdXNpb25hdXRoL3R5cGVzY3JpcHQtY2xpZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9pdGVtLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbG9naW4gPSAnaXNtYWVsdGVzdGUnO1xuICAgIHBhc3N3b3JkID0gJzEyMzQ1Njc4OSc7XG4gICAgLy8gcHJpdmF0ZSBjbGllbnQgPSBuZXcgRGVmYXVsdFJFU1RDbGllbnRCdWlsZGVyKCkuYnVpbGQoJ2h0dHA6Ly8xOTIuMTY4LjIxNy4yNTA6OTAxMScpOztcbiAgICByZXF1ZXN0IDogTG9naW5SZXF1ZXN0ID0ge1xuICAgICAgICBcImxvZ2luSWRcIjogdGhpcy5sb2dpbixcbiAgICAgICAgXCJwYXNzd29yZFwiOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICBcImFwcGxpY2F0aW9uSWRcIjogXCJmY2E0ODE0Zi02NDVjLTRjM2YtYTliMC0yYjJjYTdhMmU4MzVcIlxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHRoaXMuZXhwbGFuYXRpb25Qcm9taXNlKCk7XG4gICAgICAgIC8vIGNvbnNvbGUuaW5mbyh0aGlzLmNsaWVudExvZ2luKCkpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgZXhwbGFuYXRpb25Qcm9taXNlKCkge1xuICAgICAgICBuZXcgUHJvbWlzZTxudW1iZXI+KChyZXNvbHZlKSA9PiB7cmVzb2x2ZSg1KX0pXG4gICAgICAgICAgICAudGhlbigobnVtKSA9PiBudW0gKjIpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiAxMC9yZXN1bHQpXG4gICAgICAgICAgICAudGhlbigobmV3VmFsKSA9PiBuZXdWYWwrNSwgZXJyID0+IDEwKVxuICAgICAgICAgICAgLnRoZW4oZmltID0+IGNvbnNvbGUubG9nKFwiZmltOiBcIixmaW0pKTtcbiAgICB9XG5cbiAgICBjbGllbnRMb2dpbigpIHtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5sb2dpbih0aGlzLnJlcXVlc3QpXG4gICAgICAgICAgLnRoZW4odGhpcy5oYW5kbGVSZXNwb25zZSwgdGhpcy5oYW5kbGVFcnJvclJlc3BvbnNlKTtcbiAgICB9XG5cblxuICBwdWJsaWMgaGFuZGxlUmVzcG9uc2UoY2xpZW50UmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmluZm8oSlNPTi5zdHJpbmdpZnkoY2xpZW50UmVzcG9uc2UsIG51bGwsIDIpKTtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVFcnJvclJlc3BvbnNlKGNsaWVudFJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5lcnJvcihKU09OLnN0cmluZ2lmeShjbGllbnRSZXNwb25zZSwgbnVsbCwgMikpO1xuICB9XG5cbn1cbiIsIi8vIGltcG9ydCB7RnVzaW9uQXV0aENsaWVudH0gZnJvbSBcIkBmdXNpb25hdXRoL3R5cGVzY3JpcHQtY2xpZW50XCI7XG4vL1xuLy8gZXhwb3J0IGRlZmF1bHQgbmV3IEZ1c2lvbkF1dGhDbGllbnQoXCJaZkJxa1c3WXJKck5saENiNVlMZmx6UW5qWVJHOWFmeVZyalJzc1BoSG1rXCIsICdodHRwOi8vMTkyLjE2OC4yMTcuMjUwOjkwMTEnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJ7Tn0gR2VvbG9jYXRpb24gRXhhbXBsZVxcXCI+PC9BY3Rpb25CYXI+XFxuPEdyaWRMYXlvdXQ+XFxuICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJMYXRpdHVkZToge3sgbGF0aXR1ZGUgfX1cXFwiPjwvTGFiZWw+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTG9uZ2l0dWRlOiB7eyBsb25naXR1ZGUgfX1cXFwiPjwvTGFiZWw+XFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWFjdGl2ZVxcXCIgdGV4dD1cXFwiVXBkYXRlXFxcIiAodGFwKT1cXFwidXBkYXRlTG9jYXRpb24oKVxcXCI+PC9CdXR0b24+XFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWFjdGl2ZVxcXCIgdGV4dD1cXFwiV2F0Y2ggTG9jYXRpb25cXFwiICh0YXApPVxcXCJzdGFydFdhdGNoaW5nTG9jYXRpb24oKVxcXCI+PC9CdXR0b24+XFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWFjdGl2ZVxcXCIgdGV4dD1cXFwiU3RvcCBXYXRjaGluZ1xcXCIgKHRhcCk9XFxcInN0b3BXYXRjaGluZ0xvY2F0aW9uKClcXFwiPjwvQnV0dG9uPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIEdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcblxuQENvbXBvbmVudCh7dGVtcGxhdGVVcmw6ICd0ZXN0ZS5jb21wb25lbnQuaHRtbCd9KVxuZXhwb3J0IGNsYXNzIHRlc3RlQ29tcG9uZW50e1xuICAgIFxuICAgIHB1YmxpYyBsYXRpdHVkZTogbnVtYmVyO1xuICAgIHB1YmxpYyBsb25naXR1ZGU6IG51bWJlcjtcbiAgICBwcml2YXRlIHdhdGNoSWQ6IG51bWJlcjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xuICAgICAgICB0aGlzLmxhdGl0dWRlID0gMDtcbiAgICAgICAgdGhpcy5sb25naXR1ZGUgPSAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RGV2aWNlTG9jYXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIEdlb2xvY2F0aW9uLmVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIEdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7dGltZW91dDogMTAwMDB9KS50aGVuKGxvY2F0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVMb2NhdGlvbigpIHtcbiAgICAgICAgdGhpcy5nZXREZXZpY2VMb2NhdGlvbigpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMubGF0aXR1ZGUgPSByZXN1bHQubGF0aXR1ZGU7XG4gICAgICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IHJlc3VsdC5sb25naXR1ZGU7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnRXYXRjaGluZ0xvY2F0aW9uKCkge1xuICAgICAgICB0aGlzLndhdGNoSWQgPSBHZW9sb2NhdGlvbi53YXRjaExvY2F0aW9uKGxvY2F0aW9uID0+IHtcbiAgICAgICAgICAgIGlmKGxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF0aXR1ZGUgPSBsb2NhdGlvbi5sYXRpdHVkZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb25naXR1ZGUgPSBsb2NhdGlvbi5sb25naXR1ZGU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSwgeyB1cGRhdGVEaXN0YW5jZTogMSwgbWluaW11bVVwZGF0ZVRpbWU6IDEwMDAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0b3BXYXRjaGluZ0xvY2F0aW9uKCkge1xuICAgICAgICBpZih0aGlzLndhdGNoSWQpIHtcbiAgICAgICAgICAgIEdlb2xvY2F0aW9uLmNsZWFyV2F0Y2godGhpcy53YXRjaElkKTtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjtcblxuLy8gQSB0cmFkaXRpb25hbCBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gc3RhcnRzIGJ5IGluaXRpYWxpemluZyBnbG9iYWwgb2JqZWN0cyxcbi8vIHNldHRpbmcgdXAgZ2xvYmFsIENTUyBydWxlcywgY3JlYXRpbmcsIGFuZCBuYXZpZ2F0aW5nIHRvIHRoZSBtYWluIHBhZ2UuXG4vLyBBbmd1bGFyIGFwcGxpY2F0aW9ucyBuZWVkIHRvIHRha2UgY2FyZSBvZiB0aGVpciBvd24gaW5pdGlhbGl6YXRpb246XG4vLyBtb2R1bGVzLCBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCByb3V0ZXMsIERJIHByb3ZpZGVycy5cbi8vIEEgTmF0aXZlU2NyaXB0IEFuZ3VsYXIgYXBwIG5lZWRzIHRvIG1ha2UgYm90aCBwYXJhZGlnbXMgd29yayB0b2dldGhlcixcbi8vIHNvIHdlIHByb3ZpZGUgYSB3cmFwcGVyIHBsYXRmb3JtIG9iamVjdCwgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljLFxuLy8gdGhhdCBzZXRzIHVwIGEgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIGFuZCBjYW4gYm9vdHN0cmFwIHRoZSBBbmd1bGFyIGZyYW1ld29yay5cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==