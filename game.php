<?php

require_once __DIR__ . '/Controller/Controller.php';

use Controller\Controller;
use Controller\AjaxController;

$controller = new Controller();
$db = $controller->connectPDO();

/* $query = 'SELECT * FROM stats';
$stmt = $db->prepare($query);
$stmt->execute();

$stats = $stmt->fetch(PDO::FETCH_ASSOC); */

$playerData = $controller->getPlayerData();