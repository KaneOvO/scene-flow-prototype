# scene-flow-prototype

A prototype of a game scene flow, simulating the general flow of the game

Scene types: 

After the opening animation the player enters the main menu, in the main menu you can enter the game scene, credits scene. 

click on the gear in the upper right corner to enter the setup scene

Communication between scenes:

We record several variables in SaveData.json that can be recorded in-game, including the player's HP, and whether certain items were obtained, 

whether the save sprite event was reached, and the in-game volume setting.

However, in this prototype, the communication about the play part cannot be verified because our scenario does not contain the actual game content.

But you can verify the volume adjustment by clicking the gear in the upper right corner, and even if you change the scene after the adjustment, the 

previous settings are still preserved.

Reachability:

Contains all the scenes in the game, i.e. the 123rd floor of the dungeon. The game has two endings, in click 9 to enter the bad ending and click 0 to enter the true ending.

Transitions:

All scene transitions are based on tween animations to create fade in and fade out effects

