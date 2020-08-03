class Survey{
    constructor(){
    
    
    }
    getState(){
     var surveystateref=database.ref("gameState");
     surveystateref.on("value",function(data){
     surveyState=data.val();
     })   
    }
    update(state){
    database.ref("/").update({
     surveyState:state
    })
    }
    Start(){
     if(surveyState===0){
        voter=new Voter();
        voter.getCount();
        form=new Form();
        form.display();
     }   
    }
    }