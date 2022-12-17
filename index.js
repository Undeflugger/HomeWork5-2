const myArray = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

console.group('Знайти суму та кількість позитивних елементів');
let positiveElement = 0;
let element = 0;
let calc = 0;
for (let i = 0; i < myArray.length; i++){
    element = myArray[i];
    if (element > 0){
        positiveElement += element;
        calc ++;
    }
}
console.log(`Сумма позитивних елементів: ${positiveElement}`);
console.log(`Кількість позитивних елементів: ${calc}`);
console.groupEnd();

console.group('Знайти мінімальний елемент масиву та його порядковий номер');
let minElement = myArray[0];
for (let i = 1; i < myArray.length; i++) {
    if (myArray[i] <= minElement) {
        minElement = myArray[i];
    }
}
let minElementIndex = myArray.indexOf(minElement);
console.log (`Мінімальний елемент масиву: ${minElement}`);
console.log(`Порядковий номер: ${minElementIndex}`);
console.groupEnd();

console.group('Знайти максимальний елемент масиву та його порядковий номер');
let maxElement = myArray[0];
for (let i = 1; i < myArray.length; i++) {
    if (myArray[i] >= maxElement) {
        maxElement = myArray[i];
    }
}
let maxElementIndex = myArray.indexOf(maxElement);
console.log (`Максимальний елемент масиву: ${maxElement}`);
console.log(`Порядковий номер: ${maxElementIndex}`);
console.groupEnd();

console.group('Визначити кількість негативних елементів');
let negativeElement = 0;
let myCalc = 0;
for (let i = 0; i < myArray.length; i++){
    negativeElement = myArray[i];
    if (negativeElement < 0){
        myCalc ++;
    }
}
console.log(`Кількість негативних елементів: ${myCalc}`);
console.groupEnd();

console.group('Знайти добуток позитивних елементів');
let positiveValue = 1;
let value = 0;
for (let i = 0; i < myArray.length; i++){
    value = myArray[i];
    if (element > 0){
        positiveValue *= element;
    }
}
console.log(`Добуток позитивних елементів: ${positiveValue}`);
console.groupEnd();