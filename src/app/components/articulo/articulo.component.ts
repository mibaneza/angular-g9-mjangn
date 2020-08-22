import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticuloService } from '../../service/articulo.service';
import { ArticuloI } from "../../models/articulo";

@Component({
    selector: 'articulo',
    templateUrl: './articulo.component.html',
    styles: ['']

})

export class ArticuloComponent implements OnInit {
    coche: {marca: string, modelo: string};
    public validate;
    public validatelink;
    public titulo;
    public active;
    public size;
    public ga;
    articulo : ArticuloI;
    constructor(
      private rutaActiva: ActivatedRoute,
      private articuloService: ArticuloService ){
        this.titulo = 'Acerca de mí';
        this.active = 'active';
        this.size = 15;
        
        this.validate = null;
        this.validatelink = "null";
        this.articulo = new ArticuloI('','','',null);

    }
    public loadScript() {
      let body = <HTMLDivElement> document.body;
      let script = document.createElement('script');
      script.innerHTML = '';
      script.src = 'https://gist.github.com/mibaneza/bf02ec4540244bb01ddaef2be8973fa0.j';
      script.async = true;
      script.defer = true;
      body.appendChild(script);
}
    ngOnInit() {
      this.ga = this.loadScript();
        this.coche = {
          marca: this.rutaActiva.snapshot.params.blog,
          modelo: "awd"
        };
        this.rutaActiva.params.subscribe(
          (params: Params) => {
            this.coche.marca = params.blog;
            this.articuloService.getArticuloFindOne(params.blog)
            .subscribe(
              data => {
                this.articulo = new ArticuloI(data.data.linkarticle,data.data.titlearticle,data.data.imgheaderlink,data.data.sectionr);
                console.log(this.articulo);
              },
              error => {
                console.log(error.error);
              }
            )
          }
        );       
      }
    
}
