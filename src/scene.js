const game = new Phaser.Game({
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.ScaleModes.FIT,
        // mode: Phaser.Scale.ScaleModes.ENVELOP,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [
        debug_scene,
        openning,
        warnning,
        title,
        firstFloorLevel0,
        Level1,
        Level2,
        Level3,
        thirdFloorLevel4,
        thirdFloorLevel5,
        reborn,
        credit
    ],
    backgroundColor: 0x000000,
    title: "Game",
});

