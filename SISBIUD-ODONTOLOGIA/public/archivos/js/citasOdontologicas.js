

function  guardaCita(){
    
    var codigo=document.getElementById("txtCodigo").value;
    var proyCurricular=document.getElementById('selProyectoCurricular').value;
    var numTelefono=document.getElementById('txtNumTelefono').value;
    var nombrePaciente=document.getElementById('txtNombrePaciente').value;
    var fecha=document.getElementById('txtFechaCita').value;
    var horaCita=document.getElementById('txtHoraCita').value;
    
    
    var dataString = "codigo="+codigo+"&proyecto="+proyCurricular+"&telefono="+numTelefono+"&nombrePaciente="+nombrePaciente+"&fecha="+fecha
    +"&horaCita="+horaCita;
    
    $.ajax({
        async: true,
        dataType: "html",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",            
        url: url+"/citas/asignar",//Enviamos datos por el metodo POST a la accion "crear" del controlador "Estudiante"
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

