var mouseEvent = "empty";
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
line_Width = 2;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
color = document.getElementById("color").value;
line_Width = document.getElementById("width_of_line").value;
radius = document.getElementById("radius").value;
mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{

current_x = e.clientX -canvas.offsetLeft;
current_y = e.clientY -canvas.offsetTop;

if (mouseEvent == "mouseDown")
{
    console.log("current positions of x and y coordinates = "+ " , x= "+current_x +" , y= "+current_y);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_Width;
    ctx.arc(current_x, current_y, radius, 0, 2*Math.PI);
    ctx.stroke();
    }
}