let bulletCount = 25;
let bullets = [];

class BulletObjectPool{
  constructor() {
    for (let i = 0; i < bulletCount; i++) {
    	bullets.push(new Bullet(0, 0));
  	}
  }

  reset() {
    for (let i = 0; i < bullets.length; i++) {
      bullets[i].reset();
  	}
  }
  
  spawn(_x, _y)
  {
    for (let i = 0; i < bullets.length; i++) {
      if(!bullets[i].IsAlive())
      {
       	bullets[i].spawn(_x, _y);
        break;
      }
  	}
  }
  
  move() {
		for (let i = 0; i < bullets.length; i++) {
      bullets[i].move();
  	}
  }

  display() {
    for (let i = 0; i < bullets.length; i++) {
      bullets[i].display();
  	}
  }
  
  checkForCollision(_object)
  {
    
    for (let i = 0; i < bullets.length; i++) {
      if(bullets[i].IsAlive())
      {
      	if((bullets[i].x < _object.x + _object.size &&
              bullets[i].x + bullets[i].sizeX > _object.x &&
              bullets[i].y < _object.y + _object.size &&
              bullets[i].y + bullets[i].sizeY > _object.y) &&
           		_object.IsAlive())
        {
          bullets[i].alive = false;
          if (_object.tag == "Enemy")
          {
            _object.TakeDamage(1);
          	score++;
            flashScreen(255);
            explosion(bullets[i].x, bullets[i].y);
          }
        	break;
        }
      }
  	}
  }
}