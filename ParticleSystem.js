let particleCount = 10;
let particles = [];

class ParticleSystem{
  constructor() {
    for (let i = 0; i < particleCount; i++) {
    	particles.push(new Particle(0, 0, 1));
  	}
    this.playing = false;
  }

  IsPlaying()
  {
    return this.playing;
  }
  
  ParticleCount()
  {
    return particleCount;
  }
  
  reset() {
    for (let i = 0; i < particles.length; i++) {
      particles[i].reset();
  	}
  }
  
  spawn(_x, _y, _size, _dirX, _dirY, _moveSpeed, 
         _lifeTime, _colour, _colourFade, _fadeSpeed,
         _sizeChange)
  {
    for (let i = 0; i < particles.length; i++) {
      if(!particles[i].IsAlive())
      {
       	particles[i].spawn(_x, _y, _size, _dirX, _dirY,
                           _moveSpeed, _lifeTime, _colour,
                           _colourFade, _fadeSpeed, _sizeChange);
        break;
      }
  	}
  }
  
  move() {
		for (let i = 0; i < particles.length; i++) {
      particles[i].move();
  	}
  }

  display() {
    for (let i = 0; i < particles.length; i++) {
      particles[i].display(true);
  	}
  }
}