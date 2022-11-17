var screen2, button2;
var timer;
let value = 255;

function preload() {
  screen2 = loadImage('./assets/Login screen.png');
  bottom1 = loadImage('./assets/Loginbottom.png');
  button2 = loadImage('./assets/Button 2.png');
  text1 = loadImage('./assets/Create account.png'); 
  text2 = loadImage('./assets/Forgot Password.svg'); 
}

function setup() {
    createCanvas(375, 812);
    link = createA('RegisterC.html', '');
    link2 = createA('HomeScreen.html', '');
    link3 = createA('ForgotPassword.html', '');
    timer=0;
 


}
// creating a funtion to fill the input field
function mousePressed() {
  if (value === 0) {
    value = color(255,0,0);
  } else {
    value = text('ayeesha@gmail.com');
  }
}
function draw() {
 
// calling all images to canvas
 image (screen2, 0, 0, 375, 812);
 image (bottom1, 0, 150, 375, 662);

 fill(value);
 rect(29, 359, 318, 40, 10);
 

// cursor blink in an input field
 timer= timer + 5;
 if (timer==90) {
  timer=0;
 }
 if (timer > 0 && timer < 45) {
  fill (0,0,0)
  rect ( 49, 370, 1, 20);
 }

// linking buttond and images
 img = createImg('./assets/Forgot Password.svg').parent(link3);
 img.position(30,532);
 img.size(120,15);

 img = createImg('./assets/Button 2.png').parent(link2);
 img.position(0,755);
 img.size(375,60);

img = createImg('./assets/Create account.png').parent(link);
 img.position(222,708);
 img.size(109,10);
}


