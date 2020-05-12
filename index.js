setInterval(digitalClock,500)
        function digitalClock(){
            var time= new Date();
            var hours= time.getHours();
            var minute= time.getMinutes();
            var second= time.getSeconds();
          

            var en="AM";

            if(hours>12){
                en= "PM"
                hours=hours-12;
            }
            if(hours==0){
                hours=12;
            }
            if( hours <10){
                hours = '0' + hours;
            }
            if(minute <10){
                minute = "0"+ minute;

            }
            if(second <10){
                second= '0' + second;
            }

            document.getElementById('clock').innerHTML= hours + ':' + minute + ':' + second + " " + en ;
            document.getElementById('day').innerHtml= day;
        }