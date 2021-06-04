//* all DOM selection
var gameBoard = {
  player: document.querySelector(".player"),
  key: document.querySelector(".key"),
  prison: document.querySelector(".prison"),
  life: document.querySelector(".life"),
  lifeAlert: document.querySelector(".life-alert"),
  gameOver: document.querySelector(".game-over"),
  mainBoard: document.querySelector(".game-board")
}

//* declare dafault life value
var life = 100;

//* declare default player position
var pTop = 64, pLeft = 0;


//* life function
function Life() {
  life -= 10;
  gameBoard.life.style.width = life.toString() + "%";

  //! Low LIFE alert condition
  if (life <= 30) {
    gameBoard.lifeAlert.style.animationName = "life-alert-anim";
  }

  //! GAME OVER condition
  if (life <= 0) {
    gameBoard.gameOver.style.display = "flex";
    gameBoard.mainBoard.style.filter = "grayscale(1)"
  }
}

//! GAME WIN function
function gameWin() {
  if (gameBoard.prison.style.display == "none") {
    gameBoard.gameOver.innerHTML = "GAME WIN"
    gameBoard.gameOver.style.color = "#00ff00"
    gameBoard.gameOver.style.display = "flex";
    gameBoard.mainBoard.style.filter = "grayscale(0)"
    gameBoard.lifeAlert.style.animationName = "";
  }
}

//* controller function
function up() {
  Life()
  //! condition for --> W
  if (pTop == 64 && pLeft == 32) {
    pTop = 64;
  } else if (pTop == 0) {
    pTop = 0;
  } else {
    pTop -= 32;
  }

  gameBoard.player.style.top = pTop.toString() + "vmin";
  gameWin()
}

function down() {
  Life()
  //! condition for --> S
  if (pTop == 32 && pLeft == 64) {
    pTop = 32;
  } else if (pTop == 0 && pLeft == 32) {
    pTop = 0;
  } else if (pTop == 0 && pLeft == 64) {
    pTop = 0;
  } else if (pTop == 64) {
    pTop = 64;
  } else {
    pTop += 32;
  }

  //! condition for UNLOCK PRISON
  if (gameBoard.key.style.display == "none" && pTop == 0 && pLeft == 64) {
    pTop += 32;
    gameBoard.prison.style.display = "none"
  }

  gameBoard.player.style.top = pTop.toString() + "vmin";
  gameWin()
}

function left() {
  Life()
  //! condition for --> A
  if (pTop == 32 && pLeft == 64) {
    pLeft = 64;
  } else if (pLeft == 0) {
    pLeft = 0;
  } else {
    pLeft -= 32;
  }

  gameBoard.player.style.left = pLeft.toString() + "vmin";
  gameWin()
}

function right() {
  Life()
  //! condition for --> D
  if (pTop == 64 && pLeft == 32) {
    pLeft = 32;
  } else if (pTop == 32 && pLeft == 0) {
    pLeft = 0;
  } else if (pLeft == 64) {
    pLeft = 64;
  } else {
    pLeft += 32;
  }

  //! condition for KEY COLLECT
  if (pTop == 64 && pLeft == 32) {
    gameBoard.key.style.display = "none"
  }

  gameBoard.player.style.left = pLeft.toString() + "vmin";
  gameWin()
}
