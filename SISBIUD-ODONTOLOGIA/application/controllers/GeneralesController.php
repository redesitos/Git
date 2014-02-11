<?php

class GeneralesController extends Zend_Controller_Action {

    public function init() {
        /* Initialize action controller here */
        $this->view->baseUrl = $this->_request->getBaseUrl();
    }

    public function indexAction() {
        // action body
    }

    public function cargarFacultadesAction() {

        if ($this->getRequest()->isXmlHttpRequest()) {
            $this->_helper->viewRenderer->setNoRender();
            $this->_helper->layout->disableLayout();

            $Facultades = new Application_Model_DbTable_Facultades();
            $consulta = $Facultades->CargarFacultades();

            echo $json = Zend_Json::encode($consulta);
        }
    }

    public function cargarAction() {
        if ($this->getRequest()->isXmlHttpRequest()) {
            $this->_helper->viewRenderer->setNoRender();
            $this->_helper->layout->disableLayout();

            $Facultades = new Application_Model_DbTable_Facultades();
            $consulta = $Facultades->CargarFacultades();


            echo $json = Zend_Json::encode($consulta);
        }
    }

    public function cargarproycurriAction() {
        if ($this->getRequest()->isXmlHttpRequest()) {
            $this->_helper->viewRenderer->setNoRender();
            $this->_helper->layout->disableLayout();

            $ProyectosCurriculares = new Application_Model_DbTable_Proyectos();
            $consulta = $ProyectosCurriculares->CargarProyectosCurriculares();


            echo $json = Zend_Json::encode($consulta);
        }
    }

    public function cargarpaisesAction() {
        if ($this->getRequest()->isXmlHttpRequest()) {
            $this->_helper->viewRenderer->setNoRender();
            $this->_helper->layout->disableLayout();

            $paises = new Application_Model_DbTable_Paises();
            $consulta = $paises->CargarPaises();


            echo $json = Zend_Json::encode($consulta);
        }
    }

    public function cargardepartamentosAction() {
        if ($this->getRequest()->isXmlHttpRequest()) {
            $this->_helper->viewRenderer->setNoRender();
            $this->_helper->layout->disableLayout();

            $departamentos = new Application_Model_DbTable_Departamentos();
            $idpaiese = $this->_request->getPost("idpais");
            $codigoPais = $this->_request->getPost("codigo");
            $consulta = $departamentos->CargarDepartamentos($codigoPais);


            echo $json = Zend_Json::encode($consulta);
        }
    }

    public function cargarmunicipiosAction() {
        if ($this->getRequest()->isXmlHttpRequest()) {
            $this->_helper->viewRenderer->setNoRender();
            $this->_helper->layout->disableLayout();

            $municipios = new Application_Model_DbTable_Municipios();
            $idDepartamento = $this->_request->getPost("idDepartamento");
            $codigoDepartamento = $this->_request->getPost("codigoDepartamento");
            $consulta = $municipios->CargarMunicipios($codigoDepartamento);


            echo $json = Zend_Json::encode($consulta);
        }
    }

    public function cargarlocalidadesAction() {
        if ($this->getRequest()->isXmlHttpRequest()) {
            $this->_helper->viewRenderer->setNoRender();
            $this->_helper->layout->disableLayout();

            $localidades = new Application_Model_DbTable_Localidades();
            $consulta = $localidades->CargarLocalidades();


            echo $json = Zend_Json::encode($consulta);
        }
    }
    

}

