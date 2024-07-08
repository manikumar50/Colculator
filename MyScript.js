const display=document.getElementById('display')
function Append(input){
    display.value+=input
}
function Calculate(){
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value="Error"
    }
   
}
function ClearScreen(){
    display.value=""
}