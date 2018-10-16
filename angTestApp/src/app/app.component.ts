import { Component } from '@angular/core';

class Item {
    purchase: string;
    done: boolean;
    price: number;

    constructor(purchase: string, price: number) {

        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}

@Component({
    selector: 'purchase-app',
    styleUrls: ['./app.component.css'],
    //templateUrl: './app.component.html'
    template: `<child-comp>
                    <h3 #headerContent>Добро пожаловать {{name}}!</h3>
               </child-comp>
                <p bold>bold stuff</p>`
})
export class AppComponent {

    name: string = "Tom";
}