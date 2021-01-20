const times = document.querySelectorAll('.number h1');

window.addEventListener('load', ()=>{
    
    let countDownDate = new Date("June 11, 2021 23:50:00").getTime();

    let counting = setInterval(function(){

        let now = new Date().getTime();

        let distance = countDownDate - now;

        console.log(distance);

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        times[0].textContent = days;
        times[1].textContent = hours;
        times[2].textContent = minutes;
        times[3].textContent = seconds;

        if(distance < 0){
            clearInterval(counting);
            const happy = document.querySelector('.happy');
            happy.classList.add('enable');
        }
    }, 1000)


})