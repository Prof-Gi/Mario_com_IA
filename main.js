function preload() {
	 
	mario_jump = loadSound("jump.wav"); /* 143. 1. */
	mario_coin = loadSound("coin.wav"); /* 143. 4. */
	mario_gameover = loadSound("gameover.wav");  /* 143. 7. */
	mario_kick = loadSound("kick.wav"); /* 143. 10. */
	mario_die = loadSound("mariodie.wav"); /* 143. 13. */
	world_start = loadSound("world_start.wav"); 
	setSprites(); 
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas'); /* Aula 139 */

	instializeInSetup(mario);
	
	video = createCapture(VIDEO); /* 141. */
	video.size(800,400); /* 141. */
	video.parent('gameConsole'); /* 141. */

	poseNet = ml5.poseNet(video, modelLoaded); /* 141. */
	poseNet.on('pose', gotPoses); /* 141. */

}

function modelLoaded() /* 141. */
{
	console.log('Modelo Carregado!');
}

  function gotPoses(results) /* 141. */
  {
	if(results.length > 0)
	{
	  console.log(results);
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	}
  }
   
function draw() {
	game();
}






