"use strict";

const countOfFilms = +prompt("How many movies have you watched ever?");

const DB = {
  count: countOfFilms,
  movies: {},
  actors: {},
  genrer: [],
  privat: false
};

const firstFilm = prompt("What movie did you watch recently?");
const firstFilmGrade = +prompt("How much do you rate that movie?");
const secondFilm = prompt("What movie did you watch recently?");
const secondFilmGrade = +prompt("How much do you rate that movie?");
const thirdFilm = prompt("What movie did you watch recently?");
const thirdFilmGrade = +prompt("How much do you rate that movie?");

DB.movies[firstFilm] = firstFilmGrade;
DB.movies[secondFilm] = secondFilmGrade;

console.log(DB);
