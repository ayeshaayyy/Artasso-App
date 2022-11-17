function preload() {
    screen = loadImage('./assets/Cart page.png');
    button = loadImage('./assets/CheckoutButton.png');
    back = loadImage('./assets/back arrow.png');
      
    }
    
    function setup() {
        createCanvas(375, 812);
       link = createA('./Checkout.html', '');
       link1 = createA('./FavoriteScreen.html', '');
        
    
    
    }
    function draw() {
     // fill (255,0,0);
    image (screen, 0, 0, 375, 812);
    
    // Back button
     img = createImg('./assets/back arrow.png').parent(link1);
     img.position(21,58);
     img.size(25,25);
    // Button
     img = createImg('./assets/CheckoutButton.png').parent(link);
     img.position(0,750);
     img.size(375,60);
    }
    