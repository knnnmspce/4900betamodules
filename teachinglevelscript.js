var GameScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:
      
    function GameScene () {

        Phaser.Scene.call(this, { key: 'GameScene'});

    },

    preload: function() {

        this.load.image("background", "Assets/images/bck.png");
        this.load.image("recycle", "Assets/images/recycle.png");
        this.load.image("trojan", "Assets/images/trojan.png");
        this.load.image("keylog", "Assets/images/keylog.png");
        this.load.image("dos", "Assets/images/dos.png");
        this.load.image("spy", "Assets/images/spy.png");
        this.load.image("root", "Assets/images/root.png");
        this.load.image("virusicon", "Assets/images/virusicon.png");
        this.load.image("ransom", "Assets/images/ransom.png");
        this.load.image("adware", "Assets/images/adware.png");
        this.load.image("worm", "Assets/images/worm.png");
        this.load.image("antivirus", "Assets/images/antivirus.png");

        this.load.image("ransomalert", "Assets/images/ransomalert.png");
        this.load.image("adalert", "Assets/images/adalert.png");
        this.load.image("spyalert", "Assets/images/spyalert.png");
        this.load.image("trojanalert", "Assets/images/trojanalert.png");
        this.load.image("botalert", "Assets/images/botalert.png");
        this.load.image("virusalert", "Assets/images/virusalert.png");
        this.load.image("rootalert", "Assets/images/rootalert.png");
        this.load.image("keyalert", "Assets/images/keyalert.png");
        this.load.image("wormalert", "Assets/images/wormalert.png");
        this.load.image("alert", "Assets/images/ransomalert.png");
        this.load.image("recyclealert", "Assets/images/recyclealert.png");

        this.load.image("hitbox", "Assets/images/hitbox.png");

    },
    
    create: function() {

        this.add.image(0,0,"background").setOrigin(0,0);

        var antivirus = this.physics.add.sprite(700,300,"antivirus").setInteractive();
        var hitbox = this.physics.add.sprite(670,300,"hitbox").setInteractive();
    
        var recycle = this.physics.add.sprite(75,75,"recycle").setInteractive();
        this.input.setDraggable(recycle);
        var recyclealert = this.add.sprite(700,300,"recyclealert").setInteractive();
        recyclealert.visible = false;
        recyclealert.once('pointerdown', function (){
            
            recyclealert.visible= false;

        }, this);
         this.physics.add.overlap(recycle, hitbox, function (){

            recyclealert.visible = true;
            recycle.destroy();
        
         });          

        var trojan = this.physics.add.sprite(75,215,"trojan").setInteractive();
        this.input.setDraggable(trojan);
        var trojanalert = this.add.sprite(700,300,"trojanalert").setInteractive();
        trojanalert.visible = false;
        trojanalert.once('pointerdown', function (){
            
            trojanalert.visible= false;

        }, this);
         this.physics.add.overlap(trojan, hitbox, function (){

            trojanalert.visible = true;
            trojan.destroy();
        
         });  
    
        var root = this.physics.add.sprite(75,295,"root").setInteractive();
        this.input.setDraggable(root);
        var rootalert = this.add.sprite(700,300,"rootalert").setInteractive();
        rootalert.visible = false;
        rootalert.once('pointerdown', function (){
            
            rootalert.visible= false;

        }, this);
         this.physics.add.overlap(root, hitbox, function (){

            rootalert.visible = true;
            root.destroy();
        
         });  
    
        var spy = this.physics.add.sprite(75,365,"spy").setInteractive();
        this.input.setDraggable(spy);
        var spyalert = this.add.sprite(700,300,"spyalert").setInteractive();
        spyalert.visible = false;
        spyalert.once('pointerdown', function (){
            
            spyalert.visible= false;

        }, this);
         this.physics.add.overlap(spy, hitbox, function (){

            spyalert.visible = true;
            spy.destroy();
        
         });  
    
        var virusicon = this.physics.add.sprite(75,435,"virusicon").setInteractive();
        this.input.setDraggable(virusicon);
        var virusalert = this.add.sprite(700,300,"virusalert").setInteractive();
        virusalert.visible = false;
        virusalert.once('pointerdown', function (){
            
            virusalert.visible= false;

        }, this);
         this.physics.add.overlap(virusicon, hitbox, function (){

            virusalert.visible = true;
            virusicon.destroy();
        
         });  
    
        var worm = this.physics.add.sprite(75,505,"worm").setInteractive();
        this.input.setDraggable(worm);
        var wormalert = this.add.sprite(700,300,"wormalert").setInteractive();
        wormalert.visible = false;
        wormalert.once('pointerdown', function (){
            
            wormalert.visible= false;

        }, this);
         this.physics.add.overlap(worm, hitbox, function (){

            wormalert.visible = true;
            worm.destroy();
        
         });  
    
        var ransom = this.physics.add.sprite(175,75,"ransom").setInteractive();
        this.input.setDraggable(ransom);
        var ransomalert = this.add.sprite(700,300,"ransomalert").setInteractive();
        ransomalert.visible = false;
        ransomalert.once('pointerdown', function (){
            
            ransomalert.visible= false;

        }, this);
         this.physics.add.overlap(ransom, hitbox, function (){

            ransomalert.visible = true;
            ransom.destroy();
        
         });        
    
        var keylog = this.physics.add.sprite(175,145,"keylog").setInteractive();
        this.input.setDraggable(keylog);
        var keyalert = this.add.sprite(700,300,"keyalert").setInteractive();
        keyalert.visible = false;
        keyalert.once('pointerdown', function (){
            
            keyalert.visible= false;

        }, this);
         this.physics.add.overlap(keylog, hitbox, function (){

            keyalert.visible = true;
            keylog.destroy();
        
         });  
    
        var dos = this.physics.add.sprite(175,215,"dos").setInteractive();
        this.input.setDraggable(dos);
        var botalert = this.add.sprite(700,300,"botalert").setInteractive();
        botalert.visible = false;
        botalert.once('pointerdown', function (){
            
            botalert.visible= false;

        }, this);
         this.physics.add.overlap(dos, hitbox, function (){

            botalert.visible = true;
            dos.destroy();
        
         });  
    
        var adware = this.physics.add.sprite(75,145,"adware").setInteractive();
        this.input.setDraggable(adware);
        var adalert = this.add.sprite(700,300,"adalert").setInteractive();
        adalert.visible = false;
        adalert.once('pointerdown', function (){
            
            adalert.visible= false;

        }, this);
         this.physics.add.overlap(adware, hitbox, function (){

            adalert.visible = true;
            adware.destroy();
        
         });

    
        this.input.dragDistanceThreshold = 16;
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
    
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

    },

    update: function () {

    }
});
    
//this.physics.add.overlap(this.ransom,this.antivirus, this.alertUser, null, this);
//function update() {}

//store the configuration of the game in a variable that will be passed on the creation of the game
var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 625,
    backgroundColor: 0x000000,
    scene: [GameScene],
    physics: {
        default: "arcade",
        arcade:{
            gravity: 0
        }
    }
};

//create a new instance of a Phaser game
var game = new Phaser.Game(config);