var svg;

function preload() {
screen4 = loadImage('./assets/Home screen.png');
following = loadImage('./assets/Following.svg');
exhibition = loadImage('./assets/Exhibition.svg');
home = loadImage('./assets/Home.png');
explore = loadImage('./assets/Explore.png');
shopping = loadImage('./assets/shopping.png');
fav = loadImage('./assets/favorite.png');
profile = loadImage('./assets/Profile.png');
  
}

function setup() {
    createCanvas(375, 812);
   linkE = createA('./Exhibition.html', '');
   linkF = createA('./Following.html', '');
   linkEx = createA('./ExplorePage.html', '');
   link1 = createA('./Cart.html', '');
   link2 = createA('./FavoriteScreen.html', '');
   link3 = createA('./Profile.html', '');
    


}
function draw() {
 // fill (255,0,0);
image (screen4, 0, 0, 375, 812);
//text ('Hello', 10, 30);

image(home, 39, 772, 25, 25);

 img = createImg('./assets/Following.svg').parent(linkF);
 img.position(143,54);
 img.size(73,19);

 img = createImg('./assets/Exhibition.svg').parent(linkE);
 img.position(268,54);
 img.size(80,19);

// Following nav
 img = createImg('./assets/Explore.png').parent(linkEx);
 img.position(107,772);
 img.size(25,25);

// Shooping Cart nav
 img = createImg('./assets/Shopping.png').parent(link1);
 img.position(175,772);
 img.size(25,25);

// Favorite screen nav
 img = createImg('./assets/favorite.png').parent(link2);
 img.position(243,772);
 img.size(25,25);

// Profile screen
 img = createImg('./assets/Profile.png').parent(link3);
 img.position(311,772);
 img.size(25,25);

 img.color(0,0,0, 15);
}
