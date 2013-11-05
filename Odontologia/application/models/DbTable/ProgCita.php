<?php

class Application_Model_DbTable_ProgCita extends Zend_Db_Table_Abstract
{

    protected $_name = 'PROGRAMACION_CITAS';
    
    public function crear($codigo){
        $hora='ss';
        $fecha='2012-11-11';
        $data = array(
            'Hora' => $hora,
            'Fecha' => $fecha,
            'DocId' => $codigo
        );
        $this->insert($data);
    }
}

