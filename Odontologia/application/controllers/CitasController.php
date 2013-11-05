<?php

class CitasController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
        //En esta linea de código enviamos a las vistas la base de la URL
        //Para este Ejemplo quedaria http://localhost/oontologia/public
        //El objeto view crea una interfaz entre el controlador y la vista.
        //La variable baseUrl es la que contendra la direccion del proyecto, esta variable 
        //la creamos nosotros mismos. 
        //$this->_request->getBaseUrl(); es el encargado de capturar la URL base y como vemos en la linea
        //es asignada a la variable baseUrl y esta a su vez es pasada a todas las vistas de este controlador.


        $this->view->baseUrl = $this->_request->getBaseUrl();
        
    }

    public function indexAction()
    {
        // action body
    }

    public function asignarAction()
    {
        if ($this->getRequest()->isXmlHttpRequest()) {//Si es una peticiÃ³n AJAX, Entonces.... 
            $this->_helper->viewRenderer->setNoRender(); //Deshabilita la vista para que solo los echo puedan retornar.
            $this->_helper->layout->disableLayout();//Deshabilita el Layout para que solo los echo puedan retornar.
            
              // action body
            $asignar=new Application_Model_DbTable_ProgCita();
            $codigo = $this->_request->getPost("codigo");
            $asignar->crear($codigo);
            //Capturamos el valor del cÃ³digo de la variable "&codigo" enviado por AJAX, con el mÃ©todo _request->getPost()
        }
        echo 0;
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







