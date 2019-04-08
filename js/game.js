// create a new scene named "Game"
let gameScene = new Phaser.Scene('Game');


// some parameters for our scene
gameScene.init = function() {

}

// load asset files for our game
gameScene.preload = function() {
  
};

// executed once, after assets were loaded
gameScene.create = function() {
  
};

// executed on every frame (60 times per second)
gameScene.update = function() {

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
