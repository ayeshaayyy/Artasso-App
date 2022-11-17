var screen2, button2;

function preload() {
  screen = loadImage('./assets/Register Artist.png');
  button = loadImage('./assets/RegButton.png');
  text = loadImage('./assets/Collector.svg'); 
  text1 = loadImage('./assets/Login.svg'); 
}

function setup() {
    createCanvas(375, 812);
    link = createA('RegisterC.html', '');
    link2 = createA('LoginScreen.html', '');
    link3 = createA('ArtExPage.html', '');
 


}
function draw() {
  //text ('Hello', 10, 30);
 // fill (255,0,0);
 image (screen, 0, 0, 375, 812);


 img = createImg('./assets/Login.svg').parent(link2);
 img.position(235,728);
 img.size(47,16);

 img = createImg('./assets/RegButton.png').parent(link3);
 img.position(0,755);
 img.size(375,60);

 img = createImg('./assets/Collector.svg').parent(link);
 img.position(280,231);
 img.size(65,19);
 img.color(0,0,0, 15);
}
