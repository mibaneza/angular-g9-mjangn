import { Component } from '@angular/core';

@Component({
    selector: 'proyect',
    templateUrl: './proyect.component.html',
    styles: ['']


})

export class ProyectComponent {
    
    public titulo;
    public active;
    public size;

    constructor(){
        this.titulo = 'Proyectos';
        this.active = 'active';
        this.size = 'headerG';
    }
    CardProyImgTitulo: any[] = 
    [
        {
            habilitado: false,
            isoTipo : 'reactjs',
            titulo : 'Obtener frase BreakingBad',
            texto : 'Consulta aleatoria a una api externa, Desarrollado en Reactjs. // Habilitado',
            urls : 'https://mibaneza.github.io/BreakingBad/',
            btn : 'Ir'
        },
        {
            habilitado: true,
            isoTipo : 'intocables',
            titulo : 'Rulesly',
            texto : 'Page desarrollado en php y Query. Tabla dinamica, informe grafico en linea. Patron mvc // En Produccion',
            urls : '/articulo/rulesly-intocables-rp',
            btn : 'Ir'
        },
        {
            habilitado: false,
            isoTipo : 'escudo',
            titulo : 'APK Colegio San Remo',
            texto : 'Plataforma virtual desarrollado en Kotlin con seguridad JWT // Desabilitado',
            urls : 'https://mibaneza.github.io/ibanezmarcos/util/sanremo.apk',
            btn : 'Descargar'
        },
        {
            habilitado: false,
            isoTipo : 'reactjs',
            titulo : 'Gasto semanal',
            texto : 'Gestiona tu presupuesto, Desarrollado en Reactjs. // Habilitado',
            urls : 'https://mibaneza.github.io/presupuesto/',
            btn : 'Ir'
        },
        {
            habilitado: false,
            isoTipo : 'reactjs',
            titulo : 'Administrador de paciente',
            texto : 'Page Veterinaria, Crea una cita para tu mascota. Desarrollado en Reactjs. // Habilitado',
            urls : 'https://mibaneza.github.io/cita/',
            btn : 'Ir'
        }
    ];
}

