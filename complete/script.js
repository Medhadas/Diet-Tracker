
var gender;
var height;
var weight; 
var age; 
var E;
var hardwork;

document.getElementsByClassName('age')[0].value=(sessionStorage.getItem('AGE'));
document.getElementsByClassName('heightf')[0].value=(sessionStorage.getItem('HEIGHTF'));
document.getElementsByClassName('heighti')[0].value=(sessionStorage.getItem('HEIGHTI'));
document.getElementsByClassName('heightc')[0].value=(sessionStorage.getItem('HEIGHTC'));
document.getElementsByClassName('weightk')[0].value=(sessionStorage.getItem('WEIGHTK'));
document.getElementsByClassName('weightp')[0].value=(sessionStorage.getItem('WEIGHTP'));

function NEXT(){
   
sessionStorage.setItem('gender',gender);
sessionStorage.setItem('height',height);
sessionStorage.setItem('weight',weight);
sessionStorage.setItem('age',age);
}

function next(){
  
if(event.target.className=='weightp'){ var result=document.getElementsByClassName('weightk')[0];
result.value=(event.target.value*1.0)/2.20462;
result.value=parseFloat(result.value).toFixed(2);
sessionStorage.setItem('WEIGHTP',document.getElementsByClassName('weightp')[0].value);
sessionStorage.setItem('WEIGHTK',result.value);
}

else if(event.target.className=='weightk'){ var result=document.getElementsByClassName('weightp')[0];
result.value=(+event.target.value)*2.20462;
sessionStorage.setItem('WEIGHTK',document.getElementsByClassName('weightk')[0].value);
sessionStorage.setItem('WEIGHTP',result.value);
}  

else if(event.target.className=='heightf'||event.target.className=='heighti'){
   var y=document.getElementsByClassName('heightf')[0];
var x=document.getElementsByClassName('heighti')[0];
var result=document.getElementsByClassName('heightc')[0];
result.value=(12*(+y.value)+(+x.value))*2.54;
sessionStorage.setItem('HEIGHTF',document.getElementsByClassName('heightf')[0].value);
sessionStorage.setItem('HEIGHTI',document.getElementsByClassName('heighti')[0].value);
sessionStorage.setItem("HEIGHTC",result.value);
}  

else if(event.target.className=='heightc'){
 var y=document.getElementsByClassName('heightf')[0];
 var x=document.getElementsByClassName('heighti')[0];
 var result=document.getElementsByClassName('heightc')[0];
  x.value=(1.0*result.value)/2.54;
  y.value=Math.floor(x.value/12);
x.value=x.value-(y.value*12);
x.value=parseFloat(x.value);
x.value=x.value.toFixed(2); 
sessionStorage.setItem('HEIGHTC',document.getElementsByClassName('heightc')[0].value);

sessionStorage.setItem('HEIGHTF',x.value);
sessionStorage.setItem('HEIGHTI',y.value);

}
 
else if(event.target.className=='age'){
   sessionStorage.setItem('AGE',document.getElementsByClassName('age')[0].value);}

else if(event.target.className=='button'){
weight=document.getElementsByClassName('weightk')[0].value;
height=document.getElementsByClassName('heightc')[0].value;
age=document.getElementsByClassName('age')[0].value;
if( document.getElementsByClassName("needed")[0].checked == true){gender='male';}
else gender='female';


NEXT();
}}

function validateForm(){ 
var age =document.getElementsByClassName('age')[0];
var heightf=document.getElementsByClassName('heightf')[0];
var heighti=document.getElementsByClassName('heighti')[0];
var heightc=document.getElementsByClassName('heightc')[0];
var weightk=document.getElementsByClassName('weightk')[0];
var weightp=document.getElementsByClassName('weightp')[0];

 if (!(Number(age.value)>0)){
   alert("Please enter a Valid age");   return false;}


if( !(Number(+heightc.value)>0  )||(!(Number(+heighti.value)>0  )&&!(Number(+heightf.value)>0  ))){
   alert("Please enter a Valid Height");    return false;}

 if( !(Number(+weightk.value)>0)||!(Number(+weightp.value)>0 )){
    alert("Please enter a Valid Weight");    return false;}

    do{  
      E=String(prompt('Do you do basic Exercise? Yes or No!!!'));
      }while(!(E.toLowerCase()=='yes'||E.toLowerCase()=='no'));
      
      if(E.toLowerCase()=='yes')
      {
      do{
      hardwork=Number(prompt('Well nice ;) then How much mins you work in a day'));
      
      }while(!hardwork);}
      else{hardwork=0;}

      sessionStorage.setItem('E',E);
      sessionStorage.setItem('hardwork',hardwork);
    
      return(true);
    }

