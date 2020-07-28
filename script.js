const date = document.querySelector('[data-day]')
const month = document.querySelector('[data-month]')
const year = document.querySelector('[data-year]')


function timeUp () {
    const currentTime = new Date();
    date.textContent = currentTime.getDate();

    month.textContent = currentTime.getMonth() + 1;

    year.textContent = currentTime.getFullYear();
    year.textContent = year.textContent.slice(2 , 4);
}


setInterval(timeUp, 1000);
timeUp();
