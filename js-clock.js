
const container = document.querySelector('.container'),
    clock = document.querySelector('.clock');

let christmasDay = new Date("2020.12.25");
let nowDate = new Date();

//console.log(christmasDay - nowDate);


function init(){
    let untilChristmas = christmasDay - nowDate;
    const untilDay = Math.trunc(untilChristmas / (1000 * 60 * 60 * 24));
    const untilHours = Math.trunc((untilChristmas % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    
}

init();