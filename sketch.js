var  database;
var  form,voter,survey,voterCount;
var surveyState=0;


function setup(){
  database = firebase.database();
 
  createCanvas(830,655);
survey=new Survey();
survey.getState();
survey.Start();
}

function draw(){
  background("blue");
  
}
