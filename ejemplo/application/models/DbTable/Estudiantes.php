<?php

class Application_Model_DbTable_Estudiantes extends Zend_Db_Table_Abstract {

    protected $_name = 'Estudiantes';

    //Esta funcion inserta un nuevo estudiante
    public function crear($codigo, $nombres, $fecha, $matricula, $personasCargo, $descripcion, $asignaturasPerdidas) {

        $data = array(
            'codigoEstudiante' => $codigo,
            'nombres' => $nombres,
            'fechaInscripcion' => $fecha,
            'matriculaValor' => $matricula,
            'personasCargo' => $personasCargo,
            'descripcion' => $descripcion,
            'nroAsigPerdidas' => $asignaturasPerdidas
        );
        $this->insert($data);
    }

    //Esta función comprueba si un código de estudiante ya esta registrado en la BD.
    public function Existe($codigo) {
        $db = Zend_Db_Table::getDefaultAdapter();
        $select = $db->select()
                ->from(array('Estudiantes'), array('count' => 'count(codigoEstudiante)'))
                ->where('codigoEstudiante = ?', $codigo);
        $verificar = Zend_Db_Table::getDefaultAdapter()->fetchRow($select);
        $coicidencias = $verificar["count"];
        if ($coicidencias > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function consultar($codigo) {
        $query = $this->fetchRow('codigoEstudiante = ' . $codigo);
        return $query;
    }

    public function actualizar($codigo, $nombres, $fecha, $matricula, $personasCargo, $descripcion, $asignaturasPerdidas) {
        $data = array(
            'nombres' => $nombres,
            'fechaInscripcion' => $fecha,
            'matriculaValor' => $matricula,
            'personasCargo' => $personasCargo,
            'descripcion' => $descripcion,
            'nroAsigPerdidas' => $asignaturasPerdidas
        );
        $this->update($data, 'codigoEstudiante = ' . $codigo);
    }

    public function consulta_general() {
        $select = Zend_Db_Table::getDefaultAdapter()->select();
        $select->from(array('e' => 'estudiantes'));
        return Zend_Db_Table::getDefaultAdapter()->fetchAll($select);
    }

    public function eliminar($codigo) {
        $this->delete('codigoEstudiante=' . $codigo);
    }

}

