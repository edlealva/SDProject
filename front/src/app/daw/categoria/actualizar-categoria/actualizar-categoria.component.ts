import { Component, OnInit } from '@angular/core';
import { APIservice } from '../../../tky/servicesTKY/services';

export interface Categoria {
  descripcion: string;
  nombre: string;
 
}

let listacategorias: Categoria[] = [
  
  
];

@Component({
  selector: 'app-actualizar-categoria',
  templateUrl: './actualizar-categoria.component.html',
  styleUrls: ['./actualizar-categoria.component.scss']
})
export class ActualizarCategoriaComponent implements OnInit {
  searchKey ="";
  displayedColumns: string[] = ['nombre', 'descripcion'];
  dataSource: any;
  constructor(private _service: APIservice) { }

  ngOnInit() {
  }

  onSearchClear(){
    

    this._service.getCategorias(this.searchKey)
    .subscribe(
      res => {
        console.log(res);
        listacategorias = [];
        console.log(res.Nombre);
        listacategorias.push({nombre: res.Nombre, descripcion: res.Descripcion});
        console.table(listacategorias);  
        this.dataSource = listacategorias;
        alert('La categoria ha sido creada');
      },
      err => {console.log(err);
      }
      );
    
   
  }


}
