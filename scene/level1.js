class Level1 extends Base {
    constructor(){
        
        super("floor four level 2","level1")
    }

    onEnter() {


        this.left_choice_text = `go to next level`
        this.right_choice_text = `go to next level`

        this.changeText(this.eventText, `Dungeon first level, Through the  maze, Drag the card left and right to move to the next scene

Click the number key 9 to enter the bad ending

Click the number key 0 to enter the true ending`);

        this.card.setTexture("maze");

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
            this.gotoScene("floor four level 3");
        })    
    }

}