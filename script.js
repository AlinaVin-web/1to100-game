"use strict";

function stringToNumber(str) {
    if (str && +str) {
        return +str;
    } else if (str && parseInt(str)) {
        return parseInt(str);
    } else return false;
}

function game(rNum) {
    let result;

    function gameAttempt(text) {
        let gamerNum = prompt(text, '');
        if (gamerNum === null) {
            alert("Игра окончена");
            result = "game over";
            return;
        }
        gamerNum = stringToNumber(gamerNum);
        if (gamerNum) {
            if (gamerNum > rNum) gameAttempt("Загаданное число меньше. Введите другое число");
            else if (gamerNum < rNum) gameAttempt("Загаданное число больше. Введите другое число");
            else if (gamerNum == rNum) {
                alert("Поздравляю, Вы угадали!!!");
                result = "win";
            }
        }
        else gameAttempt("Введите число!");
    }

    gameAttempt("Введите число от 1 до 100");
    return result;
}

const randNum = Math.ceil(Math.random() * 100);

game(randNum);
