// game screen size variables
let width = 300;
let height = 500;

// Game objects
let ship;
let bulletObjectPool;
let enemyShipObjectPool;

// Game data variables
let score = 0;
let lives = 3;
let goal = 1;
let highscore = 0;

// Particle system variables
let particleSystemCount = 5;
let particleSystems = [];

// Title text tweening variables
let titleMaxSize = 40;
let titleMinSize = 30;
let titleSize = 35;
let titleIncreaseAmount = 1;
let titleIncreaseSpeed = 0.25;

// BGM
let song;

/*
 * Game state
 * 0 - Set Up
 * 1 - Play
 * 2 - Game Over;
 */
let gameState = 0;

function preload()
{
  song = loadSound('Audio/SpaceCadet.ogg');
}

// Initialise
function setup() {
  createCanvas(300, 500);
  background('#222222');

  song.setLoop(true);
  song.play();

  bulletObjectPool = new BulletObjectPool();
  ship = new Ship(width / 2, 2 * (height / 3), bulletObjectPool, width, height);
  enemyShipObjectPool = new EnemyShipObjectPool(bulletObjectPool);

  for (let i = 0; i < particleSystemCount; i++) {
    particleSystems.push(new ParticleSystem());
  }
  titleSize = titleMinSize;
  titleIncreaseAmount = 1;
}

function draw() {
  // redraw background
  background('#222222');
  
  // if game state is play
  if (gameState == 1) {
    // move the player
    if (ship.IsAlive()) {
      ship.move();
      // draw the player
      ship.display();
    }

    // update the bullets
    bulletObjectPool.move();
    // draw the bullets
    bulletObjectPool.display();

    // tick the enemy ship object pool
    enemyShipObjectPool.tick();
    // update the enemy ships
    enemyShipObjectPool.move();
    // draw the enemy ships
    enemyShipObjectPool.display();

    for (let i = 0; i < particleSystemCount; i++) {
      // update the particles
      particleSystems[i].move();
      // draw the particles
      particleSystems[i].display();
    }

    // check for collisions
    checkForCollisions();

    if (score / 10 == goal) {
      goal++;
      enemyShipObjectPool.increaseSpawnAmount();
    }
  }


  // update the ui
  updateUI();
}

function keyPressed() {
  if (gameState == 0) {
    if (keyCode === 32) {
      gameState = 1;
      ship.respawn(width / 2, 2 * (height / 3));
      lives = 3;
      score = 0;
      bulletObjectPool.reset();
      enemyShipObjectPool.reset();
      for (let i = 0; i < particleSystemCount; i++) {
        // reset the particles
        particleSystems[i].reset();
    	}
    }
  } else if (gameState == 1) {
    // do nothing
  } else if (gameState == 2) {
    if (keyCode === 32) {
      gameState = 0;
    }
  }
}

function updateUI() {

  stroke(255);
  fill(255);
  textSize(28);

  if (gameState == 0) {
    textAlign(CENTER);
    textSize(titleSize);
    text("SPACE SHMUP", width / 2, (height / 2) - 60);
    textSize(28);
    text("By Louca Coles", width / 2, (height / 2) + 30);
    text("Press Space To Start", width / 2, (height / 2) + 90);
		updateTitleTextSize();

  } else if (gameState == 1) {
    textAlign(LEFT);
    text("Score: " + score, 10, 30);
    text("Lives: " + lives, 10, 60);
  } else if (gameState == 2) {
    if (score > highscore) {
      highscore = score;
    }
    textAlign(CENTER);
    text("GAME OVER", width / 2, (height / 2));
    text("Score: " + score, width / 2, (height / 2) + 30);
    text("High Score: " + highscore, width / 2, (height / 2) + 60);
  }


}

function updateTitleTextSize() {
  titleSize += (titleIncreaseAmount * titleIncreaseSpeed);
  if (titleSize > titleMaxSize) {
    titleIncreaseAmount = -1;
  } else if (titleSize < titleMinSize) {
    titleIncreaseAmount = 1;
  }
}

// TODO write better/more reliable collision detection
// Check for a collision for each object
function checkForCollisions() {
  // Check for player based collisions
  enemyShipObjectPool.checkForCollision(ship);

  // Check for enemy ship based collisions
  for (let i = 0; i < enemyShipObjectPool.ships.length; i++) {
    bulletObjectPool.checkForCollision(enemyShipObjectPool.ships[i]);
  }
}

// Flash the screen a specific colour
function flashScreen(_color) {
  fill(_color);
  rect(0, 0, 400, 600);
}

function explosion(_xPos, _yPos) {
  for (let index = 0; index < particleSystemCount; index++) {
    if (!particleSystems[index].IsPlaying()) {
      let particleCount = particleSystems[index].ParticleCount();
      let xDir = 0;
      let yDir = 0;
      for (let i = 0; i < particleCount; i++) {
        xDir = random(-1, 1);
        yDir = random(-1, 1);
        particleSystems[index].spawn(_xPos, _yPos, 10, xDir,
                                     yDir, 1, 5, '#f46b42',
                                     true, 5, -0.01);
      }
      break;
    }
  }
}