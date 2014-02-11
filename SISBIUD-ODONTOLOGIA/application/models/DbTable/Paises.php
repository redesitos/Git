<?php

class Application_Model_DbTable_Paises extends Zend_Db_Table_Abstract
{

    protected $_name = 'Paises';

 public function CargarPaises(){
        
       $db = Zend_Db_Table::getDefaultAdapter();
       $select = Zend_Db_Table::getDefaultAdapter()->select();
       $select->from(array('f' => 'paises'),
                array('f.codigo_pais','f.nombre_pais'));
        return Zend_Db_Table::getDefaultAdapter()->fetchAll($select);
        
        return $select;  
        
    }
    
}

