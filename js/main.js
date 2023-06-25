const daysTime = document.querySelector('.days');
const hoursTime = document.querySelector('.hours');
const minutesTime = document.querySelector('.minutes');
const secondsTime = document.querySelector('.seconds');


const counterTime = () => {

    const data = new Date();


    let day = data.getDay()
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();


    
    setInterval(() => {

        console.log(' OI ')
    

        daysTime.textContent = day + ' Dias ';
        hoursTime.textContent = hours + ' Horas ';
        minutesTime.textContent = minutes + ' Minutos ';

        if(seconds === 1){
            seconds = 59
            minutes --;
        }


        if(minutes === 0){
            minutes = 59
            hours --;
        }


        if(hours === 0){
            hours = 23
            day --;
        }

        seconds > 10 ? seconds = '0' + seconds : seconds
        seconds --;

    
        secondsTime.textContent = seconds + ' Segundos '

    }, 1000)


}

counterTime()