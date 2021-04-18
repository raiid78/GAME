   var A = "images/1.jpg";
   var B = "images/2.jpg";
   var C = "images/3.jpg";
   var D = "images/4.jpg";
   var E = "images/5.jpg";
   var F = "images/6.jpg";
   var G = "images/7.jpg";
   var H = "images/8.jpg";
   var I = "images/9.jpg";
   var J = "images/10.jpg";
   var K = "images/11.jpg";
   var L = "images/12.jpg";
   var M = "images/13.jpg";
   var N = "images/14.jpg";
   var O = "images/15.jpg";
   var P = "images/16.jpg";
   var Q = "images/17.jpg";
   var R = "images/18.jpg";
   var S = "images/19.jpg";
   var T = "images/20.jpg";
   var U = "images/21.jpg";
   var V = "images/22.jpg";
   var W = "images/23.jpg";
   var X = "images/24.jpg";
   var Y = "images/25.jpg";
   var Z = "images/26.jpg";




function preload() {
    /*A = loadImage("images/1.jpg");
    B = loadImage("images/2.jpg");
    C = loadImage("images/3.jpg");
    D = loadImage("images/4.jpg");
    E = loadImage("images/5.jpg");
    F = loadImage("images/6.jpg");
    G = loadImage("images/7.jpg");
    H = loadImage("images/8.jpg");
    I = loadImage("images/9.jpg");
    J = loadImage("images/10.jpg");
    K = loadImage("images/11.jpg");
    L = loadImage("images/12.jpg");
    M = loadImage("images/13.jpg");
    N = loadImage("images/14.jpg");
    O = loadImage("images/15.jpg");
    P = loadImage("images/16.jpg");
    Q = loadImage("images/17.jpg");
    R = loadImage("images/18.jpg");
    S = loadImage("images/19.jpg");
    T = loadImage("images/20.jpg");
    U = loadImage("images/21.jpg");
    V = loadImage("images/22.jpg");
    W = loadImage("images/23.jpg");
    X = loadImage("images/24.jpg");
    Y = loadImage("images/25.jpg");
    Z = loadImage("images/26.jpg");*/
}

function setup(){
    createCanvas(displayWidth, displayHeight);
    


    Aletter = new Block(displayWidth/2, displayHeight/2, A);
    Bletter = new Block(Aletter.x + 50, Aletter.y, B);
    Cletter = new Block(Bletter.x + 50, Bletter.y, C);
    Dletter = new Block(Cletter.x + 50, Cletter.y, D);
    Eletter = new Block(Dletter.x + 50, Dletter.y, E);
    Fletter = new Block(Aletter.x, Aletter.y + 50, F);
    Gletter = new Block(Cletter.x, Cletter.y + 50, G);
    Hletter = new Block(Dletter.x, Dletter.y + 50, H);
    Iletter = new Block(Eletter.x, Eletter.y + 50, I);
    Jletter = new Block(Aletter.x, Aletter.y - 50, J);
    Kletter = new Block(Bletter.x, Bletter.y - 50, K);
    Lletter = new Block(Cletter.x, Cletter.y - 50, L);
    Mletter = new Block(Dletter.x, Dletter.y - 50, M);
    Nletter = new Block(Aletter.x - 50, Aletter.y, N);
    Oletter = new Block(Nletter.x - 50, Aletter.y, O);
    Pletter = new Block(Oletter.x - 50, Aletter.y, P);
    Qletter = new Block(Pletter.x - 50, Aletter.y, Q);
    Rletter = new Block(Nletter.x, Aletter.y - 50, R);
    Sletter = new Block(Oletter.x, Aletter.y - 50, S);
    Tletter = new Block(Pletter.x, Aletter.y - 50, T);
    Uletter = new Block(Bletter.x, Bletter.y + 50, U);
    Vletter = new Block(Eletter.x, Eletter.y - 50, V);
    Wletter = new Block(Qletter.x, Qletter.y - 50, W);
    Xletter = new Block(Nletter.x, Nletter.y + 50, X);
    Yletter = new Block(Oletter.x, Oletter.y + 50, Y);
    Zletter = new Block(Pletter.x, Pletter.y + 50, Z);

}

function draw() {   
    background("red");

    Aletter.display();
    Bletter.display();
    Cletter.display();
    Dletter.display();
    Eletter.display();
    Fletter.display();
    Gletter.display();
    Hletter.display();
    Iletter.display();
    Jletter.display();
    Kletter.display();
    Lletter.display();
    Mletter.display();
    Nletter.display();
    Oletter.display();
    Pletter.display();
    Qletter.display();
    Rletter.display();
    Sletter.display();
    Tletter.display();
    Uletter.display();
    Vletter.display();
    Wletter.display();
    Xletter.display();
    Yletter.display();
    Zletter.display();
    

    drawSprites();
}


function mouseReleased(){
    /*var str = "";
    str = str.toUpperCase();

    switch(str){
        case 
    }*/
}