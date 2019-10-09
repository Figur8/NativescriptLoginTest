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
/* harmony import */ var _app_lib_fusionAuthClientInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/lib/fusionAuthClientInstance.ts");


var ItemService = /** @class */ (function () {
    // private client = new DefaultRESTClientBuilder().build('http://192.168.217.250:9011');;
    function ItemService() {
        this.login = 'ismaelteste';
        this.password = '123456789';
        this.request = {
            "loginId": this.login,
            "password": this.password,
            "applicationId": "fca4814f-645c-4c3f-a9b0-2b2ca7a2e835"
        };
        console.info(this.clientTeste());
    }
    ItemService.prototype.loginRequest = function () {
        return _app_lib_fusionAuthClientInstance__WEBPACK_IMPORTED_MODULE_1__["default"].login(this.request);
    };
    ItemService.prototype.clientTeste = function () {
        return this.loginRequest()
            .then(this.handleResponse, this.handleErrorResponse);
    };
    ItemService.prototype.handleResponse = function (clientResponse) {
        console.info(JSON.stringify(clientResponse, null, 2));
    };
    ItemService.prototype.handleErrorResponse = function (clientResponse) {
        console.error(JSON.stringify(clientResponse, null, 2));
    };
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
        return _app_lib_fusionAuthClientInstance__WEBPACK_IMPORTED_MODULE_2__["default"].login(this.request)
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fusionauth_typescript_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@fusionauth/typescript-client/build/index.js");
/* harmony import */ var _fusionauth_typescript_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fusionauth_typescript_client__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (new _fusionauth_typescript_client__WEBPACK_IMPORTED_MODULE_0__["FusionAuthClient"]("ZfBqkW7YrJrNlhCb5YLflzQnjYRG9afyVrjRssPhHmk", 'http://192.168.217.250:9011'));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2l0ZW0vaXRlbS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2l0ZW0vaXRlbS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW1zLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW1zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2Z1c2lvbkF1dGhDbGllbnRJbnN0YW5jZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvdGVzdGUvdGVzdGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Rlc3RlL3Rlc3RlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7O0FDWkEseUVBQTJCLG1CQUFPLENBQUMsZ0RBQWdEO0FBQ25GO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLG9HQUErRjs7QUFFakg7QUFDQSxjQUFjLFFBQVM7O0FBRXZCO0FBQ0Es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YyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTSw2Q0FBb0IsR0FBM0I7UUFDSSxJQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDYixtRUFBc0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDdkI7SUFDTCxDQUFDOztnQkE1Q2dDLG9EQUFNOztJQU45QixjQUFjO1FBRDFCLCtEQUFTLENBQUMsRUFBQyxpRUFBbUMsRUFBQyxDQUFDO3lDQU9aLG9EQUFNO09BTjlCLGNBQWMsQ0FvRDFCO0lBQUQscUJBQUM7Q0FBQTtBQXBEMEI7Ozs7Ozs7Ozs7Ozs7O0FDRDNCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQ0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLGNBQWdGO0FBQ047QUFDMUUsK0RBQXNFO0FBQ3RFLGdEQUF5RDtBQUN6RCwyQkFBeUU7QUFDekUsaUJBQXdFO0FBQ1c7QUFDbkYsa0NBQXlEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpLCBcIlwiKTtcblxuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC5jc3MgZmlsZSBpcyB3aGVyZSB5b3UgcGxhY2UgQ1NTIHJ1bGVzIHRoYXRcXG55b3Ugd291bGQgbGlrZSB0byBhcHBseSB0byB5b3VyIGVudGlyZSBhcHBsaWNhdGlvbi4gQ2hlY2sgb3V0XFxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9zdHlsaW5nIGZvciBhIGZ1bGwgbGlzdCBvZiB0aGUgQ1NTXFxuc2VsZWN0b3JzIGFuZCBwcm9wZXJ0aWVzIHlvdSBjYW4gdXNlIHRvIHN0eWxlIFVJIGNvbXBvbmVudHMuXFxuXFxuLypcXG5JbiBtYW55IGNhc2VzIHlvdSBtYXkgd2FudCB0byB1c2UgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGluc3RlYWRcXG5vZiB3cml0aW5nIHlvdXIgb3duIENTUyBydWxlcy4gRm9yIGEgZnVsbCBsaXN0IG9mIGNsYXNzIG5hbWVzIGluIHRoZSB0aGVtZVxcbnJlZmVyIHRvIGh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvdGhlbWUuXFxuKi9cXG5cIiwgXCJcIl0pO1xuXG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IHRlc3RlQ29tcG9uZW50fSBmcm9tIFwiLi90ZXN0ZS90ZXN0ZS5jb21wb25lbnRcIlxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2l0ZW1zXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwiaXRlbXNcIiwgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJ0ZXN0ZVwiLCBjb21wb25lbnQ6IHRlc3RlQ29tcG9uZW50IH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci9jb3JlLWNvbmNlcHRzL2FuZ3VsYXItbmF2aWdhdGlvbi5odG1sI3BhZ2Utcm91dGVyLW91dGxldCAtLT5cXG48cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgKiBhcyBHZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgXG5cbiAgICBwdWJsaWMgbGF0aXR1ZGU6IG51bWJlcjtcbiAgICBwdWJsaWMgbG9uZ2l0dWRlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSB3YXRjaElkOiBudW1iZXI7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcbiAgICAgICAgdGhpcy5sYXRpdHVkZSA9IDA7XG4gICAgICAgIHRoaXMubG9uZ2l0dWRlID0gMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldERldmljZUxvY2F0aW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBHZW9sb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBHZW9sb2NhdGlvbi5nZXRDdXJyZW50TG9jYXRpb24oe3RpbWVvdXQ6IDEwMDAwfSkudGhlbihsb2NhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlTG9jYXRpb24oKSB7XG4gICAgICAgIHRoaXMuZ2V0RGV2aWNlTG9jYXRpb24oKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLmxhdGl0dWRlID0gcmVzdWx0LmxhdGl0dWRlO1xuICAgICAgICAgICAgdGhpcy5sb25naXR1ZGUgPSByZXN1bHQubG9uZ2l0dWRlO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0V2F0Y2hpbmdMb2NhdGlvbigpIHtcbiAgICAgICAgdGhpcy53YXRjaElkID0gR2VvbG9jYXRpb24ud2F0Y2hMb2NhdGlvbihsb2NhdGlvbiA9PiB7XG4gICAgICAgICAgICBpZihsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhdGl0dWRlID0gbG9jYXRpb24ubGF0aXR1ZGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9uZ2l0dWRlID0gbG9jYXRpb24ubG9uZ2l0dWRlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0sIHsgdXBkYXRlRGlzdGFuY2U6IDEsIG1pbmltdW1VcGRhdGVUaW1lOiAxMDAwIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdG9wV2F0Y2hpbmdMb2NhdGlvbigpIHtcbiAgICAgICAgaWYodGhpcy53YXRjaElkKSB7XG4gICAgICAgICAgICBHZW9sb2NhdGlvbi5jbGVhcldhdGNoKHRoaXMud2F0Y2hJZCk7XG4gICAgICAgICAgICB0aGlzLndhdGNoSWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyB0ZXN0ZUNvbXBvbmVudCB9IGZyb20gXCIuL3Rlc3RlL3Rlc3RlLmNvbXBvbmVudFwiO1xuXG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEh0dHBDbGllbnQgd3JhcHBlclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBJdGVtc0NvbXBvbmVudCxcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudCxcbiAgICAgICAgdGVzdGVDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW10sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJEZXRhaWxzXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+PC9BY3Rpb25CYXI+XFxuPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cXFwiY29sdW1uXFxcIiBjbGFzcz1cXFwicGFnZVxcXCI+XFxuICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJtLTE1XFxcIj5cXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaDJcXFwiIFt0ZXh0XT1cXFwiaXRlbS5pZCArICcuICdcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImgyXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICA8TGFiZWwgY2xhc3M9XFxcImg0XFxcIiBbdGV4dF09XFxcIml0ZW0ucm9sZVxcXCI+PC9MYWJlbD5cXG48L0ZsZXhib3hMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtZGV0YWlsc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaXRlbS5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSXRlbURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIucGFnZSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmZvcm0ge1xcbiAgbWFyZ2luLWxlZnQ6IDMwO1xcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcXG4gIGZsZXgtZ3JvdzogMjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5idG4geyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhBQkUyIH1cIiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIn4vYXBwL2xpYi9mdXNpb25BdXRoQ2xpZW50SW5zdGFuY2VcIjtcbmltcG9ydCB7SWRlbnRpdHlQcm92aWRlckxvZ2luUmVxdWVzdCwgTG9naW5SZXF1ZXN0fSBmcm9tIFwiQGZ1c2lvbmF1dGgvdHlwZXNjcmlwdC1jbGllbnRcIjtcblxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xuICAgIGxvZ2luID0gJ2lzbWFlbHRlc3RlJztcbiAgICBwYXNzd29yZCA9ICcxMjM0NTY3ODknO1xuICAgIC8vIHByaXZhdGUgY2xpZW50ID0gbmV3IERlZmF1bHRSRVNUQ2xpZW50QnVpbGRlcigpLmJ1aWxkKCdodHRwOi8vMTkyLjE2OC4yMTcuMjUwOjkwMTEnKTs7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKHRoaXMuY2xpZW50VGVzdGUoKSk7XG4gICAgfVxuXG4gICAgcmVxdWVzdCA6IExvZ2luUmVxdWVzdCA9IHtcbiAgICAgICAgXCJsb2dpbklkXCI6IHRoaXMubG9naW4sXG4gICAgICAgIFwicGFzc3dvcmRcIjogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgXCJhcHBsaWNhdGlvbklkXCI6IFwiZmNhNDgxNGYtNjQ1Yy00YzNmLWE5YjAtMmIyY2E3YTJlODM1XCJcbiAgICB9O1xuXG4gICAgbG9naW5SZXF1ZXN0KCl7XG4gICAgICByZXR1cm4gY2xpZW50LmxvZ2luKHRoaXMucmVxdWVzdCk7XG4gICAgfVxuXG4gICAgY2xpZW50VGVzdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2luUmVxdWVzdCgpXG4gICAgICAgICAgLnRoZW4odGhpcy5oYW5kbGVSZXNwb25zZSwgdGhpcy5oYW5kbGVFcnJvclJlc3BvbnNlKTtcbiAgICAgIH1cblxuXG4gIHB1YmxpYyBoYW5kbGVSZXNwb25zZShjbGllbnRSZXNwb25zZSkge1xuICAgIGNvbnNvbGUuaW5mbyhKU09OLnN0cmluZ2lmeShjbGllbnRSZXNwb25zZSwgbnVsbCwgMikpO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZUVycm9yUmVzcG9uc2UoY2xpZW50UmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmVycm9yKEpTT04uc3RyaW5naWZ5KGNsaWVudFJlc3BvbnNlLCBudWxsLCAyKSk7XG4gIH1cblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gIDxTdGFja0xheW91dCBjbGFzcz1cXFwiZm9ybVxcXCI+XFxuICAgIDxJbWFnZSBzcmM9XFxcImh0dHBzOi8vd3d3LmNhcm5lZ2lldGVjaG5vbG9naWVzLmNvbS9zaXRlcy9jdC9hc3NldHMvaW1hZ2UvbG9nby1vY3RvcHVzLnBuZ1xcXCIgbG9hZE1vZGU9XFxcImFzeW5jXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiPjwvSW1hZ2U+XFxuXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcbiAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJpbnB1dFxcXCIga2V5Ym9hcmRUeXBlPVxcXCJlbWFpbFxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIiBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIj48L1RleHRGaWVsZD5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gIFxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIlBhc3N3b3JkXFxcIiBzZWN1cmU9XFxcInRydWVcXFwiICBjbGFzcz1cXFwiaW5wdXRcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgXFxuICAgIDxCdXR0b24gdGV4dD1cXFwiTG9nIEluXFxcIiBbbnNSb3V0ZXJMaW5rXT1cXFwiWycvdGVzdGUnXVxcXCIgcGFnZVRyYW5zaXRpb249XFxcInNsaWRlXFxcIiBjbGVhckhpc3Rvcnk9XFxcImZhbHNlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj48L0J1dHRvbj5cXG4gICAgXFxuICA8L1N0YWNrTGF5b3V0PlxcbjwvRmxleGJveExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIn4vYXBwL2xpYi9mdXNpb25BdXRoQ2xpZW50SW5zdGFuY2VcIjtcbmltcG9ydCB7TG9naW5SZXF1ZXN0fSBmcm9tIFwiQGZ1c2lvbmF1dGgvdHlwZXNjcmlwdC1jbGllbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2l0ZW0uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBsb2dpbiA9ICdpc21hZWx0ZXN0ZSc7XG4gICAgcGFzc3dvcmQgPSAnMTIzNDU2Nzg5JztcbiAgICAvLyBwcml2YXRlIGNsaWVudCA9IG5ldyBEZWZhdWx0UkVTVENsaWVudEJ1aWxkZXIoKS5idWlsZCgnaHR0cDovLzE5Mi4xNjguMjE3LjI1MDo5MDExJyk7O1xuICAgIHJlcXVlc3QgOiBMb2dpblJlcXVlc3QgPSB7XG4gICAgICAgIFwibG9naW5JZFwiOiB0aGlzLmxvZ2luLFxuICAgICAgICBcInBhc3N3b3JkXCI6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgIFwiYXBwbGljYXRpb25JZFwiOiBcImZjYTQ4MTRmLTY0NWMtNGMzZi1hOWIwLTJiMmNhN2EyZTgzNVwiXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5leHBsYW5hdGlvblByb21pc2UoKTtcbiAgICAgICAgLy8gY29uc29sZS5pbmZvKHRoaXMuY2xpZW50TG9naW4oKSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBleHBsYW5hdGlvblByb21pc2UoKSB7XG4gICAgICAgIG5ldyBQcm9taXNlPG51bWJlcj4oKHJlc29sdmUpID0+IHtyZXNvbHZlKDUpfSlcbiAgICAgICAgICAgIC50aGVuKChudW0pID0+IG51bSAqMilcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IDEwL3Jlc3VsdClcbiAgICAgICAgICAgIC50aGVuKChuZXdWYWwpID0+IG5ld1ZhbCs1LCBlcnIgPT4gMTApXG4gICAgICAgICAgICAudGhlbihmaW0gPT4gY29uc29sZS5sb2coXCJmaW06IFwiLGZpbSkpO1xuICAgIH1cblxuICAgIGNsaWVudExvZ2luKCkge1xuICAgICAgICByZXR1cm4gY2xpZW50LmxvZ2luKHRoaXMucmVxdWVzdClcbiAgICAgICAgICAudGhlbih0aGlzLmhhbmRsZVJlc3BvbnNlLCB0aGlzLmhhbmRsZUVycm9yUmVzcG9uc2UpO1xuICAgIH1cblxuXG4gIHB1YmxpYyBoYW5kbGVSZXNwb25zZShjbGllbnRSZXNwb25zZSkge1xuICAgIGNvbnNvbGUuaW5mbyhKU09OLnN0cmluZ2lmeShjbGllbnRSZXNwb25zZSwgbnVsbCwgMikpO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZUVycm9yUmVzcG9uc2UoY2xpZW50UmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmVycm9yKEpTT04uc3RyaW5naWZ5KGNsaWVudFJlc3BvbnNlLCBudWxsLCAyKSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtGdXNpb25BdXRoQ2xpZW50fSBmcm9tIFwiQGZ1c2lvbmF1dGgvdHlwZXNjcmlwdC1jbGllbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEZ1c2lvbkF1dGhDbGllbnQoXCJaZkJxa1c3WXJKck5saENiNVlMZmx6UW5qWVJHOWFmeVZyalJzc1BoSG1rXCIsICdodHRwOi8vMTkyLjE2OC4yMTcuMjUwOjkwMTEnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJ7Tn0gR2VvbG9jYXRpb24gRXhhbXBsZVxcXCI+PC9BY3Rpb25CYXI+XFxuPEdyaWRMYXlvdXQ+XFxuICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJMYXRpdHVkZToge3sgbGF0aXR1ZGUgfX1cXFwiPjwvTGFiZWw+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTG9uZ2l0dWRlOiB7eyBsb25naXR1ZGUgfX1cXFwiPjwvTGFiZWw+XFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWFjdGl2ZVxcXCIgdGV4dD1cXFwiVXBkYXRlXFxcIiAodGFwKT1cXFwidXBkYXRlTG9jYXRpb24oKVxcXCI+PC9CdXR0b24+XFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWFjdGl2ZVxcXCIgdGV4dD1cXFwiV2F0Y2ggTG9jYXRpb25cXFwiICh0YXApPVxcXCJzdGFydFdhdGNoaW5nTG9jYXRpb24oKVxcXCI+PC9CdXR0b24+XFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWFjdGl2ZVxcXCIgdGV4dD1cXFwiU3RvcCBXYXRjaGluZ1xcXCIgKHRhcCk9XFxcInN0b3BXYXRjaGluZ0xvY2F0aW9uKClcXFwiPjwvQnV0dG9uPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIEdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcblxuQENvbXBvbmVudCh7dGVtcGxhdGVVcmw6ICd0ZXN0ZS5jb21wb25lbnQuaHRtbCd9KVxuZXhwb3J0IGNsYXNzIHRlc3RlQ29tcG9uZW50e1xuICAgIFxuICAgIHB1YmxpYyBsYXRpdHVkZTogbnVtYmVyO1xuICAgIHB1YmxpYyBsb25naXR1ZGU6IG51bWJlcjtcbiAgICBwcml2YXRlIHdhdGNoSWQ6IG51bWJlcjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xuICAgICAgICB0aGlzLmxhdGl0dWRlID0gMDtcbiAgICAgICAgdGhpcy5sb25naXR1ZGUgPSAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RGV2aWNlTG9jYXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIEdlb2xvY2F0aW9uLmVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIEdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7dGltZW91dDogMTAwMDB9KS50aGVuKGxvY2F0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVMb2NhdGlvbigpIHtcbiAgICAgICAgdGhpcy5nZXREZXZpY2VMb2NhdGlvbigpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMubGF0aXR1ZGUgPSByZXN1bHQubGF0aXR1ZGU7XG4gICAgICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IHJlc3VsdC5sb25naXR1ZGU7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnRXYXRjaGluZ0xvY2F0aW9uKCkge1xuICAgICAgICB0aGlzLndhdGNoSWQgPSBHZW9sb2NhdGlvbi53YXRjaExvY2F0aW9uKGxvY2F0aW9uID0+IHtcbiAgICAgICAgICAgIGlmKGxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF0aXR1ZGUgPSBsb2NhdGlvbi5sYXRpdHVkZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb25naXR1ZGUgPSBsb2NhdGlvbi5sb25naXR1ZGU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSwgeyB1cGRhdGVEaXN0YW5jZTogMSwgbWluaW11bVVwZGF0ZVRpbWU6IDEwMDAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0b3BXYXRjaGluZ0xvY2F0aW9uKCkge1xuICAgICAgICBpZih0aGlzLndhdGNoSWQpIHtcbiAgICAgICAgICAgIEdlb2xvY2F0aW9uLmNsZWFyV2F0Y2godGhpcy53YXRjaElkKTtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjtcblxuLy8gQSB0cmFkaXRpb25hbCBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gc3RhcnRzIGJ5IGluaXRpYWxpemluZyBnbG9iYWwgb2JqZWN0cyxcbi8vIHNldHRpbmcgdXAgZ2xvYmFsIENTUyBydWxlcywgY3JlYXRpbmcsIGFuZCBuYXZpZ2F0aW5nIHRvIHRoZSBtYWluIHBhZ2UuXG4vLyBBbmd1bGFyIGFwcGxpY2F0aW9ucyBuZWVkIHRvIHRha2UgY2FyZSBvZiB0aGVpciBvd24gaW5pdGlhbGl6YXRpb246XG4vLyBtb2R1bGVzLCBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCByb3V0ZXMsIERJIHByb3ZpZGVycy5cbi8vIEEgTmF0aXZlU2NyaXB0IEFuZ3VsYXIgYXBwIG5lZWRzIHRvIG1ha2UgYm90aCBwYXJhZGlnbXMgd29yayB0b2dldGhlcixcbi8vIHNvIHdlIHByb3ZpZGUgYSB3cmFwcGVyIHBsYXRmb3JtIG9iamVjdCwgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljLFxuLy8gdGhhdCBzZXRzIHVwIGEgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIGFuZCBjYW4gYm9vdHN0cmFwIHRoZSBBbmd1bGFyIGZyYW1ld29yay5cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==