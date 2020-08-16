
const container = document.querySelector('.container'),
    clock = document.querySelector('.clock');

const dayToMilliSec = 1000 * 60 * 60 * 24,
    hoursToMilliSec = 1000 * 60 * 60,
    minsToMilliSec = 1000 * 60,
    secToMilliSec = 1000;

function getUntilTime(){
    let christmasDay = new Date("2020.12.25");    
    let nowDate = new Date();
    let untilChristmas = christmasDay - nowDate;
    
    const    untilHours = Math.trunc((untilChristmas % (dayToMilliSec) / (hoursToMilliSec)));
    const    untilDay = Math.trunc(untilChristmas / dayToMilliSec);
    const    untilSec = Math.trunc((untilChristmas) % (minsToMilliSec) / secToMilliSec);
    const    untilMins = Math.trunc((untilChristmas) % (hoursToMilliSec) / minsToMilliSec);

    clock.innerText = `
    ${untilDay}d:${untilHours}h:${untilMins}m:${untilSec}s
    `;
}


function init(){
    getUntilTime();
    setInterval(getUntilTime,1000);
}

init();