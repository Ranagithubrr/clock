
function myclock(){
    var mytime = new Date();
    var myHour = mytime.getHours();
    var myMinute = mytime.getMinutes();
    var mySeconds = mytime.getSeconds();
    var ampm = 'AM';


    if(myHour > 12){
        myHour =myHour - 12;
        ampm = 'PM';
    }else{
        myHour = myHour;
    }
    if(myMinute < 10){
        myMinute = '0' + myMinute;
    }else{
        myMinute = myMinute;
    }

    if(myHour < 10){
        myHour = '0' + myHour;
    }else{
        myHour = myHour;
    }

    if(mySeconds < 10){
        mySeconds = '0' + mySeconds;
    }else{
        mySeconds = mySeconds;
    }


    var display = document.getElementById('display');
    var ampmArea = document.getElementById('ampm');
    var finalTime = myHour + ':' + myMinute + ':' + mySeconds;

    
    console.log(finalTime);


    display.innerText = finalTime;
    ampmArea.innerText = ampm;
    
}
setInterval(myclock,100);



  