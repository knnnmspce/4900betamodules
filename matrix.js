var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 625,
    backgroundColor: 0x000000,
    scene: {
        preload: preload,
        create: create
    },
    physics: {
        default: "arcade",
        arcade:{
            gravity: 0
        }
    }
};

//create a new instance of a Phaser game
var game = new Phaser.Game(config);

function preload () {

    this.load.image('background', 'Assets/images/Animated-Background.gif');

}