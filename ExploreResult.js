var svg;

function preload() {
screen5 = loadImage('./assets/Explore result.png');
favbox = loadImage('./assets/Explorebox.png');
home = loadImage('./assets/Home.png');
explore = loadImage('./assets/Explore.png');
shopping = loadImage('./assets/shopping.png');
fav = loadImage('./assets/favorite.png');
profile = loadImage('./assets/Profile.png');
  
}

function setup() {
    createCanvas(375, 812);
   linkH = createA('./HomeScreen.html', '');
    linkF = createA('./FavoriteScreen.html', '');
    link1 = createA('./Cart.html', '');
    link2 = createA('./Profile.html', '')
    


}
function draw() {
 // fill (255,0,0);
image (screen5, 0, 0, 375, 812);
//text ('Hello', 10, 30);

//image(home, 39, 772, 25, 25);

img = createImg('./assets/home 2.png').parent(linkH);
img.position(30,772);
img.size(25,25);

 img = createImg('./assets/favorite.png').parent(linkF);
 img.position(243,772);
 img.size(25,25);

 img = createImg('./assets/shopping.png').parent(link1);
 img.position(175,772);
 img.size(25,25);

 img = createImg('./assets/Profile.png').parent(link2);
 img.position(311,772);
 img.size(25,25);

 img.color(0,0,0, 15);
}
