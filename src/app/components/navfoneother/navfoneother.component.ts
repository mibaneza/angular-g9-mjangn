import { Component, Input } from '@angular/core';

@Component({
    selector: 'navfoneother',
    templateUrl: './navfoneother.component.html',
    styles: ['']
})

export class NavfoneotherComponent {
    @Input()  aboutActive: String;
    @Input()  contactActive: String;
    @Input()  proyectActive: String;
    @Input()  homeActive: String;

    constructor(){ }
}
