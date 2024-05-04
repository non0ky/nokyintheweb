
var nodos = [];
let names = ["nerd\nautistic\nparty", "don't cry\ncam", "codificación\ninterna","eriazo","nodos", "trappedMan"];
let links = ["https://www.instagram.com/art.noky_/", "nokyartpage\dontcrycam\dontcrycamIndex.html", "nokyartpage\codificacion interna\codificacion.html", "nokyartpage\eriazo\indexEriazo.html", "nokyartpage\nodos\nodos.html", "nokyartpage\trappedMan\index.html"];
//           0                     , 1               , 2                      , 3      , 4     , 5       
function setup(){
    createCanvas(windowWidth, windowWidth / 2);
    textAlign(LEFT, CENTER);
    rectMode(CENTER);
    textSize(10);
    stroke(255);

    for(var i = 0; i < names.length; i++){
        nodos[i] = new Nodo(names[i], random(100, width - 100), random(100, height-100), 125, 50 ,[random(-0.2,0.2),random(-0.2,0.2)], []);
    }

    nodos[0].makeConex(nodos[1]);
    nodos[0].makeConex(nodos[2]);
    nodos[0].makeConex(nodos[3]);
    nodos[0].makeConex(nodos[4]);

    nodos[1].makeConex(nodos[5]);
    nodos[1].makeConex(nodos[0]);

    nodos[2].makeConex(nodos[0]);
    nodos[3].makeConex(nodos[0]);
    nodos[4].makeConex(nodos[0]);
}

function draw(){
    background(0);
    for(var i = 0; i < names.length; i++)nodos[i].displayConex();
    for(var i = 0; i < names.length; i++){
        nodos[i].move();
        nodos[i].display();
        nodos[i].ishover();
    }
    
}

class Nodo{
    constructor(name, x, y, w, h, dir, conex){
        this.name = name;
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.w = w;
        this.h = h;
        this.conex = conex;
    }

    makeConex(nodo){
        append(this.conex, nodo)
    }

    move() {
        this.x = this.x + this.dir[0];
        this.y = this.y + this.dir[1];
        if(this.x + this.w / 2 > width) this.dir[0] *= -1;
        if(this.x - this.w / 2 < 0) this.dir[0] *= -1;
        if(this.y + this.h / 2 > height) this.dir[1] *= -1;
        if(this.y - this.h / 2 < 0) this.dir[1] *= -1;
    }

    display(){
        stroke(255);
        fill(0);
        rect(this.x, this.y, this.w, this.h);
        fill(255);
        text(this.name, this.x , this.y);
    }

    displayConex(){
        stroke(255);
        for(var i = 0; i < this.conex.length; i++){
            line(this.x, this.y, this.conex[i].x, this.conex[i].y);
        }
    }

    ishover(){
        if(mouseX > this.x - this.w / 2 && mouseX < + this.x + this.w / 2){
            if(mouseY > this.y - this.h / 2 && mouseY < this.y + this.h / 2){
                if(frameCount % 10 < 5)stroke(255);
                else stroke(0);
                noFill();
                if(mouseIsPressed){
                    fill(255);
                    window.open('https://youtu.be/6VggEjZLrhk?si=0WlGCh3_WW1kn19f', '_self');
                }
                rect(this.x, this.y, this.w, this.h);
                
                
            }
        }
    }
}