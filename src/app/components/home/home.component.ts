import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styles: ['']
})

export class HomeComponent {
    
    public titulo;
    public subtitulo;
    public active;
    public size;
    constructor(){
        this.titulo = 'Junior Developer';
        this.subtitulo = 'Desarrollador de sitios y aplicaciones web';
        this.active = 'active';
        this.size = 'headerIndex';
      //console.log(this.TarjetasImgTitulo);
    }
    niveles: any[] = [ { nivel: 'E', nombresNivel: 'Experto' }, { nivel: 'A', nombresNivel: 'Avanzado' }, { nivel: 'I', nombresNivel: 'Intermedio' }, { nivel: 'N', nombresNivel: 'Principiante' }, { nivel: 'F', nombresNivel: 'Fundamento' }];
    
    TarjetasImgTitulo: any[] = 
    [
        {
            isoTipos : 'codigo2',
            subTitulos : 'Lenguajes',
            subNivelNombre: 
            [
                {
                    nivel : 'I',
                    nombre : 'PHP'
                },
                {
                    nivel : 'A',
                    nombre : 'JAVA'
                },
                {
                    nivel : 'I',
                    nombre : 'C#'
                },
                {
                    nivel : 'A',
                    nombre : 'CSS'
                },
                {
                    nivel : 'E',
                    nombre : 'HTML'
                },
                {
                    nivel : 'I',
                    nombre : 'JavaScript'
                }
            ]

        },
        {
            isoTipos : 'fremeworks',
            subTitulos : 'Frameworks',
            subNivelNombre: 
            [
                {
                    nivel : 'A',
                    nombre : 'Spring Boot'
                },
                {
                    nivel : 'A',
                    nombre : 'Hibernate'
                },
                {
                    nivel : 'F',
                    nombre : 'Laravel'
                },
                {
                    nivel : 'F',
                    nombre : 'VueJS'
                },
                {
                    nivel : 'A',
                    nombre : 'AngularJS'
                },
                {
                    nivel : 'I',
                    nombre : 'ReactJS'
                }
            ]
        },
        {
            isoTipos : 'sqlserver',
            subTitulos : 'Databases',
            subNivelNombre: 
            [
                {
                    nivel : 'A',
                    nombre : 'SQL Server'
                },
                {
                    nivel : 'A',
                    nombre : 'MYSQL'
                },
                {
                    nivel : 'A',
                    nombre : 'Oracle'
                },
                {
                    nivel : 'N',
                    nombre : 'MongoDB'
                }
            ]
        },
        {
            isoTipos : 'cloud',
            subTitulos : 'Cloud',
            subNivelNombre: 
            [
                {
                    nivel : 'A',
                    nombre : 'Amazon AWS'
                },
                {
                    nivel : 'I',
                    nombre : 'Google Cloud'
                },
                {
                    nivel : 'F',
                    nombre : 'Microsoft Azure'
                },
                {
                    nivel : 'A',
                    nombre : 'GitHub'
                }
            ]
        },
        {
            isoTipos : 'Sistema',
            subTitulos : 'OS',
            subNivelNombre: 
            [
                {
                    nivel : 'I',
                    nombre : 'Linux Debian'
                },
                {
                    nivel : 'I',
                    nombre : 'Windows Server'
                }
            ]
        },
        {
            isoTipos : 'diseno',
            subTitulos : 'Graphics Engines',
            subNivelNombre: 
            [
                {
                    nivel : 'A',
                    nombre : 'Blender'
                },
                {
                    nivel : 'A',
                    nombre : 'Unity3D'
                }
            ]
        }
    ]


}
