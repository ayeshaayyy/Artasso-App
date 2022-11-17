var svg;

function preload() {
screen5 = loadImage('./assets/Favorite screen.png');
favbox = loadImage('./assets/Favbox.png');
home = loadImage('./assets/home 2.png');
explore = loadImage('./assets/Explore.png');
shopping = loadImage('./assets/shopping.png');
fav = loadImage('./assets/favorite.png');
profile = loadImage('./assets/Profile.png');
  
}

function setup() {
    createCanvas(375, 812);
   link = createA('./Favdetscreen1.html', '');
   linkH = createA('./HomeScreen.html', '');
    linkF = createA('./Following.html', '');
    link1 = createA('./Cart.html', '');
    link2 = createA('./Profile.html', '')
    linkEx = createA('./ExplorePage.html', '');
    


}
function draw() {
 // fill (255,0,0);
image (screen5, 0, 0, 375, 812);
//text ('Hello', 10, 30);

//image(home, 39, 772, 25, 25);

img = createImg('./assets/Favbox.png').parent(link);
img.position(29,154);
img.size(318,151);


img = createImg('./assets/home 2.png').parent(linkH);
img.position(30,772);
img.size(25,25);

 img = createImg('./assets/Explore.png').parent(linkEx);
 img.position(107,772);
 img.size(25,25);

 img = createImg('./assets/Shopping.png').parent(link1);
 img.position(175,772);
 img.size(25,25);

 img = createImg('./assets/Profile.png').parent(link2);
 img.position(311,772);
 img.size(25,25);

 img.color(0,0,0, 15);
}
