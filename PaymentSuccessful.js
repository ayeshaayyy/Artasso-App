function preload() {
    screen = loadImage('./assets/payment success page.png');
    button = loadImage('./assets/Go back home.png');
      
    }
    
    function setup() {
        createCanvas(375, 812);
       link = createA('./HomeScreen.html', '');
       
        
    
    
    }
    function draw() {
     // fill (255,0,0);
    image (screen, 0, 0, 375, 812);
    

    // Button
     img = createImg('./assets/Go back home.png').parent(link);
     img.position(0,750);
     img.size(375,60);
    }
    