// Load all audio files
// Control music volume
// Control sfx volume
// Play bgm on loop
// Play sfx on function call

class AudioManager
{
  constructor()
  {
    // Load all bgm files
    this.bgm = loadSound('Audio/SpaceCadet.ogg');
    
    // Load all sfx files
    this.explosionSFX = [];
    this.laserSFX = [];
    this.engineSFX = [];
    
    for (let i = 1; i < 6; i++)
    {
      let sfx = loadSound('Audio/explosion'+i+'.ogg');
      this.explosionSFX.push(sfx);
      let laserSfx = loadSound('Audio/laser'+i+'.ogg');
      this.laserSFX.push(laserSfx);
      let engine = loadSound('Audio/engine'+i+'.ogg');
      this.engineSFX.push(engine);
    }
    
    // Set the master volume to 1
    this.volume = 1;
    this.explosionVolume = 0.2;
    this.laserVolume = 0.2;
    this.engineVolume = 0.2;
    
    // Set all sound volumes to the master volume
    this.bgm.setVolume(this.volume);
    for (let i = 0; i < 5; i++)
    {
      this.explosionSFX[i].setVolume(this.volume * this.explosionVolume);
      this.laserSFX[i].setVolume(this.volume * this.laserVolume);
      this.engineSFX[i].setVolume(this.volume * this.engineVolume);
    }
    
    this.enginePlaying = false;
    this.engineSound = null;
  }
  
  MuteUnmuteAudio()
  {
    if (this.volume == 1)
    {
      this.volume = 0;
      this.bgm.setVolume(this.volume);
      for (let i = 0; i < 5; i++)
      {
        this.explosionSFX[i].setVolume(this.volume * this.explosionVolume);
      this.laserSFX[i].setVolume(this.volume * this.laserVolume);
      this.engineSFX[i].setVolume(this.volume * this.engineVolume);
      }
    }
    else
    {
      this.volume = 1;
      this.bgm.setVolume(this.volume);
      for (let i = 0; i < 5; i++)
      {
        this.explosionSFX[i].setVolume(this.volume * this.explosionVolume);
      this.laserSFX[i].setVolume(this.volume * this.laserVolume);
      this.engineSFX[i].setVolume(this.volume * this.engineVolume);
      }
    }
    
  }
  
  PlayBGM()
  {
    this.bgm.setLoop(true);
    this.bgm.play();
  }
  
  PlayExplosion()
  {
    let sfx = random(this.explosionSFX);
    sfx.play();
  }
  
  PlayLaser()
  {
    let sfx = random(this.laserSFX);
    sfx.play();
  }
  
  PlayEngine()
  {
    if (!this.enginePlaying)
    {
      let sfx = this.engineSFX[1];
      sfx.setLoop(true);
      sfx.play();
      this.enginePlaying = true;
      this.engineSound = sfx;
    }
  }
  
  StopEngine()
  {
    this.engineSound.stop();  
  }
}