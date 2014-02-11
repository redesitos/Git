$(document).ready(function () {
    llenarSelects(1);//llenar paises
//    setTimeout("cargapais()",10000);
    //llenarSelects(3);//llenar tipo doc
    llenarSelects(4);//Llenar Localidades
    
});
//    function  cargapais(){
//        document.getElementById("selPais").value=52;
//    }
function llenarSelects(caso){
     switch (caso) {
     case 1: // Cargar Paises
        $.ajax({
        async: true,
        dataType: "html",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: url+"/generales/cargarpaises",
        beforeSend: function(){
            
        },
        success: function(requestData){
            //alert("Servidor respondio: "+requestData);
            var paises=procesarRespuesta(requestData);
            
            cargaArrayPaises(paises);
        },
        error: function(requestData, strError, strTipoError){
            alert("Error "+strTipoError+": " + strError);
        },
        complete: function (requestData, exito){}
        });        
     break;
     
     case 2: // Cargar Departamentos
         var idpais= document.getElementById('selPais').value;
         var dataString = "idpais = " + 52+"&codigo= "+idpais;
        $.ajax({
        async: true,
        dataType: "html",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: url+"/generales/cargardepartamentos",
        data:dataString,
        beforeSend: function(data){
            
        },
        success: function(requestData){
            var departamentos=procesarRespuesta(requestData);
            cargaArrayDepartamentos(departamentos);
            
        },
        error: function(requestData, strError, strTipoError){
            alert("Error "+strTipoError+": " + strError);
        },
        complete: function (requestData, exito){}
        });        
     break;
     
     case 3: // Cargar Municipios
         var idDep=document.getElementById('selDepartamento').value;
         var codigoDepartamento=idDep;
         var dataString="idDepartamento="+idDep+"&codigoDepartamento="+codigoDepartamento;
        $.ajax({
        async: true,
        dataType: "html",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: url+"/generales/cargarmunicipios",
        data: dataString,
        beforeSend: function(data){
            
        },
        success: function(requestData){
            //alert("Servidor respondio: "+requestData);
            var municipios=procesarRespuesta(requestData);
            
            cargaArrayMunicipios(municipios);
        },
        error: function(requestData, strError, strTipoError){
            alert("Error "+strTipoError+": " + strError);
        },
        complete: function (requestData, exito){}
        });        
     break;
      case 4: // Cargar Localidades
        $.ajax({
        async: true,
        dataType: "html",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: url+"/generales/cargarlocalidades",
        data: dataString,
        beforeSend: function(data){
            
        },
        success: function(requestData){
            //alert("Servidor respondio: "+requestData);
            var Localidades=procesarRespuesta(requestData);
            
            cargaArrayLocalidades(Localidades);
        },
        error: function(requestData, strError, strTipoError){
            alert("Error "+strTipoError+": " + strError);
        },
        complete: function (requestData, exito){}
        });        
     break;
     }
}

function procesarRespuesta(ajaxResponse)
{ 
    // observa que aquí asumimos que el resultado es un objeto 
    // serializado en JSON, razón por la cual tomamos este dato
    // y lo procesamos para recuperar un objeto que podamos
    // manejar fácilmente
    if (typeof ajaxResponse == "string"){
        ajaxResponse = $.parseJSON(ajaxResponse); 
    //alert("entro");
    }               
    return ajaxResponse;
}


function cargaArrayPaises(arrayPaises){
    
    var arraySelectPaises=new Array();
    
    for(i=0;i<arrayPaises.length;i++){
        arraySelectPaises.push(arrayPaises[i].codigo_pais);
        arraySelectPaises.push(arrayPaises[i].nombre_pais);
    }
   llenarSelect(arraySelectPaises,document.getElementById('selPais'));
     
}

function cargaArrayMunicipios(arrayMunicipios){
    
    var arraySelectMunicipios=new Array();
    
    for(i=0;i<arrayMunicipios.length;i++){
        arraySelectMunicipios.push(arrayMunicipios[i].codigo_municipio);
        arraySelectMunicipios.push(arrayMunicipios[i].nombre_municipio);
    }
   llenarSelect(arraySelectMunicipios,document.getElementById('selMunicipio')); 
}

function cargaArrayDepartamentos(arrayDepartamentos){
    
    var arraySelectDepartamentos=new Array();
    
    for(i=0;i<arrayDepartamentos.length;i++){
        arraySelectDepartamentos.push(arrayDepartamentos[i]);
        arraySelectDepartamentos.push(arrayDepartamentos[i].nombre_departamento);
    }
   llenarSelect(arraySelectDepartamentos,document.getElementById('selDepartamento')); 
}

function cargaArrayLocalidades(arrayLocalidades){
    
    var arraySelectLocalidades=new Array();
    
    for(i=0;i<arrayLocalidades.length;i++){
        arraySelectLocalidades.push(arrayLocalidades[i].codigo_localidad);
        arraySelectLocalidades.push(arrayLocalidades[i].nombre_localidad);
    }
   llenarSelect(arraySelectLocalidades,document.getElementById('selLocalidad')); 
}

function limpiarSelect(combo) {
    try {
        while (combo.length > 0) {
            combo.remove(combo.length - 1);
        }
    } catch (elError) {
    }
    combo.options[0] = new Option('-- SELECCIONE --', '-1');
}

function llenarSelect(array, combo) {
    try {
        limpiarSelect(combo);
        for (var i = 0; i < array.length; i += 2) {
            opt = new Option(array[i + 1], array[i]);
        combo.options[combo.length] =  opt;
        }
        
    } catch (elError) {
        //muestraVentana(elError);
    }
}

function  guardaBenficiario(){
    var tipovinculacion=document.getElementById("selTipoVinculacion").value;
    var codigo=document.getElementById("txtCodigo").value;
    var nombres=document.getElementById("txtNombres").value;
    var apellidos=document.getElementById("txtApellidos").value;
    var tipoDoc=document.getElementById("selTipoDocumento").value;
    var documento= document.getElementById("txtDocumento").value;
    var fechaNacimiento=document.getElementById("txtFechaNacimiento").value;
    var tipoBenficiario=document.getElementById("selTipoBeneficiario").value;
    var telFijo =document.getElementById("txtFijo").value;
    var telCelular=document.getElementById("txtCelular").value;
    var emailPersonal=document.getElementById("txtEmailPersonal").value;
    var emailInstitucional=document.getElementById("txtEmailInstitucional").value;
    var tipoSangre=document.getElementById("selTipo").value;
    var RH=document.getElementById("selRH").value;
    var regimenSalud=document.getElementById("txtRegimenSalud").value;
    var direccion=document.getElementById("txtDireccion").value;
    var barrio=document.getElementById("txtBarrio").value;
    var estrato=document.getElementById("selEstrato").value;
    var localidad=document.getElementById("selLocalidad").value;
    var pais=document.getElementById("selPais").value;
    var departamento=document.getElementById("selDepartamento").value;
    var municipio=document.getElementById("selMunicipio").value;
    var nombreContacto=document.getElementById("txtNombreContacto").value;
    var telefonoContacto=document.getElementById("txtTelfonoContacto").value;
    
    var sangre=tipoSangre+""+RH;
    
    var dataString= "tipovinculacion="+tipovinculacion+"&codigo="+codigo+"&nombres="+nombres+"&apellidos="+apellidos+"&tipoDoc="+tipoDoc+"&documento="+documento+"&fechaNacimiento="+fechaNacimiento+"&tipoBenficiario="+tipoBenficiario+"&telFijo="+telFijo+"&telCelular="+telCelular+"&emailPersonal="+emailPersonal+"&emailInstitucional="+emailInstitucional+"&sangre="+sangre+"&regimenSalud="+regimenSalud+"&direccion="+direccion+"&barrio="+barrio+"&estrato="+estrato+"&localidad="+localidad+"&pais="+pais+"&departamento="+departamento+"&municipio="+municipio+"&nombreContacto="+nombreContacto+"&telefonoContacto="+telefonoContacto;
    
    
    $.ajax({
        async: true,
        dataType: "html",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: url+"/beneficiarios/guardabeneficiario",
        data: dataString,
        beforeSend: function(data){
            
        },
        success: function(requestData){
            //alert("Servidor respondio: "+requestData);
            var Localidades=procesarRespuesta(requestData);
            
            cargaArrayLocalidades(Localidades);
        },
        error: function(requestData, strError, strTipoError){
            alert("Error "+strTipoError+": " + strError);
        },
        complete: function (requestData, exito){}
        });        
}
