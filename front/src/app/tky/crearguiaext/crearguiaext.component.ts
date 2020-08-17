import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {APIservice} from './../servicesTKY/services';
import * as XLSX from 'xlsx';
import { ObjectUnsubscribedError } from 'rxjs';



// tslint:disable-next-line: class-name


@Component({
  selector: 'app-crearguiaext',
  templateUrl: './crearguiaext.component.html',
  styleUrls: ['./crearguiaext.component.scss']
})
export class CrearguiaextComponent implements OnInit {

  FormGuia: FormGroup;
  
  arrayBuffer: any;
  file: File;
   listexcel = {
     lista: []
   };
  
  
  
  constructor(private _formBuilder: FormBuilder, private _service: APIservice) { 
    this.FormGuia = this._formBuilder.group({
      numguia: ['', [ Validators.required, Validators.pattern('^[0-9]*$')]],
      ecode: ['', Validators.required],
      dni: ['', [ Validators.required, Validators.pattern('^[0-9]*$')]],
      consigna: ['', Validators.required],
      piezas: ['', [ Validators.required, Validators.pattern('^[0-9]*$')]],
      peso: ['', [ Validators.required, Validators.pattern('^[0-9]*$')]],
      direccion: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
   
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    
    

  }
  
  
   obtenerdatos(): void {
    if (this.FormGuia.valid) {
    //  console.log(this.FormGuia.value);
      const campo = {
        guia : this.FormGuia.get('numguia').value,
        ecode: this.FormGuia.get('ecode').value,
        dniConsignee: this.FormGuia.get('dni').value,
        consignee: this.FormGuia.get('consigna').value,
        pieces: this.FormGuia.get('piezas').value,
        weight: this.FormGuia.get('peso').value,
        address: this.FormGuia.get('direccion').value,
        contain: this.FormGuia.get('descripcion').value
      };
      const listamasiva = {
        lista: [campo]
      };
     
      this._service.getMasivaEshopex(listamasiva)
      .subscribe(
        res => {
             console.log(res);  
             alert('Los datos han sido ingresados');
        },
        err => {console.log(err);
      }
      ); 
      
         
    }
    else{
      alert('llena todos los campos');
    }
  }


// tslint:disable-next-line: typedef
incomingfile(event) 
  {
  this.file = event.target.files[0]; 
  }

 // tslint:disable-next-line: typedef
 Upload() {
     
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            // tslint:disable-next-line: prefer-const
            let data = new Uint8Array(this.arrayBuffer);
            const arr = new Array();
            // tslint:disable-next-line: triple-equals
            for (let i = 0; i != data.length; ++i) { arr[i] = String.fromCharCode(data[i]); }
            const bstr = arr.join('');
            const workbook = XLSX.read(bstr, {type: 'binary'});
            // tslint:disable-next-line: variable-name
            const first_sheet_name = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[first_sheet_name];
            const json = XLSX.utils.sheet_to_json(worksheet, {raw: false});
            let i=0;
            //console.log(json);
            // tslint:disable-next-line: only-arrow-functions
            Object.keys(json).forEach((key) => {
              if (!isNaN(json[key]['__EMPTY'])){
               // console.table('Key : ' + key + ', Value : ' + json[key]);
                console.table(json[key]['__EMPTY']);
                let campo = {
                  guia : Number( json[key]['__EMPTY']),
                    ecode: json[key]['__EMPTY_2'],
                    dniConsignee: Number(json[key]['__EMPTY_3']),
                    consignee: json[key]['__EMPTY_4'],
                    pieces: Number(json[key]['__EMPTY_6']),
                    weight: parseInt(json[key]['__EMPTY_7'], 10),
                    address: json[key]['__EMPTY_5'],
                    contain: json[key]['__EMPTY_9']

                };
                console.log(campo);
                this.listexcel.lista.push(campo);
              }

             
            });
           
          //   console.log(this.listexcel);
            this._service.getMasivaEshopex(this.listexcel)
            .subscribe(
              res => {
                   console.log(res); 
                   alert("Las guias han sido creadas correctamente");
                   
                   
             },
              err => {console.log(err);
            }
          ); 
            
        };
      
      
      fileReader.readAsArrayBuffer(this.file);
     
      
         
    }
}

