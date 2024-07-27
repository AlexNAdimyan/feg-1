"use strict";

let countOfFilms;

init();

const DB = {
  count: countOfFilms,
  movies: {},
  actors: {},
  genrer: [],
  privat: false
};

function init() {
  countOfFilms = +prompt("Քանի՞ ֆիլմ եք վերջերս դիտել");

  while (countOfFilms == "" || countOfFilms == null || isNaN(countOfFilms)) {
    countOfFilms = +prompt("Քանի՞ ֆիլմ եք վերջերս դիտել");
  }
}

function rememberAndCreateUserFilms() {
  for (let i = 0; i < 2; i++) {
    const filmName = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել");
    const filmRate = +prompt(`Ինչքա՞ն եք գնահատում ${filmName} ֆիլմը`);

    if (filmName != null && filmRate != null && filmName != "" && filmRate != "" && filmName.length < 50) {
      DB.movies[filmName] = filmRate;
      console.log("Resolve");
    } else {
      console.log("Reject");
      i--;
    }
  }
}

function detectUserPersonalLevel() {
  if (DB.count < 10) {
    DB.status = "Դուք դիտել եք բավականին քիչ ֆիլմեր";
  } else if (DB.count >= 10 && DB.count < 30) {
    DB.status = "Դուք դասական ֆիլմ դիտող եք";
  } else if (DB.count >= 30) {
    DB.status = "Դուք կինոման եք !"
  } else {
    console.log("Տեղի է ունեցել խնդիր․");
  }
}
function userFavoriteGenres(){
  for (let i = 1; i < 4; i++) {
    const filmGenres = prompt(`Որն է ձեր ամենասիրած ${i} ֆիլմի ժանրը`);
    
    
    if (filmGenres != null && filmGenres != "" && filmGenres.length < 50) {
      DB.movies[filmGenres] = filmGenres;
      console.log("Resolve");
    } else {
      console.log("Reject");
      i--;
    }
  }
}

function checkDBPrivatStatus(state) {
  state ? console.log("Sorry but DB is not visible") : console.log(DB);
}

userFavoriteGenres()
rememberAndCreateUserFilms();
detectUserPersonalLevel();
checkDBPrivatStatus(DB.privat);