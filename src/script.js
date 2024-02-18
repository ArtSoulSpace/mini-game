function seasons() {
  let month = Number(
    prompt("Введи число от 1 до 12, и узнай какое это время года")
  );

  if (month === 12 || month === 1 || month === 2) {
    console.log("Зима");
    alert("Зима")
  } else if (month === 3 || month === 4 || month === 5) {
    console.log("Весна");
    alert("Весна")
  } else if (month === 6 || month === 7 || month === 8) {
    console.log("Лето");
    alert("Лето")
  } else if (month === 9 || month === 10 || month === 11) {
    console.log("Осень");
    alert("Осень")
  } else {
    console.log("Error");
    alert("Error")
  }
}

function memoryTheWords() {
  let fruits = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];

  fruits = fruits.sort(() => Math.random() - 0.5);
  alert(fruits);

  let answerOne = String(prompt("Чему равнялся первый элемент массива?"));
  let answerTwo = String(prompt("Чему равнялся последний элемент массива?"));

  if (answerOne == fruits[0] && answerTwo == fruits[6]) {
    alert("Молодец!");
  } else if (answerOne == fruits[0] || answerTwo == fruits[6]) {
    alert("Хорошо! Почти угадал");
  } else {
    alert("Потренируй память");
  }
}

function gamePuzzle() {
  const puzzle = {
    question:
      "Стоит дуб, в нем двенадцать гнезд, в каждом гнезде по четыре яйца, в каждом яйце по семь цыплят",
    help: ["Прочитай загадку в обратном порядке", "Он цикличный"],
    answer: "год",
    askQuestion() {
      let userAnswer = prompt(this.question);
      if (this.answer === userAnswer) {
        alert("Угадал! Поздравляем!");
      } else {
        if (this.help.length) {
          alert(`Не угадал!\nПодсказка: ${this.help.splice(0, 1)}`);
          puzzle.askQuestion();
        } else {
          alert("Не угадал!");
        }
      }
    },
  };
  puzzle.askQuestion();
}

function guessTheNum() {
  function randomInteger() {
    let number = Math.floor(Math.random() * 10 + 1);

    let i = 1;
    let arrNum = [];
    while (true) {
      let guess = prompt("Угадайте число от 1 до 10");

      if (i >= 3) {
        console.log(`${guess} и ${number}`);
        arrNum.push(guess);
        alert(" 3 попытки закончились ...");
        console.log(`Вы вели числа ${arrNum} правильное число ${number}`);
        break;
      }
      if (number == guess) {
        alert(`Вы угадали правильное число ${number}`);
        break;
      } else if (guess < number) {
        arrNum.push(guess);
        ++i;
        alert("попробуйте число побольше");
      } else {
        arrNum.push(guess);
        ++i;
        alert("попробуйте число поменьше");
      }
    }
  }
  randomInteger();
}
