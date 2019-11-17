var per=0;
var timer;
timer=setInterval(function(){
    $('.bar').css('width',per+'%')
    per+=1;
    if(per>100){
        clearInterval(imer);

    }
},30)