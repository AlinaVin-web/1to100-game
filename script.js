"use strict";

function stringToNumber(str) {
    if (str && +str) {
        return +str;
    } else if (str && parseInt(str)) {
        return parseInt(str);
    } else return false;
}

function game(rNum) {
    function gameAttempt(text) {

        let gamerNum = prompt(text, '');

        if (gamerNum === null) {
            alert("Игра окончена");
            return;
        }

        gamerNum = stringToNumber(gamerNum);

        if (gamerNum) {
            if (gamerNum > rNum) gameAttempt("Загаданное число меньше. Введите другое число");
            else if (gamerNum < rNum) gameAttempt("Загаданное число больше. Введите другое число");
            else if (gamerNum == rNum) alert("Поздравляю, Вы угадали!!!");
        }
        else gameAttempt("Введите число!");
    }

    return gameAttempt("Введите число от 1 до 100");
}

const randNum = Math.ceil(Math.random() * 100);

game(randNum);