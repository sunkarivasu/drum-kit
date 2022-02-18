var drums = document.getElementsByClassName("drum");
alert(drums.length)
for (var i=0;i<drums.length;i++)
{
    drums[i].addEventListener("click",function()
    {
        var soundName = this.getAttribute("alt");
        var sound = new Audio("sounds/"+soundName+".mp3");
        sound.play(); 
    })
}