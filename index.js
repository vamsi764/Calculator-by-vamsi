
const display=document.getElementById("display");
function appendToDisplay(input)
{
    const last=display.value.slice(-1);
    if(["+","-","/","*"].includes(last) && ["+","-","/","*"].includes(input)) return;
    display.value+=input;
}
function clearDisplay()
{
    display.value="";
}
function clearLast()
{
    display.value=display.value.slice(0,-1);
}
function calculate()
{
    try{
    display.value=eval(display.value);
    }
    catch(error)
    {
        display.value="Error";
    }
}