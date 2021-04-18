class Block{
    constructor(x, y, img){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.img = img;
        this.image = loadImage(img);
    }
    display(){
        rect(this.x, this.y, 50, 50);
        image(this.image, this.x, this.y, 50, 50);
    }
}