//----------Первая задача по программированию----------//
//-------------------язык TypeScript-------------------//
//------------Время выполнения 11 минут----------------//

/**
 Написать метод/функцию, который/которая на вход принимает массив городов.
 В качестве результата возвращает строку, где города разделены запятыми,
 а в конце стоит точка. Например, «Москва, Санкт-Петербург, Воронеж.»
 */

// определяем массив с городами
const arrayOfCities = ['Москва', 'Санкт-Петербург', 'Воронеж'];

// определяем функцию для конвертации массива городов в строку
function convertArrayToString(arrayOfCities: string[]): string {
  return arrayOfCities.join(', ') + '.';
}

// выводим в лог результат работы функции
console.log('=================Начало первой задачи=================');
console.log('Результат работы функции:', convertArrayToString(arrayOfCities));

// убеждаемся, что выводится именно строка
console.log('Проверка на тип "строка":', typeof convertArrayToString(arrayOfCities));
console.log('================Окончание первой задачи===============');

//----------Вторая задача по программированию----------//
//-------------------язык TypeScript-------------------//
//------------Время выполнения 13 минут----------------//

/**
 Написать метод/функцию, который/которая на вход принимает число (float),
 а на выходе получает число, округленное до пятерок.
 Пример:
 27 => 25, 27.8 => 30, 41.7 => 40.
 */

// определяем числа float
const exampleOfNumberOne = 27;
const exampleOfNumberTwo = 27.8;
const exampleOfNumberThree = 41.7;

// определяем функцию для округленное чисел float до пятёрок
function getNumberRoundedUpToFives(number: number): number {
  return Math.round(number / 5) * 5;
}

// выводим в лог результат работы функции
console.log('=================Начало второй задачи=================');
console.log('Число 27 =>', getNumberRoundedUpToFives(exampleOfNumberOne));
console.log('Число 27.8 =>', getNumberRoundedUpToFives(exampleOfNumberTwo));
console.log('Число 41.7 =>', getNumberRoundedUpToFives(exampleOfNumberThree));
console.log('================Окончание второй задачи===============');

//----------Третья задача по программированию----------//
//-------------------язык TypeScript-------------------//
//------------Время выполнения 17 минут----------------//

/**
 Написать метод/функцию, который/которая на вход принимает число (int),
 а на выходе выдаёт слово "компьютер" в падеже, соответствующем указанному количеству.
 Например, «25 компьютеров», «41 компьютер», «1048 компьютеров».
 */

// определяем числа (количество компьютеров)
const numberOfComputers25 = 25;
const numberOfComputers41 = 41;
const numberOfComputers1048 = 1048;

// определяем функцию, которая на выходе выдаёт слово "компьютер" в нужном падеже.
function getComputerInRightCase(number: number): string {
  // определяем переменную для записи слова "компьютер" в нужном падеже.
  let computerInRightCase: string = '';

  // получаем последний символ в числе
  const lastCharacterOfNumber = number.toString().slice(-1);

  // оператор ветвления для проверки чисел (сравнение происходит со строкой, а не с числом, так как выше, мы привели число к строке)
  if (lastCharacterOfNumber === '1') {
    computerInRightCase = 'компьютер';
  } else if (lastCharacterOfNumber === '2' || lastCharacterOfNumber === '3' || lastCharacterOfNumber === '4') {
    computerInRightCase = 'компьютера';
  } else if (lastCharacterOfNumber === '0' || lastCharacterOfNumber === '5' || lastCharacterOfNumber === '6' || lastCharacterOfNumber === '7' || lastCharacterOfNumber === '8' || lastCharacterOfNumber === '9') {
    computerInRightCase = 'компьютеров';
  }
  return `${number} ${computerInRightCase}.`;
}

// выводим в лог результат работы функции
console.log('=================Начало третьей задачи=================');
console.log('Число 25 =>', getComputerInRightCase(numberOfComputers25));
console.log('Число 41 =>', getComputerInRightCase(numberOfComputers41));
console.log('Число 1048 =>', getComputerInRightCase(numberOfComputers1048));
console.log('===============Окончание третьей задачи================');


//----------Четвёртая задача по программированию-------//
//-------------------язык TypeScript-------------------//
//------------Время выполнения 18 минут----------------//

/**
 Написать метод/функцию, который/которая на вход принимает целое число,
 а на выходе возвращает то, является ли число простым
 (не имеет делителей, кроме 1 и самого себя).
 */

// определяем числа, которые мы будем проверять
const exampleOfNumber1 = 1; // не простое и не составное число
const exampleOfNumber2 = 2; // простое число
const exampleOfNumber3 = 3; // простое число
const exampleOfNumber4 = 4; // составное число
const exampleOfNumber5 = 5; // простое число


// определяем функцию, которая умеет различать простые и составные числа
function identifyPrimeNumber(number: number): string {
  if (number < 2) {
    return 'Число должно быть больше 1';
  } else if (number === 2) {
    return 'Простое число';
  }

  let i = 2;
  const limit = Math.sqrt(number);
  while (i <= limit) {
    if (number % i === 0) {
      return 'Составное число';
    }
    i += 1;
  }
  return 'Простое число';
}

// выводим в лог результат работы функции
console.log('================Начало четвёртой задачи================');
console.log('Число 1 =>', identifyPrimeNumber(exampleOfNumber1));
console.log('Число 2 =>', identifyPrimeNumber(exampleOfNumber2));
console.log('Число 3 =>', identifyPrimeNumber(exampleOfNumber3));
console.log('Число 4 =>', identifyPrimeNumber(exampleOfNumber4));
console.log('Число 5 =>', identifyPrimeNumber(exampleOfNumber5));
console.log('==============Окончание четвёртой задачи===============');


//------------Пятая задача по программированию---------//
//-------------------язык TypeScript-------------------//
//------------Время выполнения 24 минуты---------------//

/**
 Написать метод, который определяет, какие элементы присутствуют в двух экземплярах в каждом из массивов
 (= в двух и более, причем в каждом).
 На вход подаются два массива.
 На выходе массив с необходимыми совпадениями.
 Пример:
 [7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
 На выходе [1, 17]
 */

// определяем два массива с числами, которые мы будем сверять
const arrayOne = [7, 17, 1, 9, 1, 17, 56, 56, 23];
const arrayTwo = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];

// определяем функцию для сравнения массивов с числами
function getMatchesInArrays(arrayOne: number[], arrayTwo: number[]): number[] {
  // определяем массив с выходными данными текущей функции
  let result: number[];

  // определяем массивы для записи уникальных элементов
  const UniqueElementsOfArrayOne: number[] = [];
  const UniqueElementsOfArrayTwo: number[] = [];

  // получаем в новый массив элементы, которые дважды встречаются в первом массиве.
  arrayOne.reduce(function (acc, el) {
    // считаем количество повторяющихся элементов в первом массиве
    acc[el] = (acc[el] || 0) + 1;
    // выбираем из них только те элементы, которые повторяются дважды.
    for (let key in acc) {
      if (acc[key] === 2) {
        UniqueElementsOfArrayOne.push(Number(key));
      }
    }
    return acc;
  }, {});
  // оставляем в массиве только уникальные элементы (чтобы они не повторялись)
  // @ts-ignore
  const uniqueItemArrayOne = Array.from(new Set(UniqueElementsOfArrayOne));

  // получаем в новом массиве элементы, которые дважды встречаются во втором массиве.
  arrayTwo.reduce(function (acc, el) {
    // считаем количество повторяющихся элементов во втором массиве
    acc[el] = (acc[el] || 0) + 1;
    // выбираем из них только те элементы, которые повторяются дважды.
    for (let key in acc) {
      if (acc[key] === 2) {
        UniqueElementsOfArrayTwo.push(Number(key));
      }
    }
    return acc;
  }, {});

  // оставляем в массиве только уникальные элементы (чтобы они не повторялись)
  // @ts-ignore
  const uniqueItemArrayTwo = Array.from(new Set(UniqueElementsOfArrayTwo));

  // найти совпадения в двух массивах
  result = uniqueItemArrayOne.filter(function (obj) {
    return uniqueItemArrayTwo.indexOf(obj) >= 0;
  });
  
  return result;
}

// выводим в лог результат работы функции
console.log('==================Начало пятой задачи==================');
console.log('Совпадающие числа =>', getMatchesInArrays(arrayOne, arrayTwo));
console.log('===============Окончание пятой задачи=================');