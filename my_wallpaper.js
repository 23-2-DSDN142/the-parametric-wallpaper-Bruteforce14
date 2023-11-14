//your parameter variables go here!


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(255,233,0); //light honeydew green colour
 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
    let pink= color(255,62,181);
    let yellow = color(255,233,0);

    stroke(0);
    strokeWeight(4)

    line(5,5,5,100);
    line(5,105,5,200);
    line(10,15,10,115);
    line(10,125,10,200);
    line(15,0,15,20);
    line(15,35,15,135);
    line(15,160,15,200);
    line(20,0,20,40);
    line(20,50,20,155);
    line(20,160,20,200);
    line(25,0,25,100);
    line(25,105,25,200);
    line(30,15,30,130);
    line(30,140,30,200);
    line(35,0,35,50);
    line(35,55,35,160);
    line(35,175,35,200);
    line(40,0,40,125);
    line(40,140,40,195);
    line(45,15,45,200);
    line(50,0,50,195);
    line(55,10,55,200);
    line(60,0,60,200);
    line(65,0,65,50);
    line(65,55,65,175);
    line(65,190,65,200);
    line(70,15,70,185);
    line(75,0,75,195);
    line(80,0,80,200);
    line(85,0,85,200);
    line(90,0,90,40);
    line(90,50,90,200);
    line(95,5,95,50);
    line(95,65,95,200);
    line(100,5,100,180);
    line(100,190,100,200);
    line(105,0,105,70);
    line(105,75,105,195);
    line(110,0,110,200);
    line(115,0,115,195);
    line(120,0,120,200);
    line(125,5,125,195);
    line(130,0,130,60);
    line(130,75,130,200);
    line(135,15,135,200);
    line(140,0,140,200);
    line(145,5,145,15);
    line(145,20,145,120);
    line(145,140,145,200);
    line(150,0,150,90);
    line(150,95,150,195);
    line(155,5,155,105);
    line(155,115,155,200);
    line(160,15,160,95);
    line(160,100,160,200);
    line(165,0,165,120);
    line(165,135,165,200);
    line(170,5,170,130);
    line(170,145,170,200);
    line(175,10,175,70);
    line(175,80,175,185);
    line(180,0,180,160);
    line(180,175,180,200);
    line(185,20,185,90);
    line(185,100,185,110);
    line(185,115,185,200);
    line(190,0,190,5);
    line(190,10,190,110);
    line(190,120,190,195);
    line(195,0,195,100);
    line(195,110,195,200);
    line(200,10,200,110);
    line(200,135,200,200);




    stroke(yellow);
    strokeWeight(2)
    fill(pink);
  
    ellipse(100,111,100,100)
  
    beginShape(); //Mandibles
    curveVertex(76.2166,139.4311); //handle
    curveVertex(61.7912,123.6703);//start point
    curveVertex(71.3516,147.8462);//second point
    curveVertex(64.7582,151.8022);
    curveVertex(61.022,163.2308);
    curveVertex(67.6154,168.7253);
    curveVertex(77.2857,163.4505);
    curveVertex(123.8062,163.4505);
    curveVertex(133.4765,168.7253);
    curveVertex(140.0699,163.2308);
    curveVertex(136.3337,151.8022);
    curveVertex(129.7403,147.8462);
    curveVertex(139.3007,123.6703);
    curveVertex(124.8754,139.4311);//Handle 2
    endShape();
  
    fill(pink);
  
    ellipse(94.8089 ,170.7826 ,10,20); //Teef
    ellipse(105.1911  ,170.7826 ,10,20); //Teef
    ellipse(115.1911  ,168.7826  ,10,20); //Teef
    ellipse(84.8089 ,168.7826  ,10,20); //Teef
  
    fill(pink);
  
    beginShape(); //Gums
    curveVertex(76.3422 ,164.7577);
    curveVertex(79.5244 ,154.5556);
    curveVertex(78.58  ,168.1667 );
    curveVertex(84.4133 , 165.6667);
    curveVertex(89.6355  ,173.3333);
    curveVertex(94.4416 ,166.5497 );
    curveVertex(100, 173.7778);
    curveVertex(105.5584  ,166.5497 );
    curveVertex(110.3645 , 173.3333);
    curveVertex(115.5867 ,165.6667);
    curveVertex(121.42  ,168.1667);
    curveVertex(120.4756  ,154.5556);
    curveVertex(123.6578 ,164.7577);
    endShape();
  
    fill(yellow);
  
    strokeWeight(3);
  
    line(73,132,91,145); //Cross Eye Left
    line(94,132,78,142);
  
    /*line(126,132,109,145); //CrossEye Right
    line(106,132,122,142);*/
  
    strokeWeight(1);
    /*beginShape();  //Eye Left
    curveVertex(73.8612, 132.7006);
    curveVertex(94.3057 ,135.3673);
    curveVertex(91.1945 , 145.2932);
    curveVertex(78.1575 ,142.7747);
    endShape(CLOSE);*/
  
    beginShape(); //Eye Right
    curveVertex(126.4485, 132.7006);
    curveVertex(106.0041,135.3673);
    curveVertex(109.1152, 145.2932);
    curveVertex(122.1522,142.7747);
    endShape(CLOSE);
  
    beginShape(); //Nose Hole
    curveVertex(100, 138.5492);
    curveVertex(103.8948,152.6313);
    curveVertex(100,149.8164);
    curveVertex(96.4874,152.6313);
    endShape(CLOSE);

    //CROWN
    stroke(pink);

    fill(20);

    beginShape();
    vertex(50,100);
    vertex(50,75);
    vertex(60,50);
    vertex(70,75);
    vertex(80,40);
    vertex(90,75);
    vertex(100,30);
    vertex(110,75);
    vertex(120,40);
    vertex(130,75);
    vertex(140,50);
    vertex(150,75);
    vertex(150,100);
    endShape();

    fill(yellow)

    ellipse(100,75,15,25);
    ellipse(80,80,10,20);
    ellipse(120,80,10,20)

   /* //Deserter
    stroke(yellow)
    strokeWeight(2)
    fill(20)
    beginShape()
    vertex(70,130);
    vertex(75,150);
    vertex(90,150);
    vertex(90,170);
    vertex(70,165);
    vertex(50,140);
    vertex(50,135);
    vertex(40,135);
    vertex(50,110);
    vertex(55,80);
    vertex(70,60);
    vertex(90,55);
    vertex(100,50);
    vertex(110,55);
    vertex(130,60);
    vertex(145,80);
    vertex(150,110);
    vertex(160,135);
    vertex(150,135);
    vertex(150,140);
    vertex(130,165);
    vertex(110,170);
    vertex(110,150);
    vertex(125,150);
    vertex(130,130);
    endShape(CLOSE)
    noFill();
    beginShape();
    vertex(90,55);
    vertex(90,100);
    vertex(100,105);
    vertex(110,100);
    vertex(110,55);
    endShape()*/
  }
  
