<?php

class Application_Model_DbTable_Municipios extends Zend_Db_Table_Abstract
{

    protected $_name = 'municipios';


    public function CargarMunicipios($codigoDepartamento){
        
       $db = Zend_Db_Table::getDefaultAdapter();
       $select = Zend_Db_Table::getDefaultAdapter()->select();
       $select->from(array('m' => 'municipios'),
                array('m.codigo_municipio','m.nombre_municipio'))
                ->where('cod_departamento=?',$codigoDepartamento);
        return Zend_Db_Table::getDefaultAdapter()->fetchAll($select);
        
        return $select;     
        
    }
    
}

