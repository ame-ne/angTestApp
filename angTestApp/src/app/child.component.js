var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ContentChild, ElementRef } from '@angular/core';
var ChildComponent = /** @class */ (function () {
    function ChildComponent() {
    }
    ChildComponent.prototype.change = function () {
        console.log(this.header);
        this.header.nativeElement.textContent = "Hell to world!";
    };
    __decorate([
        ContentChild("headerContent"),
        __metadata("design:type", ElementRef)
    ], ChildComponent.prototype, "header", void 0);
    ChildComponent = __decorate([
        Component({
            selector: 'child-comp',
            template: "<ng-content></ng-content>\n               <button (click)=\"change()\">\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C</button>"
        })
    ], ChildComponent);
    return ChildComponent;
}());
export { ChildComponent };
//# sourceMappingURL=child.component.js.map