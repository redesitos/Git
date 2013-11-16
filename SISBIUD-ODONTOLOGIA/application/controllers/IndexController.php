<?php

use \Application_Model_DbTable_AsigCita;

class IndexController extends Zend_Controller_Action {

    public function init() {
        /* Initialize action controller here */
        //En esta linea de código enviamos a las vistas la base de la URL
        //Para este Ejemplo quedaria http://localhost/odontologia/public
        //El objeto view crea una interfaz entre el controlador y la vista.
        //La variable baseUrl es la que contendra la direccion del proyecto, esta variable 
        //la creamos nosotros mismos. 
        //$this->_request->getBaseUrl(); es el encargado de capturar la URL base y como vemos en la linea
        //es asignada a la variable baseUrl y esta a su vez es pasada a todas las vistas de este controlador.


        $this->view->baseUrl = $this->_request->getBaseUrl();
    }

    public function indexAction() {
//        // action body
//        $asignar=new Application_Model_DbTable_AsigCita();
//        $codigo=11;
//        $asignar->crear($codigo);
    }

}

