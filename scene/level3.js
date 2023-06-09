class Level3 extends Base {
    constructor(){
        
        super("floor four level 4","level3")
    }

    onEnter() {


        this.left_choice_text = `return to main menu`
        this.right_choice_text = `return to main menu`

        this.changeText(this.eventText, `Dungeon third Level, battle with dragon

Click the number key 9 to enter the bad ending

Click the number key 0 to enter the true ending`);

        this.dragrotate(this.card);

        this.card.setTexture("dragon_normal");

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
            this.gotoScene("title");
        })    
    }

}