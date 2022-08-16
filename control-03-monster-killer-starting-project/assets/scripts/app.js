const INITIAL_HEALTH = 100;
const MAX_MONSTER_ATTACK_VALUE = 8;
const MAX_MONSTER_STRONG_ATTACK_VALUE = 12;
const MAX_PLAYER_ATTACK_VALUE = 10;
const SUCCESS_MESSAGE = "Hurraeh!!! You won the bloody monster!!";
const FAILURE_MESSAGE = "You loser!! Don't mess with the monster again";
const DRAW_MESSAGE = "Not a bad try!!! You draw the match!!";

let playerHealth = INITIAL_HEALTH;
let monsterHealth = INITIAL_HEALTH;

adjustHealthBars(INITIAL_HEALTH);

function adjustHealthOnAttack(mode) {
    if (mode === "ATTACK") {
        monsterHealth -= dealMonsterDamage(MAX_MONSTER_ATTACK_VALUE);
    } else if (mode === "STRONG_ATTACK") {
        monsterHealth -= dealMonsterDamage(MAX_MONSTER_STRONG_ATTACK_VALUE);
    }
    playerHealth -= dealPlayerDamage(MAX_PLAYER_ATTACK_VALUE);
}

function calcAndDisplayResults() {
    if (monsterHealth <= 0 && playerHealth > 0) {
        alert(SUCCESS_MESSAGE);
    } else if (playerHealth <= 0 && monsterHealth > 0) {
        alert(FAILURE_MESSAGE);
    } else if (playerHealth <= 0 && monsterHealth <= 0) {
        alert(DRAW_MESSAGE);
    }
}

function playerAttack() {
    adjustHealthOnAttack("ATTACK");
    calcAndDisplayResults();
}

function playerStrongAttack() {
    adjustHealthOnAttack("STRONG_ATTACK");
    calcAndDisplayResults();
}

attackBtn.addEventListener("click", playerAttack);
strongAttackBtn.addEventListener("click", playerStrongAttack);