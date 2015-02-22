// font size.
var FONT = 32;

// map dimensions.
var ROWS = 10;
var COLS = 15;

// number of actors per level, including player.
var ACTORS = 10;

// initialise phaser, call create() once done.
var game = new Phaser.Game(COLS * FONT * 0.6, ROWS * FONT, Phaser.AUTO, null, {
	create: create
});

function create() {
	// init keyboard commands.
	game.input.keyboard.addCallbacks(null, null, onKeyUp);
}

function onKeyUp(event) {
	switch (event.keyCode) {
		case Keyboard.LEFT:
			
		case Keyboard.RIGHT:
			
		case Keyboard.UP:
			
		case Keyboard.DOWN:
			
	}
}