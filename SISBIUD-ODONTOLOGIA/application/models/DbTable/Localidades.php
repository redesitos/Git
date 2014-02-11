<?php

class Application_Model_DbTable_Localidades extends Zend_Db_Table_Abstract
{

    protected $_name = 'localidades';
    
    public function CargarLocalidades(){
        
       $db = Zend_Db_Table::getDefaultAdapter();
       $select = Zend_Db_Table::getDefaultAdapter()->select();
       $select->from(array('l' => 'localidades'),
                array('l.codigo_localidad','l.nombre_localidad'));
        return Zend_Db_Table::getDefaultAdapter()->fetchAll($select);
        
        return $select;
        
    }

}

