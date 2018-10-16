var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var Item = /** @class */ (function () {
    function Item(purchase, price) {
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
    return Item;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = "Tom";
    }
    AppComponent = __decorate([
        Component({
            selector: 'purchase-app',
            styleUrls: ['./app.component.css'],
            //templateUrl: './app.component.html'
            template: "<child-comp>\n                    <h3 #headerContent>\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C {{name}}!</h3>\n               </child-comp>\n                <p bold>bold stuff</p>"
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map