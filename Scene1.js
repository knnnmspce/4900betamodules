//inheretence that grabs all the characteristics of the predecessor class Scene from  Phaser
class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    //load images into memory
    preload() {
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
        //this.load.image("anti", "Assets/images/anti.png");
    }

    //add text at x and y values of 20 and 20 respectively then load next scene (happens instantly so we don't see this scene)
    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}