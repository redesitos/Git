<?php

class HistoriasClinicasController extends Zend_Controller_Action {

    public function init() {
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

    public function indexAction() {
        // action body
    }

    public function crearAction() {
        // action body
    }

}

