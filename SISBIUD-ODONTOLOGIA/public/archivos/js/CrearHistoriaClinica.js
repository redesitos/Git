//funcion InformacionGeneral
function InformacionGeneral(){
    if($('#frmInfoGeneral').validationEngine('validate'));
    var txtPrimerApellido=document.getElementById("txtPrimerApellido").value;
    var txtSegundoApellido=document.getElementById('txtSegundoApellido').value;
    var txtNombre=document.getElementById('txtNombre').value;
    var txtDocId=document.getElementById('txtDocId').value;
    var txtFechaNacimiento=document.getElementById('txtFechaNacimiento').value;
    var txtCodigo=document.getElementById('txtCodigo').value;
    var txtSemestre=document.getElementById('txtSemestre').value;
    var selFacultad=document.getElementById('selFacultad').value;
    var selProyectoCurricular=document.getElementById('selProyectoCurricular').value;
    var txtDireccion=document.getElementById('txtDireccion').value;
    var txtTelefono=document.getElementById('txtTelefono').value;
    var selEstrato=document.getElementById('selEstrato').value;
    var txtAfiliacion=document.getElementById('txtAfiliacion').value;
    var txtEmergencia=document.getElementById('txtEmergencia').value;
    var txtTelEmergencia=document.getElementById('txtTelEmergencia').value;
    var txaDescripcion=document.getElementById('txaDescripcion').value;
        
            $("#msjconfirmacion").html("<label style='color:green;'>Puede continuar</label>"); 
                        
              
}//fin de funcion informacion general