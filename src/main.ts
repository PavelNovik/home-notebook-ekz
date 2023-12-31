// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    // console.log(nums)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    // let result = 0
    // for (let i = 0; i < arguments.length; i++) {
    //     result += arguments[i]
    // }
    // return result

    return nums.reduce((acc, n) => acc + n)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    return a + b > c && b + c > a && a + c > b ? a === b && b === c ? '10' : a === b || a === c || b === c ? '01' : '11' : '00'
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    // return ""
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return number.toString().split('').reduce((acc, n) => acc + +n, 0)
    // let sum=0
    // const str = number.toString()
    // for(const el of str) {
    //     sum+= +el
    // }
    // return sum
    // let result = 0
    // while (number !== 0) {
    //     const rest = number % 10
    //     result += rest
    //     number = (number - rest) / 10
    // }
    // return result
    // return 123
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    // let even = 0
    // let odd = 0
    // for (let i = 0; i < arr.length; i++) {
    //     i % 2 === 0 ? even += arr[i] : odd += arr[i]
    // }
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        i % 2 === 0 ? sum += arr[i] : sum -= arr[i]
    }
    // return true
    // return even > odd
    return sum > 0
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return array.filter(n => n % 1 === 0 && n > 0).map(n => n * n)
// let result = []
//     for(let i = 0; i< array.length; i++) {
//         if (array[i]%1===0 && array[i]>0) result.push(Math.pow(array[i], 2))
//     }
// return result
    // return []
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    // const count = N
    return N === 0 ? 0 : N + sumFirstNumbers(N - 1)

    // if (N === 0) {
    //     return 0
    // } else {
    //     return N + sumFirstNumbers(N - 1)
    // }
    // return N !== 0 ? N + sumFirstNumbers(N - 1) : 0
    // let sum = 0;
    // for (let i = 1; i <= N; i++) sum += i;
    // return sum;
    // return 0
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    // let money = amountOfMoney;
    let res: number[] = []
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    // banknotes.forEach((a) => {
    //     for (let i = 0; i < Math.floor(money / a); i++) {
    //         res.push(a)
    //     }
    //     money = money % a;
    // });
    for (let b of banknotes) {
        while (amountOfMoney - b >= 0) {
            res.push(b)
            amountOfMoney -= b
        }
    }

    return res;
    // return [1]
}