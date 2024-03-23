showTime();
    function showTime(){

        document.getElementById('CurrentTime').innerHTML = new Date().toUTCString();
    }
    setInterval(function()
    {
        showTime();
    },1000);