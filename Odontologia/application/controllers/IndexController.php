<?php
use Application_Model_Register;

class IndexController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    
    public function preDispatch() {
        $options = array(
            'layout' => 'usuario',
        );
        Zend_Layout::startMvc($options);
    }
    
    
    
    
    public function indexAction()
    {
        // action body
        //$_dbTable= new Application_Model_Register();
        /*$_dbTable->createUser(array(
                'id'=>2,
                'name'=>'fish nano',
                'age'=>10,
                'gender'=>'M',
                'company'=>0,
                ));
         */
        /*$_dbTable->updateUser(array
                (
            'id'=>5,
                'name'=>'fish2',
                'age'=>50,
                'gender'=>'F',
                'company'=>10,
                ), 2);
        */
        /*$_dbTable->deleteUser(1);*/
        
        /*$peticion = $this->getRequest();  
        $valor = $peticion->getParam('variable');  */
        
       
    }

    /*public function addAction()
    {
        
        $dato="fish";
        $this->view->assign(array('dato'=>$dato));
        return $this->view;
    }
     * funcion inicial validacion de agregacion a la base de datos
     */


}