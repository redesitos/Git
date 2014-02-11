<?php

class Application_Model_DbTable_Proyectos extends Zend_Db_Table_Abstract
{

    protected $_name = 'proyectos_curriculares';

    public function CargarProyectosCurriculares(){
        
        $db = Zend_Db_Table::getDefaultAdapter();
       $select = Zend_Db_Table::getDefaultAdapter()->select();
       $select->from(array('pc' => 'proyectos_curriculares'),
                array('pc.codigo_proyecto','pc.nombre_proyecto'));
        return Zend_Db_Table::getDefaultAdapter()->fetchAll($select);
        
        return $select;  
        
    }
}

