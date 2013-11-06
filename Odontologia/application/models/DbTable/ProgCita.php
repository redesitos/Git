<?php

class Application_Model_DbTable_ProgCita extends Zend_Db_Table_Abstract
{

    protected $_name = 'PROGRAMACION_CITAS';
    
    public function crear($codigo,$hora,$fecha){
        $data = array(
            'Hora' => $hora,
            'Fecha' => $fecha,
            'DocId' => $codigo
        );
        $this->insert($data);
    }
    
   //Esta función comprueba si un código de estudiante ya esta registrado en la BD.
    public function Existe($codigo) {
        $db = Zend_Db_Table::getDefaultAdapter();
        $select = $db->select()
                ->from(array('PROGRAMACION_CITAS'), array('count' => 'count(DocId)'))
                ->where('DocId = ?', $codigo);
        $verificar = Zend_Db_Table::getDefaultAdapter()->fetchRow($select);
        $coicidencias = $verificar["count"];
        if ($coicidencias > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function consultar($codigo) {
        $query = $this->fetchRow('DocId = ' . $codigo);
        return $query;
    }

    public function actualizar($codigo, $hora, $fecha) {
        $data = array(
            'Hora' => $hora,
            'Fecha' => $fecha,
            'DocId' => $codigo
        );
        $this->update($data, 'DocId = ' . $codigo);
    }

    public function consulta_general() {
        $select = Zend_Db_Table::getDefaultAdapter()->select();
        $select->from(array('p' => 'PROGRAMACION_CITAS'));
        return Zend_Db_Table::getDefaultAdapter()->fetchAll($select);
    }

    public function eliminar($codigo) {
        $this->delete('DocId=' . $codigo);
    }

    
    
}

