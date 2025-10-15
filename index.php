<?php

require_once('game.php');

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/css/style.css">
    <title>Clicker</title>
</head>
<body>
    <main>
        <div class="game-infos">
            <div class="game-history infos-container">
                <!-- public/js/index.js | Generation -->
            </div>
            <div class="infos-container"></div>
        </div>
        <div id="canvas-container">
            <aside class="items-container dashboard">
                <div class="coin-container">
                    <img src="public/img/coin.png" alt="">
                    <span class="coin-amount amount"><!--  --></span>
                </div>
                <div class="specs-container">
                    <!-- public/js/index.js | Generation -->
                </div>
            </aside>
            <canvas id="canvas">
                <img id="player-img" src="public/img/player.png">
                <img id="ennemy-img" src="public/img/blob.png">
                <img id="ennemy-hit-img" src="public/img/blob-hit.png">
            </canvas>
            <aside class="stats-container dashboard">
                <div class="attack-amount amount">
                    <p>Puissance <span class="amount-number"><?= $playerData['specs'][0][0]['qty'] ?></span></p>
                </div>
                <div class="sword-container">
                </div>
                <div class="sword-stats">
                    <!-- public/js/index.js | Generation -->
                </div>
            </aside>
        </div>
        <div class="player-overlay role-overlay">
            <div class="player-name">Jarod</div>
            <div class="player-health health-bar">
                <img src="public/img/healthbar.png" alt="">
                <span class="player-bar bar" data-role="player"></span>
            </div>
            <div class="player-health-qty health-qty">
                0 / 0
            </div>
        </div>
        <div class="ennemy-overlay role-overlay">
            <div class="ennemy-name">Blob</div>
            <div class="ennemy-health health-bar">
                <img src="public/img/healthbar.png" alt="">
                <span class="ennemy-bar bar" data-role="ennemy"></span>
            </div>
            <div class="ennemy-health-qty health-qty">
                0 / 0
            </div>
        </div>
        <div class="game-button">
            <img src="public/img/button.png" alt="">
        </div>
        <script src="public/js/index.js"></script>
    </main>
</body>
</html>