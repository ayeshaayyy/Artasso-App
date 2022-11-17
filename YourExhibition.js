function preload() {
    screen = loadImage('./assets/Your exhibition.png');
    back = loadImage('./assets/back arrow.png');
      
    }
    
    function setup() {
        createCanvas(375, 812);
       link = createA('./ArtExPage.html', '');
        
    
    
    }
    function draw() {
     // fill (255,0,0);
    image (screen, 0, 0, 375, 812);
    
    // Back button
    img = createImg('./assets/back arrow.png').parent(link);
    img.position(21,58);
    img.size(25,25);
    }
    