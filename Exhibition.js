var svg;

function preload() {
screen5 = loadImage('./assets/Exhibition page.png');
hometext = loadImage('./assets/For you.svg');
exhibition = loadImage('./assets/Following.svg');
home = loadImage('./assets/Home.png');
explore = loadImage('./assets/Explore.png');
shopping = loadImage('./assets/shopping.png');
fav = loadImage('./assets/favorite.png');
profile = loadImage('./assets/Profile.png');
  
}

function setup() {
    createCanvas(375, 812);
    linkH = createA('./HomeScreen.html', '');
    linkF = createA('./Following.html', '');
    link1 = createA('./Cart.html', '');
    link2 = createA('./FavoriteScreen.html', '');
    link3 = createA('./Profile.html', '');
    linkEx = createA('./ExplorePage.html', '');

    


}
function draw() {
 // fill (255,0,0);
image (screen5, 0, 0, 375, 812);
//text ('Hello', 10, 30);

image(home, 39, 772, 25, 25);

 img = createImg('./assets/For you.svg').parent(linkH);
 img.position(28,54);
 img.size(60,16);

 img = createImg('./assets/Following.svg').parent(linkF);
 img.position(143,54);
 img.size(73,19);
 
 img = createImg('./assets/Explore.png').parent(linkEx);
 img.position(107,772);
 img.size(25,25);

 img = createImg('./assets/Shopping.png').parent(link1);
 img.position(175,772);
 img.size(25,25);

 img = createImg('./assets/favorite.png').parent(link2);
 img.position(243,772);
 img.size(25,25);

 img = createImg('./assets/Profile.png').parent(link3);
 img.position(311,772);
 img.size(25,25);

 img.color(0,0,0, 15);
}
