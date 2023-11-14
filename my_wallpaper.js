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
    stroke(yellow);
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
  }
  
