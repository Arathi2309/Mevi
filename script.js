function vote(){
    var name= document.getElementById("name").value;
    var pass=100*Math.random();
    var result=Document.getElementById("RESULT");
    result.innerHTML = name+"you have scored"
    +pass.toFixed()+"%";
}if(marks >= 0 && marks <=35){
    resultmessage = Name + "has failed with " + marks + "marks";
}else if(marks >35 && marks <=60){
    resultmessage = Name + "has passed with " + marks + "marks";
    }else if(marks >60 && marks <=80){
        resultmessage = Name + "has passed with merit" + marks + "marks";
    }else if(marks >80 && marks <=100){
        resultmessage = Name + "has passed with merit" + marks + "marks";
    }
}