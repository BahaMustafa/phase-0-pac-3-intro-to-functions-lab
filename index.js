function shout(string) {
  return string.toUpperCase();  
}
function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(shout(string))
}

function logWhisper(string){
    console.log(whisper(string))
}

function sayHiToHeadphonedRoommate(string){
    var cantHear = "I can't hear you!";
    var answering = "YES INDEED!";
    var eating = "I would love to!";
    if(string.toLowerCase(string) == string){
    return cantHear;
}
else if (string.toUpperCase(string) == string){
return answering;
}
else if ("Let's have dinner together!" == string){
    return eating;
}
}
