import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { APIservice } from '../../../tky/servicesTKY/services';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.scss']
})
export class CrearCategoriaComponent implements OnInit {

  FormCategoria: FormGroup;
  FormCategoriaUpdate: FormGroup;
  FormCategoriaDelete: FormGroup;
  strnombre='';
  constructor(private _formBuilder: FormBuilder, private _service: APIservice) {

    this.FormCategoria = this._formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      
    });

    this.FormCategoriaUpdate = this._formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    });

    this.FormCategoriaDelete = this._formBuilder.group({
      nombre: ['', Validators.required],
     
    });


   }

  ngOnInit() {
  }

  crearcategoria(): void{
    if (this.FormCategoria.valid){
      const data = {
        Nombre: this.FormCategoria.get('nombre').value,
        Descripcion: this.FormCategoria.get('descripcion').value
      };
      console.log(data);
      this._service.postCategoria(data)
      .subscribe(
        res => {
          console.log(res);
          alert('La categoria ha sido creada');
        },
        err => {console.log(err);
        }
        );
      } else{
        alert('Por favor llena todos los campos');
      }
    
  }
  
  actualizarcategoria(): void {
    console.log("actualizar");
    if (this.FormCategoriaUpdate.valid){
      const data = {
        Nombre: this.FormCategoriaUpdate.get('nombre').value,
        Descripcion: this.FormCategoriaUpdate.get('descripcion').value
      };
      console.log(data.Nombre);
      this._service.putCategoria(data.Nombre.toString(), data)
      .subscribe(
        res => {
          console.log(res);
          alert('La categoria ha sido actualizada');
        },
        err => {console.log(err);
        }
        );
      } else{
        alert('Por favor llena todos los campos');
      }
    

  }

  eliminarcategoria(): void {
    console.log("eliminar");
    if (this.FormCategoriaDelete.valid){
      this.strnombre = this.FormCategoriaDelete.get('nombre').value;
      this._service.deleteCategoria(this.strnombre)
      .subscribe(
        res => {
          console.log(res);
          alert('La categoria ha sido eliminada');
        },
        err => {console.log(err);
        }
        );
      } else{
        alert('Por favor llena todos los campos');
      }
  }
}
