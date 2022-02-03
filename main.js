"use strict"

const numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz? ");

let personalNewsDB = {
    count: numberOfNews,
    news : {},
    actors : {},
    genres : {},
    private : false,
}

const a = prompt("Oxirgi ko'rgan yangiliklarizdan biri"),
    b = prompt("Unga qancha baho bergan bo;lardiz");

personalNewsDB.news[a] = b;
console.log(personalNewsDB)


