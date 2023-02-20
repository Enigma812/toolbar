function repair(l: number, w: number, h: number): number | string {
    if (l <= 1000 || w <= 1000 || h <= 1000) {
        const sqrWall: number = ((l + w) * h) * 2;
        let resultPaint: number = Math.ceil(sqrWall / 16);
        return resultPaint;
    }
    return 'Too much room';
}

function alarm(s: number, t: number): number {
    if (s > t) {
        return (12 - s) + t;
    } else {
        return t - s;
    }
}

function keyboard(key: string): string {
    const keys: string = 'qwertyuiopasdfghjklzxcvbnmq';
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === key) {
            return keys[i + 1];
        }
    }
    return '';
}

function lenghSegment(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}



function subway(amountStation: number, inStation: number, outStation: number): number {
    const way: number = (outStation - 1) - inStation;
    if (way >= amountStation / 2) {
        return amountStation - (way + 2);
    } else {
        return way;
    }
}

function luckyTicket(tickets: number[]): string[] {
    let answers: string[] = [];
    for (let i = 0; i < tickets.length; i++) {
        if (isLucky(splitToNumbers(tickets[i] + 1)) || isLucky(splitToNumbers(tickets[i] - 1))) {
            answers.push('Yes');
        } else
            answers.push('No');;
    }
    return answers;
}


function splitToNumbers(num: number): number[] {
    const str = num.toString();
    let result: number[] = [];
    for (let i = 0; i < str.length; i++) {
        result.push(Number.parseInt(str[i]));
    }
    return result;
}

function isLucky(nums: number[]): boolean {
    let ticketNumLeft: number = 0;
    let ticketNumRight: number = 0;
    for (let j = 0; j < 3; j++) {
        ticketNumLeft = ticketNumLeft + nums[j];
    }
    for (let j = 3; j < 6; j++) {
        ticketNumRight = ticketNumLeft + nums[j];
    }
    return ticketNumLeft === ticketNumRight;
}



function herons(heronLegsFirst: number, heronLegsSecond: number): [number, number] {
    const [minPetya, maxPetya] = amountHerons(heronLegsFirst);
    const mashaResult: [number, number] = amountHerons(heronLegsSecond);
    const minMasha: number = mashaResult[0];
    const maxMasha: number = mashaResult[1];
    return [Math.min(minPetya, minMasha), Math.max(maxPetya, maxMasha)];
}

function amountHerons(legs: number): [number, number] {
    const minHeronsAtCage: number = Math.floor(legs / 2) + 1;
    const maxHeronsAtCage: number = legs - 1;
    return [minHeronsAtCage, maxHeronsAtCage];
}

function zeros(nums: number[]): number {
    let currentZeros: number = 0;
    let maxZeros: number = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            currentZeros = currentZeros + 1; // cureentZeros += 1;
        } else {
            if (maxZeros < currentZeros) {
                maxZeros = currentZeros;
            }
            currentZeros = 0;
        }
    }
    return maxZeros;
}

function radius(sRing: number, r: number): number {
    const sCircle: number = Math.PI * Math.pow(r, 2);
    const sSmallCircle: number = sCircle - sRing;
    const rSmallCircle: number = Math.sqrt(sSmallCircle / Math.PI);
    return rSmallCircle;
}

function circlesOnNumber(n: number): number {
    const nums: number[] = splitToNumbers(n);
    let circles: number = 0;
    for (let i = 0; i < nums.length; i++) {
        // switch (nums[i]) {                          вариант решения с case
        //     case 0:
        //     case 6:
        //     case 9:
        //         circles = circles + 1;
        //         break;
        //     case 8:
        //         circles = circles + 2;
        //         break;
        //     default:
        //         break;
        // }
        if (nums[i] === 0 || nums[i] === 6 || nums[i] === 9) {
            circles = circles + 1;
        } else if (nums[i] === 8) {
            circles = circles + 2;
        }
    }
    return circles;
}

function circlesOnNumber2(n: number): number {
    const nums: number[] = splitToNumbers(n);
    let sum: number = 0;
    const circles: number[] = [1, 0, 0, 0, 0, 0, 1, 0, 2, 1];
    for (let i = 0; i < nums.length; i++) {
        sum += circles[nums[i]];
    }
    return sum;
}

function busNumbers(buses: string[]): boolean[] {
    let arr: boolean[] = [];
    for (let i = 0; i < buses.length; i++) {
        arr.push(isBusValid(buses[i]));
    }
    return arr;
    return buses.map(isBusValid);
}

function isBusValid(num: string): boolean {
    let letters: string = 'ABCEHKMOPTXY';
    let numbers: string = '0123456789';
    return letters.includes(num[0]) && numbers.includes(num[1]) && numbers.includes(num[2]) && numbers.includes(num[3]) 
    && letters.includes(num[4]) && letters.includes(num[5]);
}


function findSquare(a:number, b: number): number {
    const sRectangle: number = a * b;
    const x: number = Math.floor(Math.sqrt(sRectangle));
    if (sRectangle === x * x) {
        return x;
    } else {
        return 0;
    }
}

const fiban: number[] = [0, 1];

function fib(n: number): number {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    // return fib(n - 1) + fib(n - 2);
    let fibN1: number;
    let fibN2: number;
    if (fiban[n - 1] !== undefined) {
        fibN1 = fiban[n - 1];
    } else {
        fibN1 = fib(n - 1);
        fiban[n - 1] = fibN1;
    }
    if (fiban[n - 2] !== undefined) {
        fibN2 = fiban[n - 2];
    } else {
        fibN2 = fib(n - 2);
        fiban[n - 2] = fibN2;
    }
    return fibN1 + fibN2;
}
