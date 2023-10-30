let number = Math.floor(Math.random() * 100);
console.log(`Сгенерировано число: ${number},
 ${number % 2 === 0 ? 'четное' : 'нечетное'}`);
 let number1 = Math.floor(Math.random() * 100);
if (number1 % 2 === 0) {
    console.log(number1, ': четное');
} else {
    console.log(number1, ': не четное');
}