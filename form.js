class Form{
    constructor(){
    
    }
    display(){
    var title=createElement("h2");
    title.html("Help the poor");
    title.position(320,0);
    
    var input=createInput("NAME");
    input.position(310,160)
    var button=createButton("Vote")
    button.position(375,200)
    // var yes=createButton("Yes")
    // yes.position(355,300)
    var greeting=createElement("h3")
    var first=createElement("h3")
   
    

    button.mousePressed(function(){
        input.hide();
        button.hide();
    var name=input.value();
    voterCount+=1
    voter.update(name);
    voter.updateCount(voterCount);
    greeting.html("Hello "+name+", very kind of you for voting for the poor");
    greeting.position(170,160);
    first.html(name+", do you wish to have a mid-day meal for the poor students of the School from the school cantine ?");
     first.position(0,200);
    
    
    var no=createButton("No")
    no.position(400,260)
    var yes=createButton("Yes")
    yes.position(350,260)
    no.mousePressed (function(){
        first.hide();
        yes.hide();
        no.hide();
        var fourth=createElement("h3");
        fourth.html(name+",your survey has ended")
        fourth.position(300,200)
    })
    yes.mousePressed (function(){
        first.hide();
        yes.hide();
        no.hide();
        var second=createElement("h3")
        second.html(name+", do you want to donate a little amount for the students ?");
        second.position(150,200);
        var noo=createButton("No")
        noo.position(400,250)   
        var yess=createButton("Yes")
        yess.position(350,250)

        noo.mousePressed (function(){
            first.hide();
            yes.hide();
            no.hide();
            noo.hide();
            yess.hide();
            second.hide();
            var fifth=createElement("h3");
            fifth.html(name+",thanks for giving such a good sugestion")
            fifth.position(300,200)
        })
    
        yess.mousePressed (function(){
            first.hide();
            yes.hide();
            no.hide();
            noo.hide();
            yess.hide();
            second.hide();
            var third=createElement("h3")
            third.html(name+", what amount would you like to donate?");
            third.position(200,200);
            var lower=createButton("$2000")
            lower.position(350,250)
            var low=createButton("$4000")
            low.position(350,290)
            var medium=createButton("$6000")
            medium.position(350,330)
            var high=createButton("$8000")
            high.position(350,370)
            var higher=createButton("$10000")
            higher.position(345,410)

            lower.mousePressed (function(){
                first.hide();
                yes.hide();
                no.hide();
                noo.hide();
                yess.hide();
                second.hide();
                lower.hide();
                third.hide();
                low.hide();
                medium.hide();
                high.hide();
                higher.hide();
                var sixth=createElement("h3");
                sixth.html(name+",thanks for coordinating and donating for the poor")
                sixth.position(200,200)
            })
            low.mousePressed (function(){
                first.hide();
                yes.hide();
                no.hide();
                noo.hide();
                yess.hide();
                second.hide();
                lower.hide();
                third.hide();
                low.hide();
                medium.hide();
                high.hide();
                higher.hide();
                var seventh=createElement("h3");
                seventh.html(name+",thanks for donating so generously")
                seventh.position(200,200)
            })
            medium.mousePressed (function(){
                first.hide();
                yes.hide();
                no.hide();
                noo.hide();
                yess.hide();
                second.hide();
                lower.hide();
                third.hide();
                low.hide();
                medium.hide();
                high.hide();
                higher.hide();
                var eighth=createElement("h3");
                eighth.html(name+",Your funds which you have donated generously will be used for feeding the poor students")
                eighth.position(0,200)
            })
            high.mousePressed (function(){
                first.hide();
                yes.hide();
                no.hide();
                noo.hide();
                yess.hide();
                second.hide();
                lower.hide();
                third.hide();
                low.hide();
                medium.hide();
                high.hide();
                higher.hide();
                var ninth=createElement("h3");
                ninth.html(name+",the poor students and their parents will be very grateful to you")
                ninth.position(100,200)
            })
            higher.mousePressed (function(){
                first.hide();
                yes.hide();
                no.hide();
                noo.hide();
                yess.hide();
                second.hide();
                lower.hide();
                third.hide();
                low.hide();
                medium.hide();
                high.hide();
                higher.hide();
                var tenth=createElement("h3");
                tenth.html(name+",the poor students and their parents remember you for the whole life")
                tenth.position(100,200)
            })
           
        })
    })
   
   

  
    
    })

     }
    }