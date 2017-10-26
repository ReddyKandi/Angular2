import {Pipe,PipeTransform} from '@angular/core'
import {IProduct} from './productsinterface'

@Pipe({
    name:"productFilterName"
})

export class ProductSerachfilter implements PipeTransform {
    transform(value:IProduct[], userEntered:string){
        userEntered=userEntered?userEntered.toLowerCase():null
        return userEntered?value.filter((product:IProduct)=>
        product.productName.toLowerCase().indexOf(userEntered)!=-1):value    
    }
}

