const drink = prompt("Виберіть напій: Кава, Чай, Сік");
if (drink === "Кава") {
    console.log("Ви вибрали каву!");
} else if (drink === "Чай") {
    console.log("Ви вибрали чай!");
} else if (drink === "Сік") {
    console.log("Ви вибрали сік!");
} else {
    console.log("Невідомий вибір!");
}

const day = prompt("Введіть день тижня:");
const weekends = ['субота', 'неділя'];
const weekdays = ['понеділок', 'вівторок', 'середа', 'четвер', 'п\'ятниця'];

if (weekends.includes(day.toLowerCase())) {
    console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} — вихідний день`);
} else if (weekdays.includes(day.toLowerCase())) {
    console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} — робочий день`);
} else {
    console.log('Невірний день тижня');
}

const month = parseInt(prompt("Введіть номер місяця:"));
let season = '';

if (month >= 3 && month <= 5) {
    season = 'Весна';
} else if (month >= 6 && month <= 8) {
    season = 'Літо';
} else if (month >= 9 && month <= 11) {
    season = 'Осінь';
} else if (month === 12 || month <= 2) {
    season = 'Зима';
} else {
    season = 'Невірний номер місяця';
}

console.log(season);


const monthNumber = parseInt(prompt("Введіть номер місяця:"));
let days = 0;

if ([1, 3, 5, 7, 8, 10, 12].includes(monthNumber)) {
    days = 31;
} else if ([4, 6, 9, 11].includes(monthNumber)) {
    days = 30;
} else if (monthNumber === 2) {
    days = 28;  
} else {
    console.log("Невірний номер місяця");
}

if (days !== 0) {
    console.log(`Кількість днів у місяці: ${days}`);
}



const color = prompt("Введіть колір:").toLowerCase();
let action = '';

if (color === 'червоний') {
    action = 'Стоп';
} else if (color === 'зелений') {
    action = 'Йти';
} else if (color === 'жовтий') {
    action = 'Чекати';
} else {
    action = 'Невідомий колір';
}

console.log(action);


const num1 = parseFloat(prompt("Введіть перше число:"));
const num2 = parseFloat(prompt("Введіть друге число:"));
const operation = prompt("Виберіть операцію (+, -, *, /):");

let result = 0;
let message = '';

if (operation === '+') {
    result = num1 + num2;
} else if (operation === '-') {
    result = num1 - num2;
} else if (operation === '*') {
    result = num1 * num2;
} else if (operation === '/') {
    if (num2 === 0) {
        message = 'Ділення на нуль неможливе!';
    } else {
        result = num1 / num2;
    }
} else {
    message = 'Невідома операція';
}

message = message || `Результат: ${result}`;
console.log(message);

