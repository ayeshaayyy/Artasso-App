var screen2, button2;

function preload() {
  screen3 = loadImage('./assets/Forgot Password.png');
  bottom3 = loadImage('./assets/FPBottom.png');
  button3 = loadImage('./assets/ConfirmButton.png');
  text1 = loadImage('./assets/Login.svg'); 
}

function setup() {
    createCanvas(375, 812);
    link = createA('EnterOTP.html', '');
    link2 = createA('LoginScreen.html', '');
 


}
function draw() {
 // text ('Hello', 10, 30);
 // fill (255,0,0);
 image (screen3, 0, 0, 375, 812);
 image (bottom3, 0, 250, 375, 566);
 //image (text1, 222, 703, 115, 19);

 img = createImg('./assets/ConfirmButton.png').parent(link);
 img.position(0,755);
 img.size(375,60);

 img = createImg('./assets/Login.svg').parent(link2);
 img.position(242,709);
 img.size(39,18);
}
