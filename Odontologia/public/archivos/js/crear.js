$(document).ready(function() {
    
    $('#btnGuardar').click(function () {

        //Si el formulario esta validado, entonces...
        if($('#frmCrear').validationEngine('validate')){            
            crearEstudiante();   
        }  

    });
    $('#btnConsultarEstudiante').click(function () {
        if($('#codigo').val()!= ""){            
            consultarExiste();
        } 
        else{
            $("#msjCodigo").html("<label style='color:green;'>* ingrese un Código.</label>");
        }
        

    });
    
    $('#dp3').datepicker();
    
});

function crearEstudiante(){
    
    //Obtenemos los datos en variables
    var codigo = $("#codigo").val();
    var hora = $("#hora").val();
    var fecha = $("#fecha").val();

//    //Concatenamos todos los datos en una sola variable y los separamos por el simbolo "&"
    var dataString = "codigo="+codigo+"&hora="+hora+"&fecha="+fecha;

    //Enviamos valores con AJAX

    
    $.ajax({
        async: true,
        dataType: "html",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",            
        url: url+"/citas/asignar",//Enviamos datos por el metodo POST a la accion "asignar" del controlador "citas"
        data: dataString,
        beforeSend: function(data){
            $("#msjconfirmacion").html("<label style='color:green;'>* Enviando datos...</label>"); 
        },
        success: function(requestData){
            //alert("Servidor respondio: "+requestData);
            if(requestData == 1){
                $("#msjconfirmacion").html("<label style='color:green;'>* Cita Programada...</label>");
                alert("La operación se ha realizado con éxito.");     
                window.location = url+"/citas/index";
                
            }
            else if(requestData==0){
                alert("El Estudiante ya reservo cita.");
                location.reload();
            }
        },
        error: function(requestData, strError, strTipoError){
            alert("Error "+strTipoError+": " + strError);
        },
        complete: function (requestData, exito){}
    });   

}

function consultarExiste() {
    //Obtenemos los datos en variables
    var codigo = $("#codigo").val();
    var aux="consultar";
    var dataString = "codigo="+codigo+"&aux="+aux;
    //alert("datos: "+dataString);
    
    //Mandamos valores con AJAX
    $.ajax({
        async: true,
        dataType: "html",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: url+"/citas/asignar",
        data: dataString,
        beforeSend: function(data){
            
        },
        success: function(requestData){
            //alert("Servidor respondio: "+requestData);
            if(requestData == 1){
                //Si el servidor respondio 1:
                //alert("El Estudiante ya se encuantra registrado");
                $("#msjCodigo").html("<label style='color:red;'>* El Estudiante ya tiene una cita programada.</label>");
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

