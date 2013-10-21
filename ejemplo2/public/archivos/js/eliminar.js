$(document).ready(function() {
    

    
    });
    
function eliminar(codigo){
    
    if (confirm("Esta seguro que desea eliminar  al estudiante "+codigo)) {
        // Respuesta afirmativa...
        eliminarEstudiante(codigo);
    }
    else{
        alert("Operación Cancelada!!!");
    }
}    
    
    

function eliminarEstudiante(codigo){
    var codigo = codigo;
    //alert("Eliminando "+codigo);
    
    var dataString = "codigo="+codigo;        
    //alert("datos: "+dataString);
    
    //Enviamos valores con AJAX
    $.ajax({
        async: true,
        dataType: "html",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",            
        url: url+"/estudiante/eliminar",//Enviamos datos por el metodo POST a la accion "crear" del controlador "Estudiante"
        data: dataString,
        beforeSend: function(data){
            $("#msjconfirmacion").html("<label style='color:green;'>* Enviando datos...</label>"); 
        },
        success: function(requestData){
            //alert("Servidor respondio: "+requestData);
            if(requestData == 1){                
                alert("La operación se ha realizado con éxito.");     
                location.reload();
            }
            else if(requestData==0){
                alert("No se pudo realizar la operación solicitada");
                location.reload();
            }
        },
        error: function(requestData, strError, strTipoError){
            alert("Error "+strTipoError+": " + strError);
        },
        complete: function (requestData, exito){}
    });   

    
    
    
}


