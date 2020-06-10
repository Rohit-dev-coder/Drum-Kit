var btn = document.querySelectorAll(".drum");
for(var i = 0 ; i<btn.length;i++)
{
    btn[i].addEventListener("click",function(){
        var btninnerhtml = this.innerHTML;
        makeSound(btninnerhtml);
        btnanimation(btninnerhtml);
        
    })
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    btnanimation(event.key);
});


function makeSound(key)
{
    switch (key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;    
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log("Wrong");

    }
}

function btnanimation(currentkey){
    var activebtn = document.querySelector("."+currentkey);
    activebtn.classList.add("pressed");
    setTimeout(function()
    {
        activebtn.classList.remove("pressed");
    },100);
}