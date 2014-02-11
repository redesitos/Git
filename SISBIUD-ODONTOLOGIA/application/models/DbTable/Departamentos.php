<?php

class Application_Model_DbTable_Departamentos extends Zend_Db_Table_Abstract
{

    protected $_name = 'departamentos';

public function CargarDepartamentos($idPais){
        
       $db = Zend_Db_Table::getDefaultAdapter();
       $select = Zend_Db_Table::getDefaultAdapter()->select();
       $select->from(array('f' => 'departamentos'),
                array('f.codigo_departamento','f.nombre_departamento'))
                ->where('cod_pais=?',$idPais);
        return Zend_Db_Table::getDefaultAdapter()->fetchAll($select);
        
        return $select;  
        
    }
    
}

