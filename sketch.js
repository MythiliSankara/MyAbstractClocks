function setup() {
	createCanvas(600,600)
	angleMode(DEGREES);
  }
  
  function draw() {
	// put drawing code here
	background(0);
	translate(200,200)
  
	let hours= hour();
	let minutes= minute();
	let seconds= second();
  
  
	strokeWeight(8);
	noFill();
	stroke(255,100,150);
	let sec1= map(seconds, 0, 60, 0, 360);
	arc(200, 200, 300, 300, 0, sec1);
	//fillsquare(20, 20, 30, 30,end1)
  
	stroke(155,150,150);
	let min2= map(minutes, 0, 60, 0, 360);
	arc(200, 200, 200, 200, 0, min2);
	
  
	stroke(150,100,150);
	let hour3= map(hours %12, 0, 12, 0, 360); //the modulus will ensure it is remains in 12 hour format. 
	arc(200, 200, 100, 100, 0, hour3);
