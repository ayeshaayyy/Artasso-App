function preload() {
    screen = loadImage('./assets/Succ created.png');
    button = loadImage('./assets/Back to Exhibition.svg');
      
    }
    
    function setup() {
        createCanvas(375, 812);
       link = createA('./YourExhibition.html', '');
        
    
    
    }
    function draw() {
     // fill (255,0,0);
    image (screen, 0, 0, 375, 812);
    
    // Button
    img = createImg('./assets/Back to Exhibition.svg').parent(link);
    img.position(84,460);
    img.size(207,19);
    }
    