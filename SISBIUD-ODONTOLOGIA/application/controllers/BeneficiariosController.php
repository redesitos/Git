<?php

class BeneficiariosController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
        $this->view->baseUrl = $this->_request->getBaseUrl();
    }

    public function indexAction()
    {
        
    }

    public function beneficiariosAction()
    {
       
    }
    public function guardabeneficiarioAction(){
        if ($this->getRequest()->isXmlHttpRequest()) {
            $this->_helper->viewRenderer->setNoRender();
            $this->_helper->layout->disableLayout();

            $beneficiario = new Application_Model_DbTable_Beneficiarios();
            $tipovinculacion = $this->_request->getPost("tipovinculacion");
            $codigo = $this->_request->getPost("codigo");
            $nombres = $this->_request->getPost("nombres");
            $apellidos = $this->_request->getPost("apellidos");
            $tipoDoc = $this->_request->getPost("tipoDoc");
            $documento = $this->_request->getPost("documento");
            $fechaNacimiento = $this->_request->getPost("fechaNacimiento");
            $tipoBenficiario = $this->_request->getPost("tipoBenficiario");
            $telFijo = $this->_request->getPost("telFijo");
            $telCelular = $this->_request->getPost("telCelular");
            $emailPersonal = $this->_request->getPost("emailPersonal");
            $emailInstitucional = $this->_request->getPost("emailInstitucional");
            $sangre = $this->_request->getPost("sangre");
            $regimenSalud = $this->_request->getPost("regimenSalud");
            $direccion = $this->_request->getPost("direccion");
            $barrio = $this->_request->getPost("barrio");
            $estrato = $this->_request->getPost("estrato");
            $localidad = $this->_request->getPost("localidad");
            $pais = $this->_request->getPost("pais");
            $departamento = $this->_request->getPost("departamento");
            $municipio = $this->_request->getPost("departamento");
            $nombreContacto = $this->_request->getPost("nombreContacto");
            $telefonoContacto = $this->_request->getPost("telefonoContacto");
            
            if($beneficiario->Existe($codigo)){
              $json=-2;  
            }else{
            $consulta = $beneficiario->guardaBeneficiario($tipovinculacion,$codigo,$nombres,$apellidos,$tipoDoc,$documento,$fechaNacimiento,$tipoBenficiario,$telFijo,$telCelular,$emailPersonal,$emailInstitucional,$sangre,$regimenSalud,$direccion,$barrio,$estrato,$localidad,$pais,$departamento,$municipio,$nombreContacto,$telefonoContacto);
            $json=1;
            }

            echo $json;
        }
    }

}



