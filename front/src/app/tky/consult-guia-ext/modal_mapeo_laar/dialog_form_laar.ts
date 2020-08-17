import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { APIservice } from "./../../servicesTKY/services";
import {DialogService} from './../../servicesTKY/dialogService'

@Component({
  selector: "dialog_form_laar",
  templateUrl: "dialog_form_laar.html",
  styleUrls: ["./styles.scss"]
})
export class DialogFormLaar implements OnInit {
  private destForm: FormGroup;
  private cargaForm: FormGroup;
  private generalForm: FormGroup;
  isLinear = false;

  selectCiudad: any;
  selectTamCarg: any;
  selectService:any;
  selectCod='NO';
  selectTC=0;
 
  ciudades: any[];
  servicios: any[];
  tamcarga: string[] = ["GRANDE", "MEDIANO", "PEQUEÑO", "MIXTO"];

  constructor(
    public dialogRef: MatDialogRef<DialogFormLaar>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _service: APIservice,
    private popup:DialogService
  ) {
    console.log(data);
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.destForm = new FormGroup({
      identificacion:  new FormControl({value: this.data.guiaLaar.Identificacion, disabled: true}, Validators.required),
      postal: new FormControl(""),
      celular: new FormControl(""),
      numerocasa: new FormControl(""),
      referencia: new FormControl(""),
      address: new FormControl("", [Validators.required]),
      ciudades_laar: new FormControl("", [Validators.required])
    });
    this.cargaForm = new FormGroup({
      descripcarga: new FormControl("", [Validators.required]),
      tamcargclt: new FormControl("", [Validators.required]),
      pesocarga: new FormControl("", [
        Validators.required,
        Validators.pattern("[+-]?\\d*\\.?\\d+")
      ]),
      piezas: new FormControl(1, [
        Validators.required,
        Validators.pattern("[+-]?\\d*\\.?\\d+")
      ]),
      valdeclarado: new FormControl( 0,Validators.pattern("[+-]?\\d*\\.?\\d+")),
    });
    this.generalForm = new FormGroup({
      servicios_laar: new FormControl("", [Validators.required]),
      guia_externa:new FormControl({value: this.data.guiaLaar.guia_externa, disabled: true}, Validators.required),
      costoflete: new FormControl( 0, [Validators.pattern("[+-]?\\d*\\.?\\d+")]),
      costoproducto: new FormControl(0, [Validators.pattern("[+-]?\\d*\\.?\\d+")]),
      cod:  new FormControl({value:this.selectCod}),
      tipocobro: new FormControl(""),
      
    
    });

    this._service.getCiudadesLaar().subscribe(respCiud => {
      this.ciudades = respCiud;
      this.ciudades.sort((a,b)=>this.sortArray(a,b));
    });
    this._service.getServiciosLaar().subscribe(respServ => {
      this.servicios = respServ;
      this.servicios.sort((a,b)=>this.sortArray(a,b));
    });

  

  }
  public hasError = (op: number, controlName: string, errorName: string) => {
    if (op === 1) {
      return this.destForm.controls[controlName].hasError(errorName);
    }
    if (op === 2) {
      return this.cargaForm.controls[controlName].hasError(errorName);
    }
    return this.generalForm.controls[controlName].hasError(errorName);
  };




  private sortArray = function(a: any, b: any) {
    if (a.nombre < b.nombre) {
      return -1;
    }
    if (a.nomre > b.nombre) {
      return 1;
    }
    return 0;
  }

   crearMapeo(){
   this._service.createMapeo(this.cargarEstructuraMapeo()).subscribe(resp=>{
    //this.dialogRef.close(resp);
    this.popup.openConfirmDialog("exito",resp);


   },err=>{
    //this.dialogRef.close(this.cargarEstructuraMapeo());
    this.popup.openConfirmDialog("log",err);
   })
    
  }

  private cargarEstructuraMapeo():any{
    return {
      proveedor: "Laar",
      tipoServicio: this.selectService,
      guia_externa: this.generalForm.get("guia_externa").value,
      cod: (this.selectCod==="SI"),
      tipocobro: this.selectTC,
      costoflete: Number(this.generalForm.get("costoflete").value),
      costoproducto:Number( this.generalForm.get("costoproducto").value),
      destinatario:{
        identificacion: this.destForm.get("identificacion").value,
        ciudad: this.selectCiudad,
        codigo_postal:this.destForm.get("postal").value,
        direccion: this.destForm.get("address").value,
        celular: this.destForm.get("celular").value,
        numeroCasa: this.destForm.get("numerocasa").value,
        referencia: this.destForm.get("referencia").value,
      },
      carga:{
        valorDeclarado:Number(this.cargaForm.get("valdeclarado").value),
        noPiezas: Number(this.cargaForm.get("piezas").value),
        peso : Number(this.cargaForm.get("pesocarga").value),
        descripcion: this.cargaForm.get("descripcarga").value,
        tamanio: this.selectTamCarg
      }
      

    }
    }
  

}
