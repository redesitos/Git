<?php

class Application_Model_DbTable_Facultades extends Zend_Db_Table_Abstract
{

    protected $_name = 'Facultades';


    
    public function CargarFacultades(){
        
       $db = Zend_Db_Table::getDefaultAdapter();
       $select = Zend_Db_Table::getDefaultAdapter()->select();
       $select->from(array('f' => 'facultades'),
                array('f.codigo_facultad','f.nombre_facultad'));
        return Zend_Db_Table::getDefaultAdapter()->fetchAll($select);
        
        return $select;  
        
    }
    
    
}

