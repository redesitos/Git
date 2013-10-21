<?php

class EstudianteController extends Zend_Controller_Action {

    public function init() {
//En esta linea de código enviamos a las vistas la base de la URL
//Para este Ejemplo quedaria http://localhost/ejemplo/public
//El objeto view crea una interfaz entre el controlador y la vista.
//La variable baseUrl es la que contendra la direccion del proyecto, esta variable 
//la creamos nosotros mismos. 
//$this->_request->getBaseUrl(); es el encargado de capturar la URL base y como vemos en la linea
//es asignada a la variable baseUrl y esta a su vez es pasada a todas las vistas de este controlador.


        $this->view->baseUrl = $this->_request->getBaseUrl();
    }

    public function preDispatch() {
        $options = array(
            'layout' => 'usuario',
        );
        Zend_Layout::startMvc($options);
    }

    public function indexAction() {
// action body
    }

    public function crearAction() {

        if ($this->getRequest()->isXmlHttpRequest()) {//Si es una petición AJAX, Entonces.... 
            $this->_helper->viewRenderer->setNoRender(); //Deshabilita la vista para que solo los echo puedan retornar.
            $this->_helper->layout->disableLayout();//Deshabilita el Layout para que solo los echo puedan retornar.
            
            $estudiantes = new Application_Model_DbTable_Estudiantes(); //Instanciamos el Modelo Estudiantes
//Capturamos el valor del código de la variable "&codigo" enviado por AJAX, con el método _request->getPost()
            $codigo = $this->_request->getPost("codigo");

            if ($this->_request->getPost("aux") == 'consultar') {// Si la peticion es de solo consultar si existe el codigo, entonces... 
                if ($estudiantes->Existe($codigo)) {//Sie el estudiante existe... Entonces...
                    echo 1; //Retorne Uno //Retorne Cero a peticion AJAX                
                } else {// Si NO existe.. Entonces...
//Retorne Cero a peticion AJAX 
                    echo 0;
                }
            } else {//Si NO, entonces se procede a crear el estudiante
                $nombres = $this->_request->getPost("nombres");
                $fecha = $this->_request->getPost("fecha");
                $fecha = $this->fechaMysql($fecha); //Convertimos la fecha entrante, en el formato de MySQL AAAA-MM-DD
                $personasCargo = $this->_request->getPost("personasCargo");
                $descripcion = $this->_request->getPost("descripcion");
                $matricula = $this->_request->getPost("matricula");
                $asignaturasPerdidas = $this->_request->getPost("asignaturasPerdidas");

                if ($estudiantes->Existe($codigo)) {//Si el estudiante existe... Entonces...
                    echo 0; //Retorne cero                
                } else {// Si NO existe.. Entonces...
//Insertamos en la DB
                    $estudiantes->crear($codigo, $nombres, $fecha, $matricula, $personasCargo, $descripcion, $asignaturasPerdidas);
                    echo 1;
                }
            }
        }
    }

    public function consultarAction() {
        if ($this->getRequest()->isXmlHttpRequest()) {
            $this->_helper->viewRenderer->setNoRender();
            $this->_helper->layout->disableLayout();

            $estudiantes = new Application_Model_DbTable_Estudiantes();

            $codigo = $this->_request->getPost("codigo");
            if ($estudiantes->Existe($codigo)) {
                $consulta = $estudiantes->consultar($codigo);
                $consulta->fechaInscripcion = $this->fechaMysql($consulta->fechaInscripcion);
                $json = Zend_Json::encode($consulta); //Codificamos consulta en formato JSON {[llave:valor]}
            } else {
                $json = 1;
            }
            echo $json;
        }
    }

    public function actualizarAction() {
        if ($this->getRequest()->isXmlHttpRequest()) {
            $this->_helper->viewRenderer->setNoRender();
            $this->_helper->layout->disableLayout();

            $estudiantes = new Application_Model_DbTable_Estudiantes();

            $codigo = $this->_request->getPost("codigo");
            $nombres = $this->_request->getPost("nombres");
            $fecha = $this->_request->getPost("fecha");
            $fecha = $this->fechaMysql($fecha);
            $personasCargo = $this->_request->getPost("personasCargo");
            $descripcion = $this->_request->getPost("descripcion");
            $matricula = $this->_request->getPost("matricula");
            $asignaturasPerdidas = $this->_request->getPost("asignaturasPerdidas");
            $estudiantes->actualizar($codigo, $nombres, $fecha, $matricula, $personasCargo, $descripcion, $asignaturasPerdidas);
            echo 1;
        }
    }

    public function eliminarAction() {
        $estudiantes = new Application_Model_DbTable_Estudiantes();
        $this->view->consulta = $estudiantes->consulta_general();
        if ($this->getRequest()->isXmlHttpRequest()) {
            $this->_helper->viewRenderer->setNoRender();
            $this->_helper->layout->disableLayout();

            $codigo = $this->_request->getPost("codigo");
            $estudiantes = new Application_Model_DbTable_Estudiantes();
            $estudiantes->eliminar($codigo);

            if ($estudiantes->Existe($codigo)) {
                echo 0;
            } else {
                echo 1;
            }
        }
    }

//Función para converir fechas en formato MySQL. AAAA-MM-DD
    public function fechaMysql($fecha) {
        $arr = preg_split('/\/|-/', $fecha);
        return "$arr[2]-$arr[1]-$arr[0]";
    }

}

