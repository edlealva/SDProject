import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { APIservice } from '../../../tky/servicesTKY/services';

@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.scss']
})
export class CombosComponent implements OnInit {
  FormCombo: FormGroup;
  FormComboUpdate: FormGroup;
  FormComboDelete: FormGroup;
  strnombre = '';
  constructor(private _formBuilder: FormBuilder, private _service: APIservice) { 
    this.FormCombo = this._formBuilder.group({
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      
    });

    this.FormComboUpdate = this._formBuilder.group({
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
    });

    this.FormComboDelete = this._formBuilder.group({
      descripcion: ['', Validators.required],
     
    });

  }

  ngOnInit() {
  }
  crearcombo(): void{
    if (this.FormCombo.valid){
      const data = {
        Descripcion: this.FormCombo.get('descripcion').value,
        Precio: parseFloat(this.FormCombo.get('precio').value)
      };
      console.log(data);
      this._service.postCombo(data)
      .subscribe(
        res => {
          console.log(res);
          alert('El combo ha sido creado');
        },
        err => {console.log(err);
        }
        );
      } else{
        alert('Por favor llena todos los campos');
      }
    
  }
  
  actualizarcombo(): void {
    console.log("actualizar");
    if (this.FormComboUpdate.valid){
      const data = {
        Descripcion: this.FormComboUpdate.get('descripcion').value,
        Precio: this.FormComboUpdate.get('precio').value
      };
      console.log(data);
      this._service.putCombo(data.Descripcion.toString(), data)
      .subscribe(
        res => {
          console.log(res);
          alert('El combo ha sido actualizado');
        },
        err => {console.log(err);
        }
        );
      } else{
        alert('Por favor llena todos los campos');
      }
    

  } 

  eliminarcombo(): void {
    console.log("eliminar");
    if (this.FormComboDelete.valid){
      this.strnombre = this.FormComboDelete.get('descripcion').value;
      this._service.deleteCombo(this.strnombre)
      .subscribe(
        res => {
          console.log(res);
          alert('El combo ha sido eliminado');
        },
        err => {console.log(err);
        }
        );
      } else{
        alert('Por favor llena todos los campos');
      }
  }
}
