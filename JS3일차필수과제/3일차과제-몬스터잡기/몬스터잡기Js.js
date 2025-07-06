const monsterArea = document.getElementById('monster-area');
const attackBtn = document.getElementById('attack-btn');
const log = document.getElementById('log');

let currentMonsterIndex = 0;
const monsters = ['슬라임', '고블린', '늑대', '오우거', '드래곤'];
let monsterHP = 0;

function spawnMonster(name) {
  const monster = document.createElement('div');
  monster.innerText = `${name} 등장! HP: 30`;
  monster.id = 'monster';
  monsterArea.innerHTML = '';
  monsterArea.appendChild(monster);
  monsterHP = 30;
}

attackBtn.addEventListener('click', function () {
  if (currentMonsterIndex >= monsters.length) {
    log.innerText = "🎉 게임 클리어!";
    return;
  }

  let damage = Math.floor(Math.random() * 10) + 1;
  monsterHP -= damage;

  const monsterEl = document.getElementById('monster');
  monsterEl.innerText = `${monsters[currentMonsterIndex]} HP: ${monsterHP}`;

  log.innerText = `${damage}의 데미지를 입혔습니다!`;

  if (monsterHP <= 0) {
    log.innerText += `\n${monsters[currentMonsterIndex]} 처치!`;
    currentMonsterIndex++;

    if (currentMonsterIndex < monsters.length) {
      spawnMonster(monsters[currentMonsterIndex]);
    } else {
      log.innerText += `\n🎉 모든 몬스터를 처치했습니다!`;
      monsterArea.innerHTML = '';
    }
  }
});

spawnMonster(monsters[currentMonsterIndex]);