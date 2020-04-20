class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        this.background = this.add.image(0,0,"background");
        this.background.setOrigin(0,0);

        this.recycle = this.add.image(75,75,"recycle");
        this.trojan =this.add.image(75,215,"trojan");
        this.root = this.add.image(75,295,"root");
        this.spy = this.add.image(75,365,"spy");
        this.virusicon = this.add.image(75,435,"virusicon");
        this.worm = this.add.image(75,505,"worm");
        this.ransom = this.add.image(175,75,"ransom");
        this.keylog = this.add.image(175,145,"keylog");
        this.dos = this.add.image(175,215,"dos");
        this.adware = this.add.image(75,145,"adware");
    }
}