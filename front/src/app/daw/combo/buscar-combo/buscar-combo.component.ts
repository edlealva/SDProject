import { Component, OnInit, OnDestroy } from '@angular/core';
import { APIservice } from '../../../tky/servicesTKY/services';

export interface Combo {
  descripcion: string;
  precio: number;
 
}
let listacombos: Combo[] = [
  
  
];
@Component({
  selector: 'app-buscar-combo',
  templateUrl: './buscar-combo.component.html',
  styleUrls: ['./buscar-combo.component.scss']
})
export class BuscarComboComponent implements OnInit {
  searchKey ="";
  displayedColumns: string[] = ['descripcion', 'precio'];
  dataSource: any;
  constructor(private _service: APIservice) { }

  ngOnInit() {
    
  }
  
  onSearchClear(){
    

    this._service.getCombos(this.searchKey)
    .subscribe(
      res => {
        console.log(res);
        listacombos = [];
        console.log(res.Nombre);
        listacombos.push({descripcion: res.Descripcion, precio: res.Precio});
        console.table(listacombos);  
        this.dataSource = listacombos;
        alert('El combo se ha encontrado');
      },
      err => {console.log(err);
      }
      );

      
    
   
  }
  

  // ngOnDestroy(): void {
  //   listacombos = null;
    
  // }

}
