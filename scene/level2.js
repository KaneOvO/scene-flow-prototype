class Level2 extends Base {
    constructor(){
        
        super("floor four level 3","level2")
    }

    onEnter() {


        this.left_choice_text = `go to next level`
        this.right_choice_text = `go to next level`

        this.changeText(this.eventText, `Dungeon second Level, Save the Elf Hunter

Click the number key 9 to enter the bad ending

Click the number key 0 to enter the true ending`);

        this.dragrotate(this.card);

        this.card.setTexture("elf");

        this.scene_turn = 1;


    }

    //递归函数，用于实现while loop
    judgeChoice() {
        if (this.player_choice != "") {
            if (this.scene_turn == 1) {
                this.action1();
            }
        }
    }

    action1() {
        this.rotateOutAndMakeNewCard("dragon_normal");
        
        this.openDoor.play();

        this.time.delayedCall(1000, () => {
            this.gotoScene("floor four level 4");
        })    
    }

}