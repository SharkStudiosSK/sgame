
const sgame = {};

sgame.canvas = null;
sgame.ctx = null;
sgame.sprites = [];

sgame.init = function(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext('2d');
};

sgame.spawnSprite = function(imgSrc, x, y, width, height) {
  const sprite = {
    img: new Image(),
    x: x,
    y: y,
    width: width,
    height: height
  };

  sprite.img.src = imgSrc;

  this.sprites.push(sprite);

  return sprite;
};

sgame.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

sgame.drawSprites = function() {
  this.sprites.forEach(sprite => {
    this.ctx.drawImage(sprite.img, sprite.x, sprite.y, sprite.width, sprite.height);
  });
};

sgame.addHorizontalMovement = function(sprite, speed) {
  const keysPressed = {};

  sprite.canvas.addEventListener('keydown', event => {
    keysPressed[event.key] = true;
  });

  sprite.canvas.addEventListener('keyup', event => {
    keysPressed[event.key] = false;
  });

  sprite.update = () => {
    if (keysPressed['a']) {
      sprite.x -= speed;
    } else if (keysPressed['d']) {
      sprite.x += speed;
    }
  };
};

sgame.addDiagonalMovement = function(sprite, speed) {
  const diagonalSpeed = Math.sqrt(speed * speed / 2);
  const keysPressed = {};

  document.addEventListener('keydown', event => {
    keysPressed[event.key] = true;
  });

  document.addEventListener('keyup', event => {
    keysPressed[event.key] = false;
  });

  sprite.update = () => {
    if (keysPressed['w'] && keysPressed['d']) {
      sprite.y -= diagonalSpeed;
      sprite.x += diagonalSpeed;
    } else if (keysPressed['w'] && keysPressed['a']) {
      sprite.y -= diagonalSpeed;
      sprite.x -= diagonalSpeed;
    } else if (keysPressed['s'] && keysPressed['a']) {
      sprite.y += diagonalSpeed;
      sprite.x -= diagonalSpeed;
    } else if (keysPressed['s'] && keysPressed['d']) {
      sprite.y += diagonalSpeed;
      sprite.x += diagonalSpeed;
    } else if (keysPressed['w']) {
      sprite.y -= speed;
    } else if (keysPressed['a']) {
      sprite.x -= speed;
    } else if (keysPressed['s']) {
      sprite.y += speed;
    } else if (keysPressed['d']) {
      sprite.x += speed;
    }
  };
};

export default sgame;
