let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);
let early = true;
let runnerage = 17;

if ( early && runnerage > 18){
raceNumber += 1000;
}

if ( early && runnerage > 18){
console.log(`race will begin at 9:30 your race number is ${raceNumber}.`);
}

else if (!early && runnerage > 18){
  console.log(`race will begin at 11:00 your race number is ${raceNumber}.`);
}

else if ( runnerage < 18){
  console.log(`race will begin at 12:30 your race number is ${raceNumber}.`);
}

else {
  console.log('the runner have to raproach of the registration desk');
}