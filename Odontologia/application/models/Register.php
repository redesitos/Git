<?php
use \Application_Model_DbTable_User;
class Application_Model_Register
{
    private $_dbTable;
    
    function __construct() {
        $this->_dbTable = new Application_Model_DbTable_User();
    }

    public function createUser($array){
        $this->_dbTable->insert($array);
    }
    
    public function updateUser($array,$id){
        $this->_dbTable->update($array,"id=$id");
    }
    
     public function deleteUser($id){
        $this->_dbTable->delete("id=$id");
    }

}

