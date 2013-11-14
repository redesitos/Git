$(document).ready(function() {
    
    $('#btnGuardar').click(function () {

        //Si el formulario esta validado, entonces...
        if($('#frmConsultar').validationEngine('validate')){            
            actualizar();
        }  

    });
    
    $('#btnConsultar').click(function () {
        if($('#codigo').val()!= ""){ 
            consultar();
        } 
        

    });
    
});

function consultar(){
    //Obtenemos los datos en variables
    var codigo = $("#codigo").val();
    var dataString = "codigo="+codigo;
    //alert("datos: "+dataString);
    
    //Mandamos valores con AJAX
    $.ajax({
        async: true,
        dataType: "html",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: url+"/estudiante/consultar",
        data: dataString,
        beforeSend: function(data){
   
        },
        success: function(requestData){
            //alert("Servidor respondio: "+requestData);
            if(requestData == 1){
                //limpiar();
                alert("El Estudiante que desea consultar, no existe");
            }					
            else{
                
                var estudiante =  procesarRespuesta(requestData);  
                
                $("#nombres").attr("value",estudiante.nombres);
                $("#fechaIncripcion ").attr("value",estudiante.fechaInscripcion);
                $("#valorMatricula").attr("value",estudiante.matriculaValor);
                $("#personasCargo").attr("value",estudiante.personasCargo);
                $("#descripcion").attr("value",estudiante.descripcion);
                $("#asignaturasPerdidas").attr("value",estudiante.nroAsigPerdidas); 
                $("#btnGuardar").removeAttr('disabled');
                $("#btnConsultar").attr("disabled",'disabled');
                $("#codigo").attr("disabled",'disabled');
                
                
                $("#personasCargo").click(function(){                
                    if($("#personasCargo").val()==='0'){
                        $("#descripcion").attr("disabled",'disabled');
                        $("#descripcion").attr("value",'Ninguna');
                    }
                    else if($("#personasCargo").val()==='1'){
                        $("#descripcion").removeAttr('disabled');
                        $("#descripcion").attr("value",estudiante.descripcion);
                        $("#descripcion").attr("class",'validate[required]');
                    }
                    
                    return false;
                });
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

function actualizar(){
    //alert("Creando estudiante");
    //Obtenemos los datos en variables
    var codigo = $("#codigo").val();
    var nombres = $("#nombres").val();
    var fecha = $("#fechaIncripcion").val();
    var matricula = $("#valorMatricula").val();       
    var personasCargo = $("#personasCargo").val();
    var descripcion = $("#descripcion").val();
    var asignaturasPerdidas = $("#asignaturasPerdidas").val();
        
    //Concatenamos todos los datos en una sola variable y los separamos por el simbolo "&"
    var dataString = "codigo="+codigo+"&nombres="+nombres+"&fecha="+fecha+"&matricula="+matricula+"&personasCargo="+personasCargo
    +"&descripcion="+descripcion+"&asignaturasPerdidas="+asignaturasPerdidas;
        
    //alert("datos: "+dataString);
    
    //Enviamos valores con AJAX
    $.ajax({
        async: true,
        dataType: "html",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",            
        url: url+"/estudiante/actualizar",//Enviamos datos por el metodo POST a la accion "consultar" del controlador "Estudiante"
        data: dataString,
        beforeSend: function(data){ 
        },
        success: function(requestData){
            //alert("Servidor respondio: "+requestData);
            if(requestData == 1){                
                alert("La operación se ha realizado con éxito.");     
                location.reload();
            }
        },
        error: function(requestData, strError, strTipoError){
            alert("Error "+strTipoError+": " + strError);
        },
        complete: function (requestData, exito){}
    });   

}