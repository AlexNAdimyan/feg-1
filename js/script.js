"use strict";

const countOfFilms = +prompt("How many movies have you watched ever?");

const DB = {
  count: countOfFilms,
  movies: {},
  actors: {},
  genrer: [],
  privat: false
};



for (let i = 0; i < 2; i++) {
  const filmName = prompt("What movie did you watch recently?");
  const filmRate = +prompt(`How much do you rate ${filmName}?`);

  if (filmName != null && filmRate != null && filmName != "" && filmRate != "" && filmName.length < 50) {
    DB.movies[filmName] = filmRate;
    console.log("Resolve");
  } else {
    console.log("Reject");
    i--;
  }
}

if (DB.count < 10) {
  DB.status = "Դուք դիտել եք բավականին քիչ ֆիլմեր";
} else if (DB.count >= 10 && DB.count < 30) {
  DB.status = "Դուք դասական ֆիլմ դիտող եք";
} else if (DB.count >= 30) {
  DB.status = "Դուք կինոման եք !"
} else {
  console.log("Տեղի է ունեցել խնդիր․");
}
console.log(DB);
