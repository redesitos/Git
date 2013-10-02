<?php
use Application_Model_Register;
class IndexController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        // action body
        $_dbTable= new Application_Model_Register();
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
        $_dbTable->deleteUser(1);
    }


}

