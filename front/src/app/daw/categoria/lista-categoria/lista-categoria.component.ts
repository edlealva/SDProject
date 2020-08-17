import { Component, OnInit } from '@angular/core';
import { APIservice } from '../../../tky/servicesTKY/services';


export interface Categoria {
  descripcion: string;
  nombre: string;
 
}

let listacategorias: Categoria[] = [
  
  
];

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.scss']
})
export class ListaCategoriaComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'descripcion'];
  dataSource: any;
  categoriares: any;
  constructor(private _service: APIservice) { }

  ngOnInit() {

    this._service.getHistoricoCategorias()
    .subscribe(
      res => {
        this.categoriares = res;
        console.log(res);
        console.log(this.categoriares);
        console.log(this.categoriares[0].idcategoria);
        listacategorias =[];
        this.categoriares.forEach(elem => {
          listacategorias.push({nombre: elem.idcategoria, descripcion: elem.descripcion});
        console.table(listacategorias); 
        });
        
        this.dataSource = listacategorias;
      
      },
      err => {console.log(err);
      }
      );
  }

}
