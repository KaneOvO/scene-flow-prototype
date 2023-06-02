const game = new Phaser.Game({
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.ScaleModes.FIT,
        // mode: Phaser.Scale.ScaleModes.ENVELOP,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    physics: {
        default: 'matter',
        matter: {
            gravity: {
                y: 0
            },
            debug: true
        }
    },
    ////scene: [baseBattle],
    //scene: [secondFloorLevel3],
    scene: [
        openning,
        warnning,
        credit,
        title,
        Level1,
        Level2,
        Level3,
    ],
    backgroundColor: 0x000000,
    title: "Game",
});

