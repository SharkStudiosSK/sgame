import sgame from './sgame.js';

sgame.init('canvas');

const spriteImgSrc = 'sprite.png';
const spriteWidth = 50;
const spriteHeight = 50;

const sprite = sgame.spawnSprite(spriteImgSrc, sgame.canvas.width/2 - spriteWidth/2, sgame.canvas.height/2 - spriteHeight/2, spriteWidth, spriteHeight);

sgame.addDiagonalMovement(sprite, 5);

function gameLoop() {
  sgame.clear();
  sprite.update();
  sgame.drawSprites();

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
