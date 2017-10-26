"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductSerachfilter = /** @class */ (function () {
    function ProductSerachfilter() {
    }
    ProductSerachfilter.prototype.transform = function (value, userEntered) {
        userEntered = userEntered ? userEntered.toLowerCase() : null;
        return userEntered ? value.filter(function (product) {
            return product.productName.toLowerCase().indexOf(userEntered) != -1;
        }) : value;
    };
    ProductSerachfilter = __decorate([
        core_1.Pipe({
            name: "productFilterName"
        })
    ], ProductSerachfilter);
    return ProductSerachfilter;
}());
exports.ProductSerachfilter = ProductSerachfilter;
//# sourceMappingURL=productfilter.js.map