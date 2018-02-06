// VARIABLES

var mySong;
var sfondo = '#0B214F';

var onda1 = '#FFFFFF' ;
var onda2 = '#0B214F' ;

var venice = '#0B214F';
var fundy = '#0B214F';
var zanza = '#0B214F';
var fitz = '#0B214F';
var puket = '#0B214F';

var value = ('rgba(255,255,255,1)');

var s = ' "The alternate rising and falling of the sea, usually twice in each lunar day at a particular place, due to the attraction of the moon and sun." '

var terraVenice;
var terraFundy;
var terraZanzibar;
var terraFitzroy;
var terraPuket;
var terraAttuale;
var luna;
var sole;

var mostraImmagine=false;

var righello;
var click;

var yoff = 0.0;        // WAVE NOISE
var yoff2 = 0.0; 
var angle = 0;
var valore = 0;
var h = 1 ;
var andrea = 1*h;




function preload() {
    mySong = loadSound('assets/waves.wav');
    terraVenice = loadImage("./assets/italia.png");
    terraFundy = loadImage("./assets/canada.png");
    terraZanzibar = loadImage("./assets/tanzania.png");
    terraFitzroy = loadImage("./assets/australia.png");
    terraPuket = loadImage("./assets/thailandia.png");
    luna = loadImage("./assets/luna.png");
    sole = loadImage("./assets/sole.png");
    righello = loadImage("./assets/righello.png");
    click = loadImage("./assets/click.png");
}
 



function setup() {
createCanvas(windowWidth,windowHeight);   
textFont('Roboto');
mySong.loop();
imageMode(CENTER);   
angleMode(DEGREES); 
terraAttuale=terraZanzibar;
}



function draw() {	
background(sfondo);

noStroke();

//TEXT
textSize(15);
textAlign(CENTER);
    fill(venice);
    textStyle(BOLD);
    text("Venice", windowWidth/6, 50);
    textStyle(NORMAL);
    text("Italy", windowWidth/6, 70);
    
    fill(fundy);
    textStyle(BOLD);  	
    text("Fundy Bay", windowWidth/3, 50);
	textStyle(NORMAL);
    text("Canada", windowWidth/3, 70);
    
    fill(zanza);
    textStyle(BOLD);  	
    text("Zanzibar", windowWidth/2, 50);
	textStyle(NORMAL);
    text("Tanzania", windowWidth/2, 70);
        
    fill(fitz);    
    textStyle(BOLD);  	
    text("Fitzroy", windowWidth/3*2, 50);
	textStyle(NORMAL);
    text("Australia", windowWidth/3*2, 70);
    
    fill(puket);    
    textStyle(BOLD);  	
    text("Puket", windowWidth/6*5, 50);
	textStyle(NORMAL);
    text("Thailand", windowWidth/6*5, 70);
    
    
    fill(value);
    textSize(12.5);
    text("click here to", windowWidth/2, 50);
    textStyle(BOLD);
    textSize(24);
    text("START", windowWidth/2, 75);

    
    fill(value);
    textStyle(BOLD); 
    textSize(50);
    text("TIDE", windowWidth/2, windowHeight/2-90);
    
    
    fill(value);
    textStyle(NORMAL); 
    textSize(15);
    text(s, windowWidth/2-170, windowHeight/2-60, 340, 100);
    
    
    
  //WAVE1
  
    noStroke();
  fill(onda1);
  
  beginShape(); 
  
  var xoff2 = 0;
  
  for (var x = 0; x <= width; x += 10) {
  var y = map(noise(xoff2, yoff2), 0, 1, windowHeight/7*5.8-andrea, windowHeight/7*5.8-20-andrea); //LEVEL
  vertex(x, y); 
  xoff2 += 0.05;
  }
  
  yoff2 += 0.007;  //SPEED
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  
  
  //WAVE2
  
    noStroke();
  fill(onda2);
  
  beginShape(); 
  
  var xoff = 0;
    
  for (var x = 0; x <= width; x += 10) {

  var y = map(noise(xoff, yoff), 0, 1, windowHeight/7*5.9-andrea , windowHeight/7*5.9-20-andrea ); //LEVEL
  vertex(x, y); 
  xoff += 0.03;
  }
 
  yoff += 0.006;  //SPEED
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);  

    
    
//SUN EARTH MOON
    
  if(mostraImmagine==true) {
            image(terraAttuale,windowWidth/5*2, windowHeight/2-45, 95,90);
            image(sole,windowWidth/5*3, windowHeight/2-50, 120,120);
        
        push();
            translate(windowWidth/5*2, windowHeight/2-45);
            rotate(angle);
            image(luna,0,-70,25,25);
    
    
            angle=angle+valore;
             if(angle>=360) {angle=0;}
        pop();
      
        image(righello,windowWidth/25, windowHeight/2, 40,500);
        image(click,windowWidth/25*24, windowHeight/2, 80,1000);
    }
    
   
    if (mouseIsPressed && mouseX> windowWidth/5*2-45 && mouseX< windowWidth/5*2+45 && mouseY>windowHeight/2-90 && mouseY<windowHeight/2) {
        valore = 0.5;
        } 
    else {valore = 0;
      
         } 
    
  
    if (mouseIsPressed && mouseX> windowWidth/5*2-45 && mouseX< windowWidth/5*2+45 && mouseY>windowHeight/2-90 && mouseY<windowHeight/2 && angle<90) {andrea = andrea + h ;} 
  
    
    if (mouseIsPressed && mouseX> windowWidth/5*2-45 && mouseX< windowWidth/5*2+45 && mouseY>windowHeight/2-90 && mouseY<windowHeight/2&& angle>90 && angle<180) {
        andrea = andrea - h ;} 
   
    
    if (mouseIsPressed && mouseX> windowWidth/5*2-45 && mouseX< windowWidth/5*2+45 && mouseY>windowHeight/2-90 && mouseY<windowHeight/2&& angle>180 && angle<270) {
        andrea = andrea + h ;} 
  
    
      if (mouseIsPressed && mouseX> windowWidth/5*2-45 && mouseX< windowWidth/5*2+45 && mouseY>windowHeight/2-90 && mouseY<windowHeight/2&& angle>270 && angle<360) {
        andrea = andrea - h ;} 
  
   
    print(mouseIsPressed)
 
 
    console.log (angle);
  
}

//PLACES
	function mouseClicked() {
	 
        if( mouseX> windowWidth/6-45 && mouseX< windowWidth/6+45 && mouseY>40 && mouseY<75)
     {
         mostraImmagine=true;
        sfondo = '#E0E2CC';
     venice = '#AE1459';
     fundy = '#FFFFFF';
     zanza = '#FFFFFF';
     fitz = '#FFFFFF';
     puket = '#FFFFFF';
     onda1 = '#AE1459' ;
     onda2 = '#0B214F' ;
     terraAttuale=terraVenice;
     angle=0;
      h=0.6;
    andrea=1;
   
     }
        
    
     if( mouseX> windowWidth/3-45 && mouseX< windowWidth/3+45 && mouseY>40 && mouseY<75)
     {mostraImmagine=true;
         sfondo = '#0B214F' ;
      fundy = '#0282CC';
      zanza = '#FFFFFF';
     fitz = '#FFFFFF';
     puket = '#FFFFFF';
     venice = '#FFFFFF';
     onda1 = '#E0E2CC';
     onda2 = '#0282CC';
     terraAttuale=terraFundy;
     angle=0;
     h=2.7;
      andrea=1;
     }
        
     if( mouseX> windowWidth/2-45 && mouseX< windowWidth/2+45 && mouseY>40 && mouseY<75)
     {mostraImmagine=true;
         sfondo = '#E0E2CC';   
     zanza = '#00736D';
     fitz = '#FFFFFF';
     puket = '#FFFFFF';
     venice = '#FFFFFF';
     fundy = '#FFFFFF';
     onda1 = '#FA6A37' ;
     onda2 = '#00736D';
     value = ('rgba(255,255,255,0)');
     terraAttuale=terraZanzibar;
    angle=0;
     andrea=1;
     h=1;
     }
        
     if( mouseX> windowWidth/3*2-45 && mouseX< windowWidth/3*2+45 && mouseY>40 && mouseY<75)
     { mostraImmagine=true;
         sfondo = '#FA6A37';
     fitz = '#0B214F';
     puket = '#FFFFFF';
     venice = '#FFFFFF';
     fundy = '#FFFFFF';
     zanza = '#FFFFFF';
     onda1 = '#0B214F' ;
     onda2 = '#9996CC' ;
     terraAttuale=terraFitzroy;
     angle=0;
     andrea=1;
     h=1.9;
     } 
        
     if( mouseX> windowWidth/6*5-45 && mouseX< windowWidth/6*5+45 && mouseY>40 && mouseY<75)
     { mostraImmagine=true;
         sfondo = '#AE1459';
     puket = '#9996CC';
     venice = '#FFFFFF';
     fundy = '#FFFFFF';
     fitz = '#FFFFFF';
     zanza = '#FFFFFF';
     onda1 = '#9996CC' ;
     onda2 = '#E0E2CC' ;
     terraAttuale=terraPuket;
     angle=0;
     andrea=1;
     h=0.45;
     }      
    }


	function windowResized(){
	    resizeCanvas(windowWidth,windowHeight);
	}



