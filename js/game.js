// create a new scene named "Game"
let gameScene = new Phaser.Scene('Game');


// some parameters for our scene
gameScene.init = function() {

  this.enableMoveDog = false;
}

// load asset files for our game
gameScene.preload = function() {
  
  // load images
  this.load.image('corral', 'assets/images/corral.png');
  this.load.image('dog', 'assets/images/dog.png');
};

// executed once, after assets were loaded
gameScene.create = function() {
  
  // background
  let corral = this.add.sprite(0, 0, 'corral');
  // change origin to the top-left of the sprite
  corral.setOrigin(0, 0);
  
  // dog
  this.dog = this.add.sprite(64, 64, 'dog');
  // change origin to the top-left of the sprite
  this.dog.setOrigin(0, 0);
  
  //move the dog with arrow keys
  this.cursors = this.input.keyboard.createCursorKeys();
  this.enableMoveDog = true;
};

// executed on every frame (60 times per second)
gameScene.update = function() {

  if(this.enableMoveDog){
    
    if (this.cursors.left.isDown){
      
      this.dog.x-=32;
      this.enableMoveDog = false;
    }else if(this.cursors.right.isDown){
      
      this.dog.x+=32;
      this.enableMoveDog = false;      
    }else if(this.cursors.up.isDown){
      
      this.dog.y-=32;
      this.enableMoveDog = false;      
    }else if(this.cursors.down.isDown){
      
      this.dog.y+=32;
      this.enableMoveDog = false;      
    }
  }
};

// our game's configuration
let config = {
  type: Phaser.AUTO,
  width: 608,
  height: 544,
  scene: gameScene
};

// create the game, and pass it the configuration
let game = new Phaser.Game(config);
