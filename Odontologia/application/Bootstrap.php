<?php

class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{
 function _initViewHelpers() 
    { 
       $this->bootstrap('layout'); 
       $layout = $this->getResource('layout'); 
       $view = $layout->getView(); 
       $view->doctype('XHTML1_STRICT'); 
       $view->headMeta()->appendHttpEquiv('Content-Type', 'text/html;charset=utf-8'); 
       $view->headTitle()->setSeparator(' - '); 
       $view->headTitle('Primeros pasos en Zend Framework'); 
      
       $resourceAutoloader = new Zend_Loader_Autoloader_Resource(
          array(
            'basePath' => APPLICATION_PATH,
            'namespace' => 'App',
            'resourceTypes' => array(
              'form' => array('path' => 'forms/', 'namespace' => 'Form'),
              'model' => array('path' => 'models/', 'namespace' => 'Model')
            )
       )
    );
    }

}

