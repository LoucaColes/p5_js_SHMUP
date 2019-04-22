let spawnRate = 3;
let spawnTimer = 0;
let spawnAmount = 3;

class EnemyShipObjectPool{  
  constructor(_objectPool) {
    this.shipCount = 10;
    this.ships = [];
    this.bulletObjectPool = _objectPool;
    for (let i = 0; i < this.shipCount; i++) {
    	this.ships.push(new NormalEnemyShip(0, 0, 30, 3, 3, 'Sprites/enemyRed1.png', 'Sprites/spaceEffects_006Flipped.png'));
  	}
    
    for (let j = 0; j < spawnAmount; j++)
    {
      this.spawn(random(50, 350), 0);
    }
    
    spawnTimer = spawnRate;
  }
  
  tick()
  {
    spawnTimer -= 0.01;
    if (spawnTimer < 0)
    {
      for (let j = 0; j < spawnAmount; j++)
    {
      this.spawn(random(50, 350), 0);
    }
      spawnTimer = spawnRate;
    }
  }
  
  reset() {
    for (let i = 0; i < this.ships.length; i++) {
      this.ships[i].reset();
  	}
    spawnAmount = 3;
  }
  
  spawn(_x, _y)
  {
    for (let i = 0; i < this.ships.length; i++) {
      if(!this.ships[i].IsAlive())
      {
       	this.ships[i].spawn(_x, _y);
        break;
      }
  	}
  }
  
  move() {
		for (let i = 0; i < this.ships.length; i++) {
      if(this.ships[i].IsAlive())
      {
      	this.ships[i].move();
      }
  	}
  }

  display() {
    for (let i = 0; i < this.ships.length; i++) {
      if(this.ships[i].IsAlive())
      {
      	this.ships[i].display();
      }
  	}
  }
  
  checkForCollision(_object)
  {
    
    for (let i = 0; i < this.ships.length; i++) {
      if(this.ships[i].IsAlive())
      {
      	if((this.ships[i].x < _object.x + _object.size &&
              this.ships[i].x + this.ships[i].size > _object.x &&
              this.ships[i].y < _object.y + _object.size &&
              this.ships[i].y + this.ships[i].size > _object.y) &&
           		_object.IsAlive())
        {
          this.ships[i].alive = false;
          if (_object.tag == "Player")
          {
          	lives--;
            flashScreen((255, 0, 0));
            explosion(_object.x, _object.y);
            if (lives <= 0)
            {
              _object.alive = false;
              lives = 0;
              gameState = 2;
            }
          }
        	break;
        }
      }
  	}
  }
  
  increaseSpawnAmount()
  {
    spawnAmount++;
  }
}