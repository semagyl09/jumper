kaboom();

const GRAVITY = 3200;
const WIDTH = width();
const HEIGHT = height();

const BACKGROUND_COLOR = Color.fromHex('b6e5ea');
const PIPE_COLOR = Color.fromHex('#74c02e');

const PIPE_WIDTH = 64;
const PIPE_BORDER = 4;
const PIPE_OPEN = 245;
const PIPE_MIN_HEGHT = 60;
const JUMP_FORCE = 800;
const SPEED = 320;
const CEILING = -60;

loadSprite("bird", "/png/bird.png")

loadSound("score","/png/score.mp3")
loadSound("jump","/png/jump.mp3")
loadSound("hit","/png/hit.mp3")

setGravity(GRAVITY);

setBackground(BACKGROUND_COLOR)


const startGame = () => {
    go("game");
}

scene("game", () => {
   let score = 0

   const game = add([timer()]);

   const createBird = () => {
    const bird = game.add([
        sprite("bird"),
        pos(WIDTH/4, 0),
        area(),
        body(),
    ])

    return bird;
   } 

   const bird = createBird();
   });

scene("lose", () => {});

startGame();

