
var yloc, ySpeed;

// import all the images
function preload() {
    screen1 = loadImage('./assets/Splash screen.png');
    logo = loadImage('./assets/logo.png');
    button1 = loadImage('./assets/Button.png');
    
      
    }
function setup() {
    createCanvas(375, 812);
// create a link
    link = createA('./LoginScreen.html', '');
// define image y location and speed
   yloc = 800;
   ySpeed = 4;
   }
   
   function draw() {
    // call image and logo on screen
    image (screen1, 0, 0, 375, 812);
    image (logo, 73, yloc, 230, 230);
    // logo moves up
    yloc = yloc + ySpeed;
     if(yloc>600) {
      ySpeed = -5;
     }
     if(yloc<300) {
      ySpeed = 0;
     }
    // calling button image and setting up link, size and position
     img = createImg('./assets/Button.png').parent(link);
     img.position(0,750);
     img.size(375,60);
   }