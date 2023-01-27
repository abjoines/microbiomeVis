let data;

let sampleID = 5;

//SAMPLE RESULT
var one;
var two;
var three;
var four;
var five;
var six;
var seven;
var eight;
var nine;
var ten;
var eleven;
var twelve;
var thirteen;
var fourteen;
var fifteen;
var sixteen;
var seventeen;

var oneTitle;
var twoTitle;
var threeTitle;
var fourTitle;
var fiveTitle;
var sixTitle;
var sevenTitle;
var eightTitle;
var nineTitle;
var tenTitle;
var elevenTitle;
var twelveTitle;
var thirteenTitle;
var fourteenTitle;
var fifteenTitle;
var sixteenTitle;
var seventeenTitle;

var r = 16;
var g = 178;
var b = 232;
var barWidth = 150;

let myFont;

function preload() {
  myFont = loadFont('media/Montserrat-Light.ttf');
  data = loadTable('media/microbiomeDataFinal.csv', 'csv', 'header');
}

function setup() {
    var myCanvas = createCanvas(300, 450);
    myCanvas.parent('right_block');
    textFont(myFont);
    textAlign(CENTER, CENTER);
    textSize(11);
    stroke(0);

    one = 3.5* (data.get(sampleID,6)); //Y
    two = 3.5* (data.get(sampleID,7)); //N
    three = 3.5* (data.get(sampleID,8)); //Y
    four = 3.5* (data.get(sampleID,9)); //N
    five = 3.5* (data.get(sampleID,10)); //N
    six = 3.5* (data.get(sampleID,11)); //Y
    seven = 3.5* (data.get(sampleID,12)); //N
    eight = 3.5* (data.get(sampleID,13)); //Y
    nine = 3.5* (data.get(sampleID,14)); //Y
    ten = 3.5* (data.get(sampleID,15)); //N
    eleven = 3.5* (data.get(sampleID,16)); //N
    twelve = 3.5* (data.get(sampleID,17)); //N
    thirteen = 3.5* (data.get(sampleID,18)); //Y
    fourteen = 3.5* (data.get(sampleID,19)); //N
    fifteen = 3.5* (data.get(sampleID,20)); //Y
    sixteen = 3.5* (data.get(sampleID,21)); //N
    seventeen = 3.5* (data.get(sampleID,22)); //Y

    oneTitle = (data.get(16,6)); //Y
    twoTitle = (data.get(16,7)); //N
    threeTitle = (data.get(16,8)); //Y
    fourTitle = (data.get(16,9)); //N
    fiveTitle = (data.get(16,10)); //N
    sixTitle = (data.get(16,11)); //Y
    sevenTitle = (data.get(16,12)); //N
    eightTitle = (data.get(16,13)); //Y
    nineTitle = (data.get(16,14)); //Y
    tenTitle = (data.get(16,15)); //N
    elevenTitle = (data.get(16,16)); //N
    twelveTitle = (data.get(16,17)); //N
    thirteenTitle = (data.get(16,18)); //Y
    fourteenTitle = (data.get(16,19)); //N
    fifteenTitle = (data.get(16,20)); //Y
    sixteenTitle = (data.get(16,21)); //N
    seventeenTitle = (data.get(16,22)); //Y

}

function draw() {
var barStart = width/2-(barWidth/2);
var barHeight = height/2-200;
background(0);
fill(255);
rect(barStart, barHeight, barWidth, 350);

//ONE
fill( r, g, b, one);
rect(barStart,barHeight,barWidth,one);
if (one > 11){
  fill(0);
  text(oneTitle + " " + one.toString()/3.5 + "%", barWidth, barHeight+(one/2));
};

//TWO
console.log(two);
fill( r, g, b, two);
rect(barStart,barHeight+one,barWidth,two);
if (two > 11){
  fill(0);
  text(twoTitle + " " + two.toString()/3.5 + "%", barWidth, barHeight+one+(two/2));
};

//THREE
fill( r, g, b, three);
rect(barStart,barHeight+one+two,barWidth,three);
if (three > 11){
  fill(0);
  text(threeTitle + " " + three.toString()/3.5 + "%", barWidth, barHeight+one+two+(three/2));
};

//FOUR
console.log(four);
fill( r, g, b, four);
rect(barStart,barHeight+one+two+three,barWidth,four);
if (four > 11){
  fill(0);
  text(fourTitle + " " + four.toString()/3.5 + "%", barWidth, barHeight+one+two+three+(four/2));
};

//FIVE
console.log(five);
fill( r, g, b, five);
rect(barStart,barHeight+one+two+three+four,barWidth,five);
if (five > 11){
  fill(0);
  text(fiveTitle + " " + five.toString()/3.5 + "%", barWidth, barHeight+one+two+three+four+(five/2));
};

//SIX
fill( r, g, b, six);
rect(barStart,barHeight+one+two+three+four+five,barWidth,six);
if (six > 11){
  fill(0);
  text(sixTitle + " " + six.toString()/3.5 + "%", barWidth, barHeight+one+two+three+four+five+(six/2));
};

//SEVEN
console.log(seven);
fill( r, g, b, seven);
rect(barStart,barHeight+one+two+three+four+five+six,barWidth,seven);
if (seven > 11){
  fill(0);
  text(sevenTitle + " " + seven.toString()/3.5 + "%", barWidth, barHeight+one+two+three+four+five+six+(seven/2));
};

//EIGHT
fill( r, g, b, eight);
rect(barStart,barHeight+one+two+three+four+five+six+seven,barWidth,eight);
if (eight > 11){
  fill(0);
  text(eightTitle + " " + eight.toString()/3.5 + "%", barWidth, barHeight+one+two+three+four+five+six+seven+(eight/2));
};

//NINE
fill( r, g, b, nine);
rect(barStart,barHeight+one+two+three+four+five+six+seven+eight,barWidth,nine);
if (nine > 11){
  fill(0);
  text(nineTitle + " " +nine.toString()/3.5 + "%", barWidth, barHeight+one+two+three+four+five+six+seven+eight+(nine/2));
};

//TEN
console.log(ten);
fill( r, g, b, ten);
rect(barStart,barHeight+one+two+three+four+five+six+seven+eight+nine,barWidth,ten);
if (ten > 11){
  fill(0);
  text(tenTitle + " " + ten.toString()/3.5 + "%", barWidth, barHeight+one+two+three+four+five+six+seven+eight+nine+(ten/2));
};

//ELEVEN
console.log(eleven);
fill( r, g, b, eleven);
rect(barStart,barHeight+one+two+three+four+five+six+seven+eight+nine+ten,barWidth,eleven);
if (eleven > 11){
  fill(0);
  text(elevenTitle + " " +eleven.toString()/3.5 + "%", barWidth, barHeight+one+two+three+four+five+six+seven+eight+nine+ten+(eleven/2));
};

//TWELVE
console.log(twelve);
fill( r, g, b, twelve);
rect(barStart,barHeight+one+two+three+four+five+six+seven+eight+nine+ten+eleven,barWidth,twelve);
if (twelve > 11){
  fill(0);
  text(twelveTitle + " " + twelve.toString()/3.5 + "%", barWidth, barHeight+one+two+three+four+five+six+seven+eight+nine+ten+eleven+(twelve/2));
};

//THIRTEEN
fill( r, g, b, thirteen);
rect(barStart,barHeight+one+two+three+four+five+six+seven+eight+nine+ten+eleven+twelve,barWidth,thirteen);
if (thirteen > 11){
  fill(0);
  text(thirteenTitle + " " + thirteen.toString()/3.5 + "%", barWidth, barHeight+one+two+three+four+five+six+seven+eight+nine+ten+eleven+twelve+(thirteen/2));
};

//FOURTEEN
console.log(fourteen);
fill( r, g, b, fourteen);
rect(barStart,barHeight+one+two+three+four+five+six+seven+eight+nine+ten+eleven+twelve+thirteen,barWidth,fourteen);
if (fourteen > 11){
  fill(0);
  text(fourteenTitle + " " + fourteen.toString()/3.5 + "%", barWidth, barHeight+one+two+three+four+five+six+seven+eight+nine+ten+eleven+twelve+thirteen+(fourteen/2));
};

//FIFTEEN
fill( r, g, b, fifteen);
rect(barStart,barHeight+one+two+three+four+five+six+seven+eight+nine+ten+eleven+twelve+thirteen+fourteen,barWidth,fifteen);
if (fifteen > 11){
  fill(0);
  text(fifteenTitle + " " + fifteen.toString()/3.5 + "%", barWidth, barHeight+one+two+three+four+five+six+seven+eight+nine+ten+eleven+twelve+thirteen+fourteen+(fifteen/2));
};

//SIXTEEN
console.log(sixteen);
fill( r, g, b, sixteen);
rect(barStart,barHeight+one+two+three+four+five+six+seven+eight+nine+ten+eleven+twelve+thirteen+fourteen+fifteen,barWidth,sixteen);
if (sixteen > 11){
  fill(0);
  text(sixteenTitle + " " + sixteen.toString()/3.5 + "%", barWidth, barHeight+one+two+three+four+five+six+seven+eight+nine+ten+eleven+twelve+thirteen+fourteen+fifteen+(sixteen/2));
};

//SEVENTEEN
fill( r, g, b, seventeen);
rect(barStart,barHeight+one+two+three+four+five+six+seven+eight+nine+ten+eleven+twelve+thirteen+fourteen+fifteen+sixteen,barWidth,seventeen);
if (seventeen > 11){
  fill(0);
  text(seventeenTitle + " " + seventeen.toString()/3.5 + "%", barWidth, barHeight+one+two+three+four+five+six+seven+eight+nine+ten+eleven+twelve+thirteen+fourteen+fifteen+sixteen+(seventeen/2));
};

}

function cafSample(){
  sampleID = 3;
}
