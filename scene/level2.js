class Level2 extends Base {
    constructor(){
        
        super("level2","level2")
    }

    onEnter() {


        this.left_choice_text = `go to next level`
        this.right_choice_text = `go to next level`

        this.changeText(this.eventText, `Second Level`);

        this.dragrotate(this.card);

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
        this.rotateOutAndMakeNewCard("elf");
        
        this.openDoor.play();

        this.time.delayedCall(1000, () => {
            this.gotoScene("level3");
        })    
    }

}