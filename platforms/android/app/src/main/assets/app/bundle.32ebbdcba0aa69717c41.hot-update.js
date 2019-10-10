webpackHotUpdate("bundle",{

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


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaXRlbS9pdGVtcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9mdXNpb25BdXRoQ2xpZW50SW5zdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBR1Q7QUFDZTtBQVF4RDtJQVVJLHdCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVRsQyxVQUFLLEdBQUcsYUFBYSxDQUFDO1FBQ3RCLGFBQVEsR0FBRyxXQUFXLENBQUM7UUFDdkIseUZBQXlGO1FBQ3pGLFlBQU8sR0FBa0I7WUFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3JCLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN6QixlQUFlLEVBQUUsc0NBQXNDO1NBQzFELENBQUM7UUFHRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixvQ0FBb0M7SUFDeEMsQ0FBQztJQUVELGlDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsMkNBQWtCLEdBQWxCO1FBQ0ksSUFBSSxPQUFPLENBQVMsVUFBQyxPQUFPLElBQU0sT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUM7YUFDekMsSUFBSSxDQUFDLFVBQUMsR0FBRyxJQUFLLFVBQUcsR0FBRSxDQUFDLEVBQU4sQ0FBTSxDQUFDO2FBQ3JCLElBQUksQ0FBQyxVQUFDLE1BQU0sSUFBSyxTQUFFLEdBQUMsTUFBTSxFQUFULENBQVMsQ0FBQzthQUMzQixJQUFJLENBQUMsVUFBQyxNQUFNLElBQUssYUFBTSxHQUFDLENBQUMsRUFBUixDQUFRLEVBQUUsYUFBRyxJQUFJLFNBQUUsRUFBRixDQUFFLENBQUM7YUFDckMsSUFBSSxDQUFDLGFBQUcsSUFBSSxjQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksT0FBTyx3RUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFHSSx1Q0FBYyxHQUFyQixVQUFzQixjQUFjO1FBQ2xDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLDRDQUFtQixHQUExQixVQUEyQixjQUFjO1FBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBN0I2QixzREFBTTs7SUFWekIsY0FBYztRQUwxQiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsZ0VBQXFDOztTQUV4QyxDQUFDO3lDQVc4QixzREFBTTtPQVZ6QixjQUFjLENBeUMxQjtJQUFELHFCQUFDO0NBQUE7QUF6QzBCOzs7Ozs7OztBQ1ozQixrRUFBa0U7QUFDbEUsRUFBRTtBQUNGLHFIQUFxSCIsImZpbGUiOiJidW5kbGUuMzJlYmJkY2JhMGFhNjk3MTdjNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIn4vYXBwL2xpYi9mdXNpb25BdXRoQ2xpZW50SW5zdGFuY2VcIjtcbmltcG9ydCB7TG9naW5SZXF1ZXN0fSBmcm9tIFwiQGZ1c2lvbmF1dGgvdHlwZXNjcmlwdC1jbGllbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2l0ZW0uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBsb2dpbiA9ICdpc21hZWx0ZXN0ZSc7XG4gICAgcGFzc3dvcmQgPSAnMTIzNDU2Nzg5JztcbiAgICAvLyBwcml2YXRlIGNsaWVudCA9IG5ldyBEZWZhdWx0UkVTVENsaWVudEJ1aWxkZXIoKS5idWlsZCgnaHR0cDovLzE5Mi4xNjguMjE3LjI1MDo5MDExJyk7O1xuICAgIHJlcXVlc3QgOiBMb2dpblJlcXVlc3QgPSB7XG4gICAgICAgIFwibG9naW5JZFwiOiB0aGlzLmxvZ2luLFxuICAgICAgICBcInBhc3N3b3JkXCI6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgIFwiYXBwbGljYXRpb25JZFwiOiBcImZjYTQ4MTRmLTY0NWMtNGMzZi1hOWIwLTJiMmNhN2EyZTgzNVwiXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5leHBsYW5hdGlvblByb21pc2UoKTtcbiAgICAgICAgLy8gY29uc29sZS5pbmZvKHRoaXMuY2xpZW50TG9naW4oKSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBleHBsYW5hdGlvblByb21pc2UoKSB7XG4gICAgICAgIG5ldyBQcm9taXNlPG51bWJlcj4oKHJlc29sdmUpID0+IHtyZXNvbHZlKDUpfSlcbiAgICAgICAgICAgIC50aGVuKChudW0pID0+IG51bSAqMilcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IDEwL3Jlc3VsdClcbiAgICAgICAgICAgIC50aGVuKChuZXdWYWwpID0+IG5ld1ZhbCs1LCBlcnIgPT4gMTApXG4gICAgICAgICAgICAudGhlbihmaW0gPT4gY29uc29sZS5sb2coXCJmaW06IFwiLGZpbSkpO1xuICAgIH1cblxuICAgIGNsaWVudExvZ2luKCkge1xuICAgICAgICByZXR1cm4gY2xpZW50LmxvZ2luKHRoaXMucmVxdWVzdClcbiAgICAgICAgICAudGhlbih0aGlzLmhhbmRsZVJlc3BvbnNlLCB0aGlzLmhhbmRsZUVycm9yUmVzcG9uc2UpO1xuICAgIH1cblxuXG4gIHB1YmxpYyBoYW5kbGVSZXNwb25zZShjbGllbnRSZXNwb25zZSkge1xuICAgIGNvbnNvbGUuaW5mbyhKU09OLnN0cmluZ2lmeShjbGllbnRSZXNwb25zZSwgbnVsbCwgMikpO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZUVycm9yUmVzcG9uc2UoY2xpZW50UmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmVycm9yKEpTT04uc3RyaW5naWZ5KGNsaWVudFJlc3BvbnNlLCBudWxsLCAyKSk7XG4gIH1cblxufVxuIiwiLy8gaW1wb3J0IHtGdXNpb25BdXRoQ2xpZW50fSBmcm9tIFwiQGZ1c2lvbmF1dGgvdHlwZXNjcmlwdC1jbGllbnRcIjtcbi8vXG4vLyBleHBvcnQgZGVmYXVsdCBuZXcgRnVzaW9uQXV0aENsaWVudChcIlpmQnFrVzdZckpyTmxoQ2I1WUxmbHpRbmpZUkc5YWZ5VnJqUnNzUGhIbWtcIiwgJ2h0dHA6Ly8xOTIuMTY4LjIxNy4yNTA6OTAxMScpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==