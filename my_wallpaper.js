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
  let pink= color(255,62,181);
  let yellow = color(255,150,0);
  background(yellow)
 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
    let pink= color(255,62,181);
    let yellow = color(255,233,0);
    let inner = color(255,255,255);
    let black = color(0,0,0);
    /*Mork Borg Colours 
    yellow 255,233,0
    pink 255,62,181
   */
    stroke(black)
    strokeWeight(2)
    fill(yellow)

    rect(0,0,200,200)
    stroke(black);
    strokeWeight(2);

  /*  line(5,5,5,100);
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
    line(200,135,200,200); */

    noFill();
    strokeWeight(5)
    ellipse(100,100,200,200);
    ellipse(100,100,175,175);
    ellipse(100,100,150,150);
    ellipse(100,100,125,125);
    ellipse(100,100,100,100);

    strokeWeight(2);
    line(0,0,200,200);
    line(0,20,180,200);
    line(20,0,200,180);

    strokeWeight(2);
    line(0,200,200,0);
    line(0,180,180,0);
    line(200,20,20,200);

   /* //Gutterborn
    stroke(pink)
    fill(20)
    strokeWeight(2)
    beginShape()
    vertex(105,10);
    vertex(105,50);
    vertex(110,54);
    vertex(110,189.6009);
    vertex(100,200);
    vertex(90,189.6009);
    vertex(90,54);
    vertex(95,50);
    vertex(95,10);
    endShape(CLOSE);

    beginShape()
    vertex(130,49);
    vertex(130,43);
    vertex(116,41);
    vertex(83,41);
    vertex(70,43);
    vertex(70,49);
    vertex(83,47);
    vertex(116,47);
    endShape(CLOSE);

  

    strokeWeight(1);
    stroke(pink)
    line(100,200,100,47);

    strokeWeight(2)
    fill(25)
    ellipse(100,11,15,15)
    ellipse(130,46,9,9)
    ellipse(70,46,9,9) */

    //Skull
    stroke(pink);
    strokeWeight(3)
    fill(inner);
  
    ellipse(100,111,100,100) //range between x 85 - 120 y 70 - 120   
  
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
  
    fill(inner);
  
    ellipse(94.8089 ,170.7826 ,10,20); //Teef //Range between y 10 - 30
    ellipse(105.1911  ,170.7826 ,10,20); //Teef
    ellipse(115.1911  ,168.7826  ,10,20); //Teef // Range between y 10 - 26
    ellipse(84.8089 ,168.7826  ,10,20); //Teef
  
    fill(inner);
  
    beginShape(); //Gums
    curveVertex(76.3422 ,144.7577);
    curveVertex(77.5244 ,150.5556);
    curveVertex(78.58  ,168.1667 );
    curveVertex(84.4133 , 165.6667);
    curveVertex(89.6355  ,173.3333);
    curveVertex(94.4416 ,166.5497 );
    curveVertex(100, 173.7778);
    curveVertex(105.5584  ,166.5497 );
    curveVertex(110.3645 , 173.3333);
    curveVertex(115.5867 ,165.6667);
    curveVertex(121.42  ,168.1667);
    curveVertex(123.4756  ,150.5556);
    curveVertex(123.6578 ,144.7577);
    endShape();
  
    fill(yellow);
  
    stroke(pink);
    /*
    ellipse(84,140,10,10); // round eye range between 5 - 20
    ellipse(116,140,10,10); // round eye range between 5 - 20
    */
    strokeWeight(3);

    line(73,132,91,145); //Cross Eye Left
    line(94,132,78,142);
  
    line(126,132,109,145); //CrossEye Right
    line(106,132,122,142);

    /*
    stroke(pink);
    strokeWeight(3);
    beginShape();  //Eye Left
    curveVertex(73.8612, 132.7006);
    curveVertex(94.3057 ,135.3673);
    curveVertex(91.1945 , 145.2932);
    curveVertex(78.1575 ,142.7747);
    endShape(CLOSE);
    */
    /*
    beginShape(); //Eye Right
    curveVertex(126.4485, 132.7006);
    curveVertex(106.0041,135.3673);
    curveVertex(109.1152, 145.2932);
    curveVertex(122.1522,142.7747);
    endShape(CLOSE); 
    */
  
    beginShape(); //Nose Hole
    curveVertex(100, 138.5492);
    curveVertex(103.8948,152.6313);
    curveVertex(100,149.8164);
    curveVertex(96.4874,152.6313);
    endShape(CLOSE);

    /*//CROWN
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
    ellipse(120,80,10,20)*/

    /* //Deserter
    stroke(pink)
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

   /* noFill(); //crest
    beginShape();
    vertex(90,55);
    vertex(90,100);
    vertex(100,105);
    vertex(110,100);
    vertex(110,55);
    endShape() */

    /* //Herbmaster
    stroke(yellow)
    fill(0)
    strokeWeight(3)

    beginShape();
    curveVertex(56.1064 , 60.2417);
    curveVertex(60.8682  ,96.6862);
    curveVertex(62.646  ,102.0195);
    curveVertex(71.0904  , 101.7973);
    curveVertex(68.8682 ,92.4639 );
    curveVertex(68.2015 ,60.2417);
    endShape(CLOSE);

    beginShape();
    curveVertex(36.6946 ,77.8609);
    curveVertex(43.0721 ,105.9241);
    curveVertex(54.5351 ,117.0887);
    curveVertex(62.8675 ,110.9664);
    curveVertex(49.5886 ,90.1838);
    curveVertex(49.88 ,78.0217);
    endShape(CLOSE);

    beginShape();
    curveVertex(138.3157 ,98.2743 );
    curveVertex(128.5591 ,108.4297 );
    curveVertex(117.471 ,125.7833 );
    curveVertex(124.4287 ,130.8956 );
    curveVertex(134.0004 ,121.573 );
    curveVertex(142.6455 ,98.1401 );
    endShape(CLOSE);

    beginShape();
    curveVertex(112.1111 ,106.5556 );
    curveVertex(115 ,121 );
    curveVertex(108.1111 ,135 );
    curveVertex(108.5556 ,141.8889 );
    curveVertex(115 ,144.5556 );
    curveVertex(124.1111 ,136.7778);
    curveVertex(123.8889 ,119.2222 );
    curveVertex(116.3333 ,104.3333 );
    endShape(CLOSE);

    fill(pink);
    stroke(yellow);
    strokeWeight(2)
    
    beginShape();
    curveVertex(65.3618 ,63.1306 );
    curveVertex(82.6952 ,65.575 );
    curveVertex(84.0285 ,54.9084 );
    curveVertex(68.0285 ,36.9084 );
    curveVertex(49.6374 ,54.9084 );
    curveVertex(51.3618 ,63.3528 );
    endShape(CLOSE);

    beginShape();
    curveVertex(45.7593 ,86.474 );
    curveVertex(72.9362 ,85.6591 );
    curveVertex(50.6864 ,59.9405 );
    curveVertex(18.6362 ,85.8828 );
    endShape(CLOSE);

    beginShape();
    curveVertex(129.5128 ,105.3304 );
    curveVertex(159.6524 ,101.7277 );
    curveVertex(137.6424 ,73.1764 );
    curveVertex(107.4137 ,104.6516 );
    endShape(CLOSE);

    beginShape();
    curveVertex(116.1111 ,109 );
    curveVertex(135.6667 ,102.3333 );
    curveVertex(107.2222 ,95.4444 );
    curveVertex(93.8889 ,111.4444 );
    endShape(CLOSE); 

    /* //Heretical Priest
    stroke(pink);
    strokeWeight(3);

    line(85,110,110,110);
    line(90,107,115,107);
    line(98.5,75,98.5,120);
    line(101.5,80,101.5,125)
    line(92,105,92,109);
    line(113,105,113,109);
    line(108,112,108,108);
    line(87,112,87,108);
    line(96.5,118,100.5,118);
    line(96.5,77,100.5,77);
    line(99.5,82,103.5,82);
    line(99.5,123,103.5,123); */

     //Hermit
    stroke(pink);
    strokeWeight(3);

    line(54.7778,103.6703,60.8889,120.5556);
    line(53.8889,109.2222,60.8889,111);

    noFill()
    beginShape()
    vertex(69.0444,117.4735);
    vertex(78.0756,100.3624);
    vertex(65.022,98.1331);
    vertex(71.2329,85.2405);
    vertex(61.2667,86.5847);
    endShape(CLOSE)

    noFill()
    beginShape()
    vertex(99.2467,107.6667);
    vertex(77.2467,82.1111);
    vertex(81.2467,69.8889);
    vertex(90.7914,75.3972);
    vertex(85.9877,110.7778);
    endShape()

    noFill()
    beginShape()
    vertex(104.5565,107.2611);
    vertex(106.9986,67.7715);
    vertex(118.022,78.2847);
    vertex(109.1385,84.899);
    vertex(113.4453,108.0063);
    endShape()

    noFill()
    beginShape()
    vertex(144.4507,95.7412);
    vertex(141.5544,101.9381);
    vertex(145.2083,111.6271);
    vertex(136.5121,112.7269);
    vertex(133.9999,118.1021);
    endShape(CLOSE)

    line(131.4444,81.4444,119.6667,111);
    line(127.9023,90.3333,139,87.4444);
    line(126.9933,112,125.8956,94.8889); 
  }
  
