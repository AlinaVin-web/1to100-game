"use strict";

function rand1To100() {
    return Math.ceil(Math.random() * 100);
}

function stringToNumber(str) {
    if (str && +str) {
        return +str;
    } else if (str && parseInt(str)) {
        return parseInt(str);
    } else return false;
}

function game() {
    let answer;
    let tryСounter = 10;
    const randNum = rand1To100();

    function gameAttempt(text) {

        if (tryСounter <= 0) {
            answer = confirm("Попытки закончились, хотите сыграть еще?");
            if (answer) game();
            return;
        }

        let gamerNum = prompt(text + tryСounter, '');

        if (gamerNum === null) {
            alert("Игра окончена");
            return;
        }

        gamerNum = stringToNumber(gamerNum);

        if (gamerNum) {
            tryСounter--;
            if (gamerNum > randNum) gameAttempt("Загаданное число меньше. Попыток осталось: ");
            else if (gamerNum < randNum) gameAttempt("Загаданное число больше. Попыток осталось: ");
            else if (gamerNum == randNum) {
                answer = confirm("Поздравляю, Вы угадали!!! Хотите сыграть еще?");
                if (answer) game();
                return;
            }
        }
        else gameAttempt("Введите число! Попыток осталось: ");
    }

    return gameAttempt("Введите число от 1 до 100. Количество попыток: ");
}

game();