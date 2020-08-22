import { Component, Input } from '@angular/core';

@Component({
    selector: 'articlehome',
    templateUrl: './articlehome.component.html',
    styles: ['']
})

export class ArticlehomeComponent {
    @Input()  nameurlImg: String;
    @Input()  nameDiv: String;
    constructor(){ }
}
