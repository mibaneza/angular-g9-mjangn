import { ContactI } from './contact.interface';
import { SectionI } from './sectionr';

export class ArticuloI{
    constructor(
       public linkarticle: string,
       public titlearticle: string,
       public imgheaderlink: string,
       public sectionr: Array<SectionI>
    ){}
}