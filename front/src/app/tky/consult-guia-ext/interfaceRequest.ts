export interface request_mapeo{
    proveedor:String
    tipoServicio:String
    guia_externa:String
    cod:Boolean
    tipocobro:Number
    costoflete:Number
    costoproducto:Number
    id:String
    codigoParroquia_remitente:Number
    idservicio:String
    cantidadservicio:String
    carga:req_carga
    destinatario:req_dest
}

export interface req_dest{
    identificacion:String
    ciudad:String
    codigo_postal:String 
    direccion:String
    celular:String
    numeroCasa:String
    referencia:String
    tipoIden:String

}
export interface req_carga{
    valorDeclarado:Number
    noPiezas:Number
    peso:Number
    descripcion:Number
    tamanio:Number
    contrato:Number
    producto:Number
    valorAsegurado:Number
    localidad:Number
    adjuntos:Boolean
    valorCobro:Number
    observaciones:String
}