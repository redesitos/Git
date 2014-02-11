<?php

class Application_Model_DbTable_Beneficiarios extends Zend_Db_Table_Abstract
{

    protected $_name = 'beneficiarios';


    public function guardaBeneficiario($tipovinculacion,$codigo,$nombres,$apellidos,$tipoDoc,$documento,$fechaNacimiento,$tipoBenficiario,$telFijo,$telCelular,$emailPersonal,$emailInstitucional,$sangre,$regimenSalud,$direccion,$barrio,$estrato,$localidad,$pais,$departamento,$municipio,$nombreContacto,$telefonoContacto){
        return TRUE;
    }
     public function Existe($codigo) {
        $db = Zend_Db_Table::getDefaultAdapter();
        $select = $db->select()
                ->from(array('beneficiarios'), array('count' => 'count(codigo_ud)'))
                ->where('codigo_ud = ?', $codigo);
        $verificar = Zend_Db_Table::getDefaultAdapter()->fetchRow($select);
        $coicidencias = $verificar["count"];
        if ($coicidencias > 0) {
            return true;
        } else {
            return false;
        }
    }
    
}

