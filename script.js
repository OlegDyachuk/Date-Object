console.log('Вивести поточну дату у форматі “рік-місяць-день”.');
let date = new Date();
console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`);
console.log('-----------');


console.log('Вивести на екран поточний день тижня українською мовою. Додатково створіть функцію яка параметром отримує день тижня і виводить його українською.');
function dayUkr(num){
    let daysUkr = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота']
    return daysUkr[num];
}
console.log(dayUkr(date.getDay()));
console.log('-----------');


console.log('Взнати який день тижня був 22 квітня 1990 р.');
let date1 = new Date('1990-3-22');
console.log(dayUkr(date1.getDay()));
console.log('-----------');


console.log('Вивести на екран кількість хвилин починаючи з 1 січня 1970 року.');
console.log(`${Math.floor(date.getTime() / 60000)} хв з 1 січня 1970 року`);
console.log('-----------');


console.log('Вивести на екран кількість годин які пройшли до сьогоднішнього дня з 29 грудня 2018 р.');
let date2 = new Date('2018-11-29');
console.log(`${Math.floor(date.getTime() / 3600000)} хв з 29 грудня 2018 року`);
console.log('-----------');


console.log('Вивести на екран кількість годин, хвилин, секунд що залишилося до опівночі.');
let date3 = [date.getHours(), date.getMinutes(), date.getSeconds()];
console.log(`До нової доби лишилось ${23 - date3[0]} годин ${59 - date3[1]} хвилин ${59 - date3[2]} секунд`);
console.log('-----------');


console.log('Написати скріпт який буде відображати дату, що буде через “n” - днів від сьогодні. (“n” - днів, користувач вводить з клавіатури).');
let num;
while(true){
    num = prompt('Введіть кількість днів:');
    if(num < 1 | num >= 1000 | !Number(num)){
        console.log('Помилка введених данних!!!');
        break;
    }
    break;
}
let months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']
const dayMillis = 86400000;
let newDate = new Date();
newDate.setTime(date.getTime() + (num * dayMillis)); 
console.log(`Через ${num} днів буде така дата:`);
console.log(`День тижня: ${dayUkr(newDate.getDay())}`);
console.log(`Число: ${newDate.getDate()}`);
console.log(`Місяць: ${months[newDate.getMonth()]}`);
console.log(`Рік: ${newDate.getFullYear()}`);


