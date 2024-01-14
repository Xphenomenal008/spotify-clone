let songIndex=0;
 
let songs=[{
    name:"satrangaIshaq"
    ,songPath:"Satranga Animal 128 Kbps.mp3",
    songcover:"staranga.jpg"
},
{
    name:"Jaml"
    ,songPath:"Abrars Entry Jamal Kudu Animal 128 Kbps.mp3",
    songcover:"jamal.jpg"
},{
    name:"satrangaIshq"
    ,songPath:"Satranga Animal 128 Kbps.mp3",
    songcover:"staranga.jpg"
},
{
    name:"mahram"
    ,songPath:"Marham Animal 128 Kbps.mp3",
    songcover:"hua me.jpg"
},
{
    name:"jaladenge"
    ,songPath:"Saari Duniya Jalaa Denge Animal 128 Kbps.mp3",
    songcover:"random.jpg"
},
]
let spa=document.getElementById("span")
let masterPlayer=document.getElementById("masterplayer")
let back=document.getElementById("back")
let next=document.getElementById("next")
let myprogressbar=document.getElementById("myprogressbar")
let audio=new Audio(songs[songIndex].songPath)
let songItem=document.querySelectorAll(".songitem")
let servantPlayer=document.querySelectorAll("#servantplayer")

songItem.forEach((Element,i)=>{
    Element.getElementsByTagName("img")[0].src=songs[i].songcover
    Element.getElementsByClassName("songname")[0].innerHTML=songs[i].name
})
 
    function playbtn(){
        servantPlayer.forEach((player)=>{
            player.classList.add("fa-circle-play");
        })
    }
    

    servantPlayer.forEach((player, songIndex) => {
        player.addEventListener("click", (e) => {
            if (player.classList.contains("fa-circle-play")) {
                player.classList.remove("fa-circle-play");
                player.classList.add("fa-circle-stop");
                
                audio.src = songs[songIndex].songPath;
                audio.play();
                audio.currentTime = 0;
                masterPlayer.classList.remove("fa-circle-play")
                masterPlayer.classList.add("fa-circle-stop" )
            } else if(player.classList.contains("fa-circle-stop")) {
                audio.pause()
                player.classList.remove("fa-circle-stop");
                player.classList.add("fa-circle-play");
            }
        });
    });
    




masterPlayer.addEventListener("click",()=>{
if(audio.paused || audio.currentTime<=0){
    audio.play();
    masterPlayer.classList.remove("fa-circle-play")
    masterPlayer.classList.add("fa-circle-stop" )
}else{
    masterPlayer.classList.remove("fa-circle-stop")
    masterPlayer.classList.add("fa-circle-play" )
    audio.pause()
}
audio.addEventListener("timeupdate",()=>{
    var progress=Math.round(audio.currentTime/audio.duration*100)
myprogressbar.value=progress
})
myprogressbar.addEventListener("change",()=>{
    var time=audio.duration*myprogressbar.value/100;
    audio.currentTime=time
})
})
next.addEventListener("click",()=>{


        songIndex++
    
     audio.src = songs[songIndex].songPath;
                audio.play();
                audio.currentTime = 0;

})
back.addEventListener("click",()=>{


        songIndex-=1
    
     audio.src = songs[songIndex].songPath;
                audio.play();
                audio.currentTime = 0;

})
