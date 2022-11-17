function preload() {
    screen = loadImage('./assets/Create exhibition page.png');
    button = loadImage('./assets/Create Exhibition button.png');
  
      
    }
    
    function setup() {
        createCanvas(375, 812);
       link = createA('./SuccCreated.html', '');
    
        
    
    
    }
    function draw() {
     // fill (255,0,0);
    image (screen, 0, 0, 375, 812);
    
    // Button
    img = createImg('./assets/Create Exhibition button.png').parent(link);
    img.position(0,755);
    img.size(375,60);
    }
    