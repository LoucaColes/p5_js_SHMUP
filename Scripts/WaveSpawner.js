class WaveSpawner
{
  constructor(_normalEnemyOP, _fastEnemyOP)
  {
    this.normalEnemyOP = _normalEnemyOP;
    this.fastEnemyOP = _fastEnemyOP;
    this.normalCount = 12;
    this.fastCount = 2;
    this.updateSpawnCounts();
    this.spawnShips();
    this.spawnRate = 3;
    this.spawnTimer = this.spawnRate;
  }

  increaseSpawnCounts()
  {
    this.normalCount++;
    this.fastCount++;
  }
  
  updateSpawnCounts()
  {
    let newNormalCount = floor(Math.log2(this.normalCount));   
    this.normalEnemyOP.setSpawnAmount(newNormalCount);
    let newFastCount = floor(Math.log2(this.fastCount));
    this.fastEnemyOP.setSpawnAmount(newFastCount);
  }
  
  spawnShips()
  {
    this.normalEnemyOP.spawnShips();
    this.fastEnemyOP.spawnShips();
  }
  
  tick()
  {
    this.spawnTimer -= 0.01;
    if (this.spawnTimer < 0)
    {
      this.spawnShips();
      this.spawnTimer = this.spawnRate;
    }
  }
}