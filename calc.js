function buttonclick(v)
{
    document.getElementById("value").value+=v
}
function clearscreen()
{
       document.getElementById("value").value=""
}
function equalclick()
{
     var text=document.getElementById("value").value
     var result=eval(text)
     document.getElementById("value").value=result
}