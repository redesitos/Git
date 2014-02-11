//funcion InformacionGeneral


function InformacionGeneral() {
    if ($('#frmInfoGeneral').validationEngine('validate'))
        ;
    var txtPrimerApellido = document.getElementById("txtPrimerApellido").value;
    var txtSegundoApellido = document.getElementById('txtSegundoApellido').value;
    var txtNombre = document.getElementById('txtNombre').value;
    var txtDocId = document.getElementById('txtDocId').value;
    var txtFechaNacimiento = document.getElementById('txtFechaNacimiento').value;
    var txtCodigo = document.getElementById('txtCodigo').value;
    var txtSemestre = document.getElementById('txtSemestre').value;
    var selFacultad = document.getElementById('selFacultad').value;
    var selProyectoCurricular = document.getElementById('selProyectoCurricular').value;
    var txtDireccion = document.getElementById('txtDireccion').value;
    var txtTelefono = document.getElementById('txtTelefono').value;
    var selEstrato = document.getElementById('selEstrato').value;
    var txtAfiliacion = document.getElementById('txtAfiliacion').value;
    var txtEmergencia = document.getElementById('txtEmergencia').value;
    var txtTelEmergencia = document.getElementById('txtTelEmergencia').value;
    var txaDescripcion = document.getElementById('txaDescripcion').value;
    alert("Datos almacenado satisfactoriamente");
    //    $("#msjconfirmacion").html("<label style='color:green;'>Puede continuar</label>");
}//fin de funcion informacion general


//funcion anamnesis
function Anamnesis() {
    if ($('#frmAnamnesis').validationEngine('validate'))
        ;
    var selTratamientoMedico = document.getElementById("selTratamientoMedico").value;
    var selIngestionMedicamentos = document.getElementById('selIngestionMedicamentos').value;
    var selReaccionesAlergicas = document.getElementById('selReaccionesAlergicas').value;
    var selHemorragias = document.getElementById('selHemorragias').value;
    var selIrradiaciones = document.getElementById('selIrradiaciones').value;
    var selSinusitis = document.getElementById('selSinusitis').value;
    var selEnfRespiratorias = document.getElementById('selEnfRespiratorias').value;
    var selCardiopatias = document.getElementById('selCardiopatias').value;
    var selDiabetes = document.getElementById('selDiabetes').value;
    var selFiebreReu = document.getElementById('selFiebreReu').value;
    var selHepatitis = document.getElementById('selHepatitis').value;
    var selHipArterial = document.getElementById('selHipArterial').value;
    var selOtrasEnfermedades = document.getElementById('selOtrasEnfermedades').value;
    var selAntFamiliares = document.getElementById('selAntFamiliares').value;
    var txaOtros = document.getElementById('txaOtros').value;
    var selCepillado = document.getElementById('selCepillado').value;
    var selSedaDental = document.getElementById('selSedaDental').value;
    var selEnjuague = document.getElementById('selEnjuague').value;
    var txaObservaciones = document.getElementById('txaObservaciones').value;
    var txtTemperatura = document.getElementById('txtTemperatura').value;
    var txtPulso = document.getElementById('txtPulso').value;
    var txtTenArterial = document.getElementById('txtTenArterial').value;
    var txtRespiracion = document.getElementById('txtRespiracion').value;
    alert("Datos almacenado satisfactoriamente");
//    $("#msjconfirmacion").html("<label style='color:green;'>Puede continuar</label>");
}//fin de funcion Anamnesis


//funcion ExamenFisico
function ExamenFisico() {
    if ($('#frmExaFisico').validationEngine('validate'))
        ;
    var selExTemMandibular = document.getElementById("selExTemMandibular").value;
    var selLabios = document.getElementById('selLabios').value;
    var selLengua = document.getElementById('selLengua').value;
    var selPaladar = document.getElementById('selPaladar').value;
    var selPisoBoca = document.getElementById('selPisoBoca').value;
    var selCarrillo = document.getElementById('selCarrillo').value;
    var selGlanSalivares = document.getElementById('selGlanSalivares').value;
    var selMaxilares = document.getElementById('selMaxilares').value;
    var selSenMaxilares = document.getElementById('selSenMaxilares').value;
    var selMusMasticadores = document.getElementById('selMusMasticadores').value;
    var selNervioso = document.getElementById('selNervioso').value;
    var selVascular = document.getElementById('selVascular').value;
    var selLinfatico = document.getElementById('selLinfatico').value;
    var selNumerarios = document.getElementById('selNumerarios').value;
    var selAbrasion = document.getElementById('selAbrasion').value;
    var selManchas = document.getElementById('selManchas').value;
    var selPatologiaPulpar = document.getElementById('selPatologiaPulpar').value;
    var selPlacaBlanda = document.getElementById('selPlacaBlanda').value;
    var selPlaCalsificada = document.getElementById('selPlaCalsificada').value;
    var selOclusion = document.getElementById('selOclusion').value;
    var txaOtrosFisico = document.getElementById('txaOtrosFisico').value;
    var txaObsFisico = document.getElementById('txaObsFisico').value;
    alert("Datos almacenado satisfactoriamente");
//    $("#msjconfirmacion").html("<label style='color:green;'>Puede continuar</label>");
}//fin de funcion ExamenFisico

//funcion tratamiento ejecutado
function TratamientoEjecutado() {
    if ($('#frmTraEje').validationEngine('validate'))
        ;
    var selPlanTratamiento = document.getElementById("selPlanTratamiento").value;
    var txtFecha = document.getElementById('txtFecha').value;
    var txtHora = document.getElementById('txtHora').value;
    var txtDiente = document.getElementById('txtDiente').value;
    var txtSupDiente = document.getElementById('txtSupDiente').value;
    var txaActividad = document.getElementById('txaActividad').value;
    var txaFirmaPaciente = document.getElementById('txaFirmaPaciente').value;
    alert("Datos almacenado satisfactoriamente");
}
//fin de funcion tratamiento ejecutado

function llenarSelects(caso){
     switch (caso) {
     case 1://Cargar Facultades
        $.ajax({
        async: true,
        dataType: "html",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: url+"/generales/cargar",
        beforeSend: function(){
            
        },
        success: function(requestData){
            //alert("Servidor respondio: "+requestData);
            var facultades=procesarRespuesta(requestData);
            
            cargaArray(facultades);
        },
        error: function(requestData, strError, strTipoError){
            alert("Error "+strTipoError+": " + strError);
        },
        complete: function (requestData, exito){}
        });        
     break;
     case 2://Cargar Proyectos/
        $.ajax({
        async: true,
        dataType: "html",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: url+"/generales/cargarproycurri",
        beforeSend: function(){
            
        },
        success: function(requestData){
            //alert("Servidor respondio: "+requestData);
            var proyectos=procesarRespuesta(requestData);
            
            cargaArrayProyectos(proyectos);
        },
        error: function(requestData, strError, strTipoError){
            alert("Error "+strTipoError+": " + strError);
        },
        complete: function (requestData, exito){}
        });        
     break;
     }
}

function consultarExiste() {
    //Obtenemos los datos en variables
   
    
    $.ajax({
        async: true,
        dataType: "html",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: url+"/Generales/cargarFacultades",
        beforeSend: function(){
            
        },
        success: function(requestData){
            //alert("Servidor respondio: "+requestData);
            if(requestData == 1){
                //Si el servidor respondio 1:
                //alert("El Estudiante ya se encuantra registrado");
                $("#msjCodigo").html("<label style='color:red;'>* El Estudiante ya se encuantra registrado.</label>");
            }					
            else if(requestData == 0){
                //Si el servidor respondio 0:
                $("#msjCodigo").html("<label style='color:green;'>* Código disponible.</label>");                
            }	        
        },
        error: function(requestData, strError, strTipoError){
            alert("Error "+strTipoError+": " + strError);
        },
        complete: function (requestData, exito){}
    });        
      
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

function cargaArray(arrayFacultades){
    
    var arraySelectFacultades=new Array();
    
    for(i=0;i<arrayFacultades.length;i++){
        arraySelectFacultades.push(arrayFacultades[i].codigo_facultad);
        arraySelectFacultades.push(arrayFacultades[i].nombre_facultad);
    }
   llenarSelect(arraySelectFacultades,document.getElementById('selFacultad')); 
}

function cargaArrayProyectos(arrayProyectos){
    
    var arraySelectProyectos=new Array();
    
    for(i=0;i<arrayProyectos.length;i++){
        arraySelectProyectos.push(arrayProyectos[i].codigo_proyecto);
        arraySelectProyectos.push(arrayProyectos[i].nombre_proyecto);
    }
   llenarSelect(arraySelectProyectos,document.getElementById('selProyectoCurricular')); 
}

function cargaArrayPaises(arrayPaises){
    
    var arraySelectPaises=new Array();
    
    for(i=0;i<arrayPaises.length;i++){
        arraySelectPaises.push(arrayPaises[i].codigo_proyecto);
        arraySelectPaises.push(arrayPaises[i].nombre_proyecto);
    }
   llenarSelect(arraySelectPaises,document.getElementById('selPais')); 
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

function llenarSelect(arrayFacultades, combo) {
    try {
        limpiarSelect(combo);
        for (var i = 0; i < arrayFacultades.length; i += 2) {
            opt = new Option(arrayFacultades[i + 1], arrayFacultades[i]);
        combo.options[combo.length] = opt;
        }
        
    } catch (elError) {
        //muestraVentana(elError);
    }
}