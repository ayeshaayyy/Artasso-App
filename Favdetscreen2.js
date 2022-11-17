function preload() {
    screen = loadImage('./assets/Favorite detail screen 2.png');
    back = loadImage('./assets/back arrow.png');
    button = loadImage('./assets/Add To Cart.png');
      
    }
    
    function setup() {
        createCanvas(375, 812);
       link = createA('./Favdetscreen1.html', '');
       link2 = createA('./Cart.html', '');
        
    
    
    }
    function draw() {
     // fill (255,0,0);
    image (screen, 0, 0, 375, 812);
    
    // Back button
     img = createImg('./assets/back arrow.png').parent(link);
     img.position(21,58);
     img.size(25,25);
     // Add to cart
     img = createImg('./assets/Add To Cart.png').parent(link2);
     img.position(259,338);
     img.size(68,15);
    
    }
    