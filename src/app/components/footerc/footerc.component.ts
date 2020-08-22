import { Component } from '@angular/core';

@Component({
    selector: 'footerc',
    templateUrl: './footerc.component.html',
    styles: [`
      footer{  
        background-color: rgb(19, 52, 100); 
        color:aliceblue;
        bottom: 1;   
     }
    `]

})

export class FootercComponent {

    constructor(){  
    }
}
