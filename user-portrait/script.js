const currentYear = 2022;

let birthYear;
do {
  birthYear = prompt('What is your birth year?');
  if (birthYear == null) { 
    break;
  }
} while (+birthYear < 1900 || +birthYear > 2022);

if (birthYear == null) {
  finalMessage = 'Your age is undefined.\n';
  alert('So sad that you don\'t want to enter your birth year. :\'(');
} else {
  userAge = currentYear - +birthYear;
  finalMessage = `Your age is ${userAge} or ${userAge + 1} year(s) old.\n`
}

let city;
do {
  city = prompt('What is your city?');
} while (city == '');

if (city === null) {
  finalMessage += 'You didn\'t enter your city.\n';
  alert('So sad that you don\'t want to enter your city. :\'(');
} else if (city.toUpperCase() == 'KYIV') {
  finalMessage += 'You live in the capital of Ukraine.\n';
} else  if (city.toUpperCase() == 'WASHINGTON') {
  finalMessage += 'You live in the capital of USA.\n';
} else  if (city.toUpperCase() == 'LONDON') {
  finalMessage += 'You live in the capital of UK.\n';
} else {
  finalMessage += `You live in ${city}\n`;
}

let favoriteSport;
do {
  favoriteSport = prompt('What is your favorite sport?');
} while (favoriteSport == '');

if (favoriteSport == null) {
  finalMessage += 'You didn\'t enter your favorite sport.';
  alert('So sad that you don\'t want to enter your favorite sport. :\'(');
} else if (favoriteSport.toLowerCase() == 'snooker') {
  finalMessage += 'Cool! Do you wanna be like Nutcharut Wongharuthai or Ronnie O\'Sullivan? :)\n';
} else if (favoriteSport.toLowerCase() == 'darts') {
  finalMessage += 'Cool! Do you wanna be like Beau Greaves or Phil Taylor? :)\n';
} else if (favoriteSport.toLowerCase() == 'bouldering') {
  finalMessage += 'Cool! Do you wanna be like Natalia Grossman or Tomoa Narasaki? :)\n';
} else {
  finalMessage += `You favorite sport is ${favoriteSport}\n`;
}

alert(finalMessage);



