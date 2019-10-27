//jshint esversion:6

/*
Create a filestream and copy one file to another in node.js

const fs = require("fs");

fs.copyFileSync("file1.txt", "file2.txt");
*/


/*
INSTALLING NPM PACKAGES

Installed both the superheroes npm and the supervillains npm using
      npm install supervillains and npm install superheroes
  This creates a package.json that lets us use these new packages

*/

var superheroes = require("superheroes");

var mySuperheroName = superheroes.random();

var supervillains = require("supervillains");

var mySupervillains = supervillains.random();


console.log(mySuperheroName);
console.log(mySupervillains);
