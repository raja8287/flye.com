function submit(){
var Gai=document.getElementById("Gai").value;
var Ei=document.getElementById("Ei").value;
var age=document.getElementById("age").value;
var AD=document.getElementById("AD").value;
var tt=Gai
var over=document.getElementById('over').style;
var val=document.getElementById('val').innerHTML;
if(Gai && Ei && age && AD){

if(Gai<=800000){
  //  alert("no tax");
    over.display='block';
    document.getElementById('val').innerHTML="no tax";
    document.getElementById('val2').innerHTML=" ";


    
}
else{
    if(age<40){
        var c=Gai-800000+Ei;
        c=c-AD;
        document.getElementById('val').innerHTML=c*0.03+ '&#8377;';
        over.display='block';
        document.getElementById('val2').innerHTML="after tax deductions";



    }
    else if(60<age>=40 ){
        var t=Gai-800000+Ei;
        t=t-AD
        document.getElementById('val').innerHTML=t*0.04+ '&#8377;';
        over.display='block';
        document.getElementById('val2').innerHTML="after tax deductions";


    }
    else if(age<=60){
        var p=Gai-800000+Ei;
        p=p-AD
        document.getElementById('val').innerHTML=p*0.01+ '&#8377;';
        over.display='block';
        document.getElementById('val2').innerHTML="after tax deductions";





    }


}

}
else{
      Sub1();
      Sub2();
      Sub3();
      Sub4()
   



       
}
}

function Close(){
    document.getElementById("over").style.display="none";

    
}
function Sub1(){
    var c=document.getElementById('Gai').value;
if(c){
    
    document.getElementById('la1').style.display="none";
    if(c/10){
        document.getElementById('lla1').style.display="none";
        document.getElementById('spn1').style.display="none";


    }else{
        document.getElementById('lla1').style.display="inline-block";
        document.getElementById('spn1').style.display="inline-block";

    }

}
else{
    document.getElementById('la1').style.display="inline-block";


    
}

}


function Sub2(){
    var c=document.getElementById('Ei').value;
if(c){
    
    document.getElementById('la2').style.display="none";
    if(c/10  || c==0){
        document.getElementById('lla2').style.display="none";
        document.getElementById('spn2').style.display="none";


    }else{
        document.getElementById('lla2').style.display="inline-block";
        document.getElementById('spn2').style.display="inline-block";

    }

}
else{
    document.getElementById('la2').style.display="inline-block";


    
}


}

function Sub3(){
    var c=document.getElementById('age').value;
if(c){
    
    document.getElementById('la3').style.display="none";
    if(c/10){
        document.getElementById('lla3').style.display="none";
        document.getElementById('spn3').style.display="none";


    }else{
        document.getElementById('lla3').style.display="inline-block";
        document.getElementById('spn3').style.display="inline-block";

    }

}
else{
    document.getElementById('la3').style.display="inline-block";


    
}


}
function Sub4(){
    var c=document.getElementById('AD').value;
if(c){
    
    document.getElementById('la4').style.display="none";
    if(c/10){
        document.getElementById('lla4').style.display="none";
        document.getElementById('spn4').style.display="none";


    }else{
        document.getElementById('lla4').style.display="inline-block";
        document.getElementById('spn4').style.display="inline-block";

    }

}
else{
    document.getElementById('la4').style.display="inline-block";


    
}


}


