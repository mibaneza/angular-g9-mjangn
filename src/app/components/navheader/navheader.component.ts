import { Component, Input } from '@angular/core';

@Component({
    selector: 'navheader',
    templateUrl: './navheader.component.html',
    styles: ['']

})

export class NavheaderComponent {
     @Input()  titulo: String;
    constructor(){ }
}
