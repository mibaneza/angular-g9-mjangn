import { Component } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styles: ['']

})

export class AboutComponent {
    
    public titulo;
    public active;
    public size;
    public ga;
    constructor(){
        this.titulo = 'Acerca de mí';
        this.active = 'active';
        this.size = 'headerG';
        this.ga = `<h1>ga<h1>`;

    }
}
