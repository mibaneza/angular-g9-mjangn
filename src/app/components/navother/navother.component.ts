import { Component, Input } from '@angular/core';

@Component({
    selector: 'navother',
    templateUrl: './navother.component.html',
    styles: ['']
})

export class NavotherComponent {
     @Input()  aboutActive: String;
     @Input()  contactActive: String;
     @Input()  proyectActive: String;
     @Input()  homeActive: String;
    constructor(){ }
}
