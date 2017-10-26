import {Component, OnInit} from '@angular/core'
import {IOrder} from './ordersinterface'


@Component({
    selector:'OrderSelector',
    templateUrl:'app/orders/orders.html',
    styleUrls:['app/orders/orders.css']
})

export class OrdersComponent implements OnInit{
pageTitle:string="orders page"
imageWidth:number=30;
showImage:boolean=false;
orderFilter:string=''
orders:IOrder[]=[
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
]
showHideImage(){
this.showImage=!this.showImage;
}
ngOnInit():void{
    this.pageTitle="This is from Oninit Method"
    console.log("This is on init method");
}
}