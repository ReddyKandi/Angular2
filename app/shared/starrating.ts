import {Component, OnChanges, Input} from '@angular/core'

@Component({
    selector:'starSelector',
    templateUrl:'app/shared/starrating.html',
    styleUrls:['app/shared/starrating.css']
})
export class StartRating implements OnChanges{

    @Input() rating:number;
    startWidth:number;
    ngOnChanges(): void{
        this.startWidth=86/5*this.rating;
    }
}