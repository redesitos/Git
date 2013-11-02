<?php

class CitasController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here 
         * pasamos a las vistas $this->view->baseUrl()
         * los datos de la url actual
         * $this->_request->getBaseUrl();
         * 
         * creo que es localhost/odontologia/public
         */
    $this->view->baseUrl=$this->_request->getBaseUrl();
        
    }

    public function indexAction()
    {
        
    }

    public function asignarAction()
    {
        if ($this->getRequest()->isXmlHttpRequest()) {//Si es una petición AJAX, Entonces.... 
            $this->_helper->viewRenderer->setNoRender(); //Deshabilita la vista para que solo los echo puedan retornar.
            $this->_helper->layout->disableLayout();//Deshabilita el Layout para que solo los echo puedan retornar.
            
//            $estudiantes = new Application_Model_DbTable_Estudiantes(); //Instanciamos el Modelo Estudiantes
//Capturamos el valor del código de la variable "&codigo" enviado por AJAX, con el método _request->getPost()
            $codigo = $this->_request->getPost("codigo");

//            if ($this->_request->getPost("aux") == 'consultar') {// Si la peticion es de solo consultar si existe el codigo, entonces... 
//                if ($estudiantes->Existe($codigo)) {//Sie el estudiante existe... Entonces...
//                    echo 1; //Retorne Uno //Retorne Cero a peticion AJAX                
//                } else {// Si NO existe.. Entonces...
////Retorne Cero a peticion AJAX 
//                    echo 0;
//                }
//            } else {//Si NO, entonces se procede a crear el estudiante
//                $nombres = $this->_request->getPost("nombres");
//                $fecha = $this->_request->getPost("fecha");
//                $fecha = $this->fechaMysql($fecha); //Convertimos la fecha entrante, en el formato de MySQL AAAA-MM-DD
//                $personasCargo = $this->_request->getPost("personasCargo");
//                $descripcion = $this->_request->getPost("descripcion");
//                $matricula = $this->_request->getPost("matricula");
//                $asignaturasPerdidas = $this->_request->getPost("asignaturasPerdidas");
//
//                if ($estudiantes->Existe($codigo)) {//Si el estudiante existe... Entonces...
//                    echo 0; //Retorne cero                
//                } else {// Si NO existe.. Entonces...
////Insertamos en la DB
//                    $estudiantes->crear($codigo, $nombres, $fecha, $matricula, $personasCargo, $descripcion, $asignaturasPerdidas);
//                    echo 1;
//                }
//            }
        }
    }

    public function cambiarAction()
    {
        // action body
    }

    public function eliminarAction()
    {
        // action body
    }


}