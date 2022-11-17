function preload() {
    screen = loadImage('./assets/exhibition page for artist.png');
    button = loadImage('./assets/Create Exhibition.png');
    buttomnav = loadImage('./assets/Explore.png');
      
    }
    
    function setup() {
        createCanvas(375, 812);
       link = createA('./CreateExhibition.html', '');
       linkF = createA('./ExplorePage.html', '');
        
    
    
    }
    function draw() {
     // fill (255,0,0);
    image (screen, 0, 0, 375, 812);
    
    // Button
    img = createImg('./assets/Create Exhibition.png').parent(link);
     img.position(29,100);
     img.size(317,32);

     // Explore bottom nav
 img = createImg('./assets/Explore.png').parent(linkF);
 img.position(107,772);
 img.size(25,25);
    }
    