function calculateGrade(){
    var per=document.getElementById("per-txt").value;
    var result=document.getElementById("result");
    if(per>=80){
       result.textContent='Your grade is "A+"'
    }
    else if(per >=70 && per<=79){
        result.textContent='Your grade is "A"'
    }
    else if(per >=60 && per<=69){
        result.textContent='Your grade is "B"'
    }
    else if(per >=50 && per<=59){
        result.textContent='Your grade is "C"'
    }
    else{
        result.textContent='"Fail!"'
    }
}