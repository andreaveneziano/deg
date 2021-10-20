var song = document.getElementById("myaudio");
var icon = document.getElementById("icon");
icon.onclick = function(){
	if (song.paused){
        song.play();
    }else {
        song.pause();
    }
}