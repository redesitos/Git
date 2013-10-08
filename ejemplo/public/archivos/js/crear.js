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
        

    });
    
    
});

function crearEstudiante(){
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
        url: url+"/estudiante/crear",//Enviamos datos por el metodo POST a la accion "crear" del controlador "Estudiante"
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
                alert("El Estudiante ya está registrado.");
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
        url: url+"/estudiante/crear",
        data: dataString,
        beforeSend: function(data){
            
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