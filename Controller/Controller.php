<?php

namespace Controller;

use PDO;
use Exception;

class Controller {
    private $db;

    public function __construct() {
        //
    }

    public function connectPDO() {
        try {
            $this->db = new PDO("mysql:host=localhost;dbname=clicker", "root", "");
        } catch(Exception $e) {
            "[Connecting Error] " . $e;
        }

        return $this->db;
    }

    public function getPlayerData() {
        $specs = $this->db->prepare(
            'SELECT 
                s.name,
                s.dataName,
                s.qty,
                s.add,
                s.price,
                s.priceStep
            FROM `players` p 
            LEFT JOIN `specs` s ON p.id_players = s.id_players' 
        );

        $infos = $this->db->prepare(
            'SELECT
                i.name,
                i.posX,
                i.level,
                i.stage
            FROM `players` p
            LEFT JOIN `infos` i ON p.id_infos = i.id_infos'
        );

        $swords = $this->db->prepare(
            'SELECT
                s.path,
                s.rarity,
                s.rarityName,
                s.height,
                s.width
            FROM `players` p
            LEFT JOIN `swords` s ON p.id_swords = s.id_swords'
        );

        $specs->execute();
        $infos->execute();
        $swords->execute();

        $specsData = [];
        $infosData = $infos->fetch(PDO::FETCH_ASSOC);
        $swordsData = $swords->fetch(PDO::FETCH_ASSOC);

        while ($spec = $specs->fetch(PDO::FETCH_ASSOC)) {
            array_push($specsData, $spec);
        }

        $data = [
            'specs' => [],
            'infos' => [],
            'swords' => []
        ];

        array_push($data['specs'], $specsData);
        array_push($data['infos'], $infosData);
        array_push($data['swords'], $swordsData);

        /* echo '<pre>';
        print_r($data['specs'][0][0]['qty']);
        echo '</pre>'; */

        return $data;
    }
}