const display = document.getElementById("display");
function appendToDispaly(input){
display.value += input;

}
function clearDisplay(){
 display.value ="";
}
function calculate(){
try{
    display.value = eval(display.value);
   }
catch(error){
    display.value="error";
   }
}
function changeSign(){
  display.value = display.value * Math.sign(display.value) * -1 ;
}