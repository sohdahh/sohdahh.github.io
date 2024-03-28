function genRand(min, max, decimalPlaces) {  
    var rand = Math.random()*(max-min) + min;
    var power = Math.pow(10, decimalPlaces);
    return Math.floor(rand*power) / power;
}

document.body.style.setProperty('--rand1', Math.random(genRand(0, 40, 0)));
document.body.style.setProperty('--rand2', Math.random(genRand(0, 40, 0)));
