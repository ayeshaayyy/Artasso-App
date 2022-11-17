var svg;

function preload() {
screen4 = loadImage('./assets/Collector profile.png');
home = loadImage('./assets/home 2.png');
explore = loadImage('./assets/Explore.png');
shopping = loadImage('./assets/shopping.png');
fav = loadImage('./assets/favorite.png');
profile = loadImage('./assets/profilee.png');
  
}

function setup() {
    createCanvas(375, 812);
   link = createA('./HomeScreen.html', '');
   link2 = createA('./Following.html', '');
   link3 = createA('./Cart.html', '');
   link4 = createA('./FavoriteScreen.html', '');
   link5 = createA('./LoginScreen.html', '');
   linkEx = createA('./ExplorePage.html', '');
    


}
function draw() {
 // fill (255,0,0);
image (screen4, 0, 0, 375, 812);
image (profile, 311, 772, 25, 25);
// Logout
img = createImg('./assets/Logout.svg').parent(link5);
img.position(83,695);
img.size(93,28);

// Home nav
 img = createImg('./assets/home 2.png').parent(link);
 img.position(30,772);
 img.size(25,25);

// Following nav
 img = createImg('./assets/Explore.png').parent(linkEx);
 img.position(107,772);
 img.size(25,25);

// Shooping Cart nav
 img = createImg('./assets/Shopping.png').parent(link3);
 img.position(175,772);
 img.size(25,25);

// Favorite screen nav
 img = createImg('./assets/favorite.png').parent(link4);
 img.position(243,772);
 img.size(25,25);

 img.color(0,0,0, 15);
}
