"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OrdersComponent = /** @class */ (function () {
    function OrdersComponent() {
        this.pageTitle = "orders page";
        this.imageWidth = 30;
        this.showImage = false;
        this.orderFilter = '';
        this.orders = [
            {
                "orderId": 1,
                "orderName": "Leaf Order1",
                "orderCode": "GDN-0011",
                "releaseDate": "March 19, 2016",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95,
                "starRating": 3.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "orderId": 2,
                "orderName": "Garden order1",
                "orderCode": "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            }
        ];
    }
    OrdersComponent.prototype.showHideImage = function () {
        this.showImage = !this.showImage;
    };
    OrdersComponent.prototype.ngOnInit = function () {
        this.pageTitle = "This is from Oninit Method";
        console.log("This is on init method");
    };
    OrdersComponent = __decorate([
        core_1.Component({
            selector: 'OrderSelector',
            templateUrl: 'app/orders/orders.html',
            styleUrls: ['app/orders/orders.css']
        })
    ], OrdersComponent);
    return OrdersComponent;
}());
exports.OrdersComponent = OrdersComponent;
//# sourceMappingURL=orders.js.map