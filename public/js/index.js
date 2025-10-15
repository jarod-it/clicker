const canvas = document.querySelector('#canvas');
    canvas.style.width = "900px";
    canvas.style.height = "500px";

const ctx = canvas.getContext("2d");

let amountContainer = document.querySelector('.amount');
let amount = document.querySelector('.amount-number');

let swordContainer = document.querySelector('.sword-container');
let swordStats = document.querySelector('.sword-stats');
let swordTitle = document.querySelector('.sword-title');

let gameButton = document.querySelector('.game-button');
let gameHistory = document.querySelector('.game-history');
let flag = document.querySelector('.flag');

let playerImg = document.querySelector('#player-img');
let playerHealthBar = document.querySelector('.player-bar');
let playerHealthQty = document.querySelector('.player-health-qty');

let ennemyImg = document.querySelector('#ennemy-img');
let ennemyHitImg = document.querySelector('#ennemy-hit-img');
let ennemyHealthBar = document.querySelector('.ennemy-bar');
let ennemyHealthQty = document.querySelector('.ennemy-health-qty');

let coinContainer = document.querySelector('.coin-amount');

let specsContainer = document.querySelector('.specs-container');

const _Sword = {
    sword1: {
        rarity: "bad",
        rarityName: "Médiocre",
        path: "sword1.png",
        index: 1,
        height: 30,
        width: 30,
        specs: {
            vitality: {
                qty: 200,
                name: "HP"
            },
            attack: {
                qty: 10,
                name: "Attaque"
            },
            cp: {
                qty: 0.75,
                name: "CP"
            }
        }
    },
    sword2: {
        rarity: "basic",
        rarityName: "Normal",
        path: "sword2.png",
        index: 2,
        height: 30,
        width: 30,
        specs: {
            vitality: {
                qty: 500,
                name: "HP"
            },
            attack: {
                qty: 25,
                name: "Attaque"
            },
            cp: {
                qty: 1,
                name: "CP"
            }
        }
    },
    sword3: {
        rarity: "middle",
        rarityName: "Rare",
        path: "sword3.png",
        index: 3,
        height: 30,
        width: 30,
        specs: {
            vitality: {
                qty: 1000,
                name: "HP"
            },
            attack: {
                qty: 100,
                name: "Attaque"
            },
            cp: {
                qty: 1,
                name: "CP"
            }
        }
    },
    sword4: {
        rarity: "big",
        rarityName: "Excellent",
        path: "sword4.png",
        index: 4,
        height: 40,
        width: 40,
        specs: {
            vitality: {
                qty: 2500,
                name: "HP"
            },
            attack: {
                qty: 250,
                name: "Attaque"
            },
            cp: {
                qty: 1,
                name: "CP"
            }
        }
    },
    sword5: {
        rarity: "impressive",
        rarityName: "Mythique",
        path: "sword5.png",
        index: 5,
        height: 40,
        width: 40,
        specs: {
            vitality: {
                qty: 5000,
                name: "HP"
            },
            attack: {
                qty: 500,
                name: "Attaque"
            },
            cp: {
                qty: 1,
                name: "CP"
            }
        }
    },
    sword6: {
        rarity: "legendary",
        rarityName: "Légendaire",
        path: "sword6.png",
        index: 6,
        height: 50,
        width: 50,
        specs: {
            vitality: {
                qty: 10000,
                name: "HP"
            },
            attack: {
                qty: 1000,
                name: "Attaque"
            },
            cp: {
                qty: 1,
                name: "CP"
            }
        }
    },
    sword7: {
        rarity: "legendarys",
        rarityName: "Légendaire S",
        path: "sword7.png",
        index: 7,
        height: 50,
        width: 50,
        specs: {
            vitality: {
                qty: 25000,
                name: "HP"
            },
            attack: {
                qty: 2500,
                name: "Attaque"
            },
            cp: {
                qty: 1,
                name: "CP"
            }
        }
    },
    sword8: {
        rarity: "legendarysss",
        rarityName: "Légendaire SSS+",
        path: "sword8.png",
        index: 8,
        height: 50,
        width: 50,
        specs: {
            vitality: {
                qty: 50000,
                name: "HP"
            },
            attack: {
                qty: 5000,
                name: "Attaque"
            },
            cp: {
                qty: 1,
                name: "CP"
            }
        }
    },
    sword9: {
        rarity: "legendarysss",
        rarityName: "Légendaire SSS+",
        path: "sword9.png",
        index: 9,
        height: 60,
        width: 60,
        specs: {
            vitality: {
                qty: 100000,
                name: "HP"
            },
            attack: {
                qty: 10000,
                name: "Attaque"
            },
            cp: {
                qty: 100,
                name: "CP"
            }
        }
    },
}

let _Player = {
    infos: {
        name: "Jarod",
        posX: 0
    },
    
    specs: {
        power: {
            qty: 0,
            add: 0,
            price: 100,
            priceStep: 1.05,
            name: "Puissance",
            dataName: "power"
        },
        powerStep: {
            qty: 200,
            add: 0,
            price: 100,
            priceStep: 1.05,
            name: "Palier",
            dataName: "powerStep"
        },
        baseVitality: {
            qty: 10000,
            add: 0,
            price: 100,
            priceStep: 1.05,
            name: "Hp de base",
            dataName: "baseVitality"
        },
        vitality: {
            qty: 100,
            name: "Hp",
            dataName: "vitality"
        },
        attack: {
            qty: 10,
            add: 0,
            price: 100,
            priceStep: 1.05,
            name: "Attaque",
            dataName: "attack"
        },
        skill: {
            qty: 10,
            add: 0,
            price: 100,
            priceStep: 1.05,
            name: "Compétence",
            dataName: "skill"
        },
        speed: {
            qty: 1000,
            add: 0,
            price: 100,
            priceStep: 1.05,
            name: "Vitesse",
            dataName: "speed"
        },
    },

    resources: {
        coin: 0,
        coinStep: 10000,
    },

    sword: _Sword.sword1
}

let _Ennemy = {
    infos: {
        name: "Blob",
        posX: parseInt(canvas.style.width)
    },
    
    specs: {
        baseVitality: 100,
        vitality: 100,
        attack: 7,
    }
}

let steps = {
    step1: {
        qty: 1000,
        sword: _Sword.sword2
    },
    step2: {
        qty: 2000,
        sword: _Sword.sword3
    },
    step3: {
        qty: 3000,
        sword: _Sword.sword4
    },
    step4: {
        qty: 4000,
        sword: _Sword.sword5
    },
    step5: {
        qty: 5000,
        sword: _Sword.sword6
    },
    step6: {
        qty: 6000,
        sword: _Sword.sword7
    },
    step7: {
        qty: 7000,
        sword: _Sword.sword8
    },
    step8: {
        qty: 8000,
        sword: _Sword.sword9
    }
}

let swordSpriteObject;
const swordSprite = new Image();
swordSprite.src = `public/img/${_Player.sword.path}`;
swordSpriteObject = {
    img: swordSprite,
    posX: 84,
    posY: 125 - _Player.sword.height,
    width: _Player.sword.width,
    height: _Player.sword.height
}

const playerSprite = new Image();
playerSprite.src = playerImg.src;
let playerSpriteObject = {
    img: playerSprite,
    posX: 10,
    posY: 70,
    width: 83.3,
    height: 70
}

const ennemyHitSprite = new Image();
ennemyHitSprite.src = ennemyHitImg.src;

const ennemySprite = new Image();
ennemySprite.src = ennemyImg.src;
let ennemySpriteObject = {
    img: ennemySprite,
    posX: 200,
    posY: 70,
    width: 83.3,
    height: 70
}

let flagIndex = 0;
let tour = 1;
let level = 0;
let stage = 1;
let chrono = 0;

function _init() {
    setPlayerHealth();
    updateHealth(_Ennemy, ennemyHealthBar);
    updateHealth(_Player, playerHealthBar);
    showSword();
    setSpecs();
    setLevel();
    updateSpecs();
    requestAnimationFrame(run);
}

_init();

gameButton.addEventListener('click', () => {
    _Player.specs.power.qty += _Player.specs.powerStep.qty*_Player.sword.specs.cp.qty;

    switchSword();
    updatePower();

    /* flagAnimation(gameButton, _Player.specs.powerStep.qty*_Player.sword.specs.cp.qty); */
    flagAnimation(amountContainer, _Player.specs.powerStep.qty*_Player.sword.specs.cp.qty);

    flagIndex++;
});

function run() {
    requestAnimationFrame(run);

    chrono += 60;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(swordSpriteObject.img, swordSpriteObject.posX, swordSpriteObject.posY, swordSpriteObject.width, swordSpriteObject.height);
    ctx.drawImage(playerSpriteObject.img, playerSpriteObject.posX, playerSpriteObject.posY, playerSpriteObject.width, playerSpriteObject.height);
    ctx.drawImage(ennemySpriteObject.img, ennemySpriteObject.posX, ennemySpriteObject.posY, ennemySpriteObject.width, ennemySpriteObject.height);
    ctx.fillText(`Stage ${updateAmountFormat(stage)} - Niveau ${updateAmountFormat(level)}`, 104, 15);
    ctx.font = "10px Verdana";

    playerIdleAnimation();
}

function playerIdleAnimation() {
    if(chrono < 4000) {
        playerSpriteObject.height += 0.01;
        playerSpriteObject.width += 0.01;
        playerSpriteObject.posY *= 0.9999;

        swordSpriteObject.height += 0.01;
        swordSpriteObject.width += 0.01;
        swordSpriteObject.posX += 0.005;
    }
    else if(chrono >= 4000 && chrono < 8000) {
        playerSpriteObject.height -= 0.01;
        playerSpriteObject.width -= 0.01;
        playerSpriteObject.posY *= 1.0001;

        swordSpriteObject.height -= 0.01;
        swordSpriteObject.width -= 0.01;
        swordSpriteObject.posX -= 0.005;
    }
    else if(chrono >= 8000) chrono = 0;
}

function playerHitAnimation() {
    let step = 2;
    let chrono = 0;

    let animationInterval = setInterval(() => {
        chrono += 5;

        if(chrono <= 500) {
            playerSpriteObject.posX += Math.floor(1 * step);
            swordSpriteObject.posX += Math.floor(1 * step);
            step -= 0.01;
        }
        else if(chrono > 500 && chrono <= 1005) {
            ennemyGetHitAnimation(true);
            playerSpriteObject.posX -= Math.floor(1 * step);
            swordSpriteObject.posX -= Math.floor(1 * step);
            step += 0.01;
        }
        else if(chrono > 1000) {
            chrono = 0;
            step = 1.2
            clearInterval(animationInterval);
        }

        if(chrono > 520) ennemyGetHitAnimation(false);
        if(chrono > 540) ennemyGetHitAnimation(true);
        if(chrono > 560) ennemyGetHitAnimation(false);
    }, _Player.specs.speed.qty / 200);
}

function ennemyGetHitAnimation(state) {
    if(state === true) ennemySpriteObject.img = ennemyHitSprite;
    if(state === false) ennemySpriteObject.img = ennemySprite;

    if(_Ennemy.specs.vitality <= 0) ennemySpriteObject.posX = 300;
}

function showSword() {
    let swordImg = document.createElement('img');
        swordImg.src = `public/img/${_Player.sword.path}`;

    let swordTitle = document.createElement('p');
        swordTitle.classList.add('sword-title', _Player.sword.rarity);
        swordTitle.innerText = _Player.sword.rarityName;

    swordContainer.innerHTML = "";
    swordContainer.append(swordImg); 

    swordStats.innerHTML = "";
    swordStats.append(swordTitle);

    for (const [key, value] of Object.entries(_Player.sword.specs)) {
        let stats = document.createElement('p');
            stats.classList.add('stats', 'positive');
            stats.innerHTML = `+${updateAmountFormat(value.qty)} ${value.name}`;

        swordStats.append(stats);
    }
}

function switchSword() {
    for(const step in steps) {
        if(_Player.specs.power.qty > steps[step].qty) {
            _Player.sword = steps[step].sword;
            _Player.specs.vitality.qty = getPlayerHealth();

            swordSprite.src = `public/img/${_Player.sword.path}`;
            swordSpriteObject.width = _Player.sword.width;
            swordSpriteObject.height = _Player.sword.height;
            swordSpriteObject.posY = 125 - _Player.sword.height;

            let keys = Object.keys(steps);
            delete steps[keys[0]];
        }
    }

    showSword();
}

function getPlayerAttack() {
    return _Player.specs.attack.qty + _Player.sword.specs.attack.qty + _Player.specs.attack.add;
}

function getPlayerHealth() {
    return _Player.specs.baseVitality.qty + _Player.sword.specs.vitality.qty + _Player.specs.baseVitality.add;
}

function getCoinAmount() {
    return _Player.resources.coin;
}

function fight() {
    if(_Ennemy.specs.vitality > 0 && _Player.specs.vitality.qty > 0) {
        setTimeout(() => { setHistory(`Stage ${updateAmountFormat(stage)} - Niveau ${updateAmountFormat(level)} - Tour n°${updateAmountFormat(tour)}`, ['tour-infos', 'infos']); }, 1*_Player.specs.speed.qty);
        setTimeout(() => {
            playerHitAnimation();

            setTimeout(() => {
                _Ennemy.specs.vitality -= getPlayerAttack();

                if(_Ennemy.specs.vitality < 0) _Ennemy.specs.vitality = 0;
                
                setHistory(`Vous avez enlevé ${updateAmountFormat(getPlayerAttack())} HP au ${_Ennemy.infos.name}`, ['player-infos', 'infos', 'infos']);

                updateHealth(_Ennemy, ennemyHealthBar);
            }, 1*500);
        }, 1*_Player.specs.speed.qty);

        setTimeout(() => {
            if(_Ennemy.specs.vitality > 0) {
                _Player.specs.vitality.qty -= _Ennemy.specs.attack;

                if(_Player.specs.vitality.qty < 0) _Player.specs.vitality.qty = 0; 

                setHistory(`Le ${_Ennemy.infos.name} ennemy vous a retiré ${updateAmountFormat(_Ennemy.specs.attack)} HP`, ['ennemy-infos', 'infos']);

                updateHealth(_Player, playerHealthBar);
                
                tour++;
            }

            fight();
        }, 2*_Player.specs.speed.qty);
    } else {
        cutHistory();

        updateHealth(_Ennemy, ennemyHealthBar);
        updateHealth(_Player, playerHealthBar);

        let victory = _Player.specs.vitality.qty > 0 ? true : false;
        let msgVictory = victory === true ? "gagné" : "perdu";

        if(victory === false) setHistory(`Vous avez ${msgVictory} !`, ['tour-infos', 'infos']);

        updateCoinAmount(_Player.resources.coinStep);

        if(victory === true && level === 5) setStage();
        if(victory === true) setLevel();
        else return;
    }
}

function setPlayerHealth() {
    _Player.specs.vitality.qty = getPlayerHealth();
}

function setHistory(text, classes) {
    cutHistory();
    let msg = document.createElement('p');
        msg.textContent = text;

    classes.forEach(element => { msg.classList.add(element); });

    gameHistory.append(msg);
}

function setLevel() {
    tour = 1;

    let ennemyInterval = setInterval(() => {
        if(ennemySpriteObject.posX <= 200) clearInterval(ennemyInterval);
        ennemySpriteObject.posX -= 1;
        console.log(ennemySpriteObject.posX);
    }, 10);

    setTimeout(() => {
        if(_Ennemy.specs.vitality <= 0) {
            _Ennemy.specs.vitality = 100;
            updateHealth(_Ennemy, ennemyHealthBar);
        }

        fight();
    }, 2*_Player.specs.speed.qty);

    level++;
}

function setStage() {
    level = 0;
    stage++;
}

function setSpecs() {
    for(const spec in _Player.specs) {
        if(
            _Player.specs[spec].dataName != "vitality" &&
            _Player.specs[spec].dataName != "powerStep"
        ) {
            let specs = document.createElement('div');
                specs.classList.add(`specs-${_Player.specs[spec].dataName}`, 'spec');

            let name = document.createElement('div');
                name.classList.add('title');
                name.innerText = _Player.specs[spec].name;

            let price = document.createElement('p');
                price.classList.add('price');
                price.setAttribute('data-spec', _Player.specs[spec].dataName);
                
            let priceAmount = document.createElement('p');
                priceAmount.innerText = updateAmountFormat(_Player.specs[spec].price);
                price.append(priceAmount);

            let priceImg = document.createElement('img');
                priceImg.src = "public/img/coin.png";
                price.append(priceImg);
                name.append(price);

            let amount = document.createElement('span');
                amount.classList.add('amount');
                amount.setAttribute('data-spec', _Player.specs[spec].dataName);
                amount.innerText = updateAmountFormat(_Player.specs[spec].add);

            let moreBtn = document.createElement('span');
                moreBtn.classList.add('more');
                moreBtn.setAttribute('data-spec', _Player.specs[spec].dataName);

            let moreBtnImg = document.createElement('img');
                moreBtnImg.src = "public/img/dollar.png";
                moreBtnImg.setAttribute('draggable', false);
                moreBtn.append(moreBtnImg);

            specs.append(name, amount, moreBtn);
            specsContainer.append(specs);
        }
    }
}

function updateSpecs() {
    let specsMore = document.querySelectorAll('.more');
    let itemsContainer = document.querySelector('.items-container');
    
    specsMore.forEach(element => {
        element.addEventListener('click', () => {
            if(_Player.specs[element.getAttribute('data-spec')].price <= getCoinAmount()) addSpecs(element.getAttribute('data-spec'));
        });

        element.addEventListener('mousedown', () => {
            let time = 0;
            let step = 1;

            element.dataset.interval = setInterval(() => {
                time += 100;

                if(time > 999) {
                    if(_Player.specs[element.getAttribute('data-spec')].price <= getCoinAmount()) {
                        addSpecs(element.getAttribute('data-spec'));
                    } else {
                        clearInterval(element.dataset.interval);
                        delete element.dataset.interval;
                    }
                }

                if(time > 1999 && time < 3000) step = 2;
                if(time > 2999 && time < 3000) step = 5;
                if(time > 3999 && time < 3000) step = 20;
            }, 100);
        });

        itemsContainer.addEventListener('mouseleave', () => {
            clearInterval(element.dataset.interval);
            delete element.dataset.interval;
        });

        document.addEventListener('mouseup', () => {
            clearInterval(element.dataset.interval);
            delete element.dataset.interval;
        });
    });
}

function addSpecs(elementDataSpec) {
    updateCoinAmount(-_Player.specs[elementDataSpec].price);

    _Player.specs[elementDataSpec].add++;

    let currentSpec = document.querySelector(`.spec .amount[data-spec=${elementDataSpec}]`);
        currentSpec.innerText = _Player.specs[elementDataSpec].add;
    
    if(elementDataSpec === "baseVitality") updateHealth(_Player, playerHealthBar);
    if(elementDataSpec === "power") updatePower();

    _Player.specs[elementDataSpec].price *= _Player.specs[elementDataSpec].priceStep;

    let price = document.querySelector(`p[data-spec=${elementDataSpec}]`);
    price.querySelector('p').innerText = updateAmountFormat(_Player.specs[elementDataSpec].price);
}

function updateCoinAmount(amount) {
    _Player.resources.coin += amount;
    coinContainer.innerText = updateAmountFormat(_Player.resources.coin);
}

function updatePower() {
    _Player.specs.power.qty += _Player.specs.powerStep.qty*_Player.sword.specs.cp.qty;
    amount.innerText = updateAmountFormat(_Player.specs.power.qty).toLocaleString('fr-FR');
    switchSword();
}

function updateAmountFormat(amount) {
    let suffix = "";
    let number = 0;

    if(amount <= 9999) number = amount.toString().length;
    if(amount > 9999) {
        suffix = "k";
        number = 2;
    }
    if(amount > 99999) number = 3;
    if(amount > 999999) {
        suffix = "M";
        number = 1;
    }
    if(amount > 9999999) number = 2;
    if(amount > 99999999) number = 3;
    if(amount > 999999999) {
        suffix = "B";
        number = 1;
    }
    if(amount > 9999999999) number = 2;
    if(amount > 99999999999) number = 3;
    if(amount > 999999999999) {
        suffix = "T";
        number = 1;
    }
    if(amount > 9999999999999) number = 2;
    if(amount > 99999999999999) number = 3;
    if(amount > 999999999999999) {
        suffix = "q";
        number = 1;
    }
    if(amount > 9999999999999999) number = 2;
    if(amount > 99999999999999999) number = 3;

    let arrayNb = amount.toString().split('');
    let newAmount = arrayNb.slice(0, number).join('');

    if(amount > 9999) newAmount += "." + arrayNb.slice(number, number + 1).join('');
    else newAmount = parseInt(arrayNb.slice(0, number).join('')).toLocaleString('fr-FR');

    return newAmount + suffix;
}

function cutHistory() {
    if(gameHistory.childElementCount === 9) {
        gameHistory.removeChild(gameHistory.getElementsByTagName('p')[0]);
    }
}

function updateHealth(player, healthBar) {
    let ratio = 0;

    if(healthBar.getAttribute('data-role') === "player") {
        ratio = ((player.sword.specs.vitality.qty + player.specs.baseVitality.qty + player.specs.baseVitality.add - player.specs.vitality.qty) * 100) / (player.sword.specs.vitality.qty + player.specs.baseVitality.qty);
        healthBar.style.width = (100 * (1 - (ratio.toFixed(5) / 100))) + "px";
        playerHealthQty.innerText = `${updateAmountFormat(player.specs.vitality.qty + player.specs.baseVitality.add)} / ${updateAmountFormat(getPlayerHealth())}`;
    }
    if(healthBar.getAttribute('data-role') === "ennemy") {
        ratio = player.specs.baseVitality - player.specs.vitality;
        healthBar.style.width = (100 * (1 - (ratio.toFixed(5) / 100))) + "px";
        ennemyHealthQty.innerText = `${updateAmountFormat(player.specs.vitality)} / ${updateAmountFormat(player.specs.baseVitality)}`;
    }
}

function flagAnimation(parentNode, flagValue) {
    let topPosition = 0;

    let flag = document.createElement('span');
        flag.classList.add('flag');
        flag.setAttribute('data-count', flagIndex);
        flag.innerHTML = `+${flagValue}`;

    const flagDataCount = flag.getAttribute('data-count');

    parentNode.append(flag);

    let currentFlag = document.querySelector(`span[data-count="${flagDataCount}"]`);

    const flagInterval = setInterval(() => {
        topPosition -= 1.5;
        currentFlag.style.top = topPosition.toString() + "px";
    }, 1*30);

    setTimeout(() => {
        for (const child of parentNode.children) {
            if(child.getAttribute('data-count') === flagDataCount && child instanceof HTMLSpanElement) {
                parentNode.removeChild(child);
            }
        }
        clearInterval(flagInterval);
    }, 1*1500);
}

function sendDataAjax(data) {

}