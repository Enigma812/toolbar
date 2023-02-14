function isLess(a: number, b: number): boolean {
    return a < b;
}

function isMore(a: number, b: number): boolean {
    return a > b;
}

function is(a: number, b: number): string {
    if (a < b) {
        return '<';
    } else if (a === b) {
        return '=';
    } else {
        return '>';
    }
}

function isEnought(cones: number, nutsInCone: number, required: number): boolean {
    const quantity: number = cones * nutsInCone;
    return required <= quantity;
}

function deference(salary1: number, salary2: number, salary3: number): number {
    let max: number = 0;
    let min: number = 0;
    if (salary1 > salary2 && salary1 > salary3) {
        max = salary1;
        if (salary2 > salary3) {
            min = salary3;
        } else {
            min = salary2;
        }
    }
    if (salary2 > salary1 && salary2 > salary3) {
        max = salary2;
        if (salary1 > salary3) {
            min = salary3;
        } else {
            min = salary1;
        }
    }
    if (salary3 > salary1 && salary3 > salary2) {
        max = salary3;
        if (salary1 > salary2) {
            min = salary2;
        } else {
            min = salary1;
        }
    }
    let result: number = max - min;
    return result;
}

function deference1(salary1: number, salary2: number, salary3: number): number {
    let max: number = 0;
    let min: number = 0;
    if (salary1 > salary2 && salary1 > salary3) {
        max = salary1;
    }
    if (salary2 > salary1 && salary2 > salary3) {
        max = salary2;
    }
    if (salary3 > salary2 && salary3 > salary1) {
        max = salary3;
    }
    if (salary1 < salary2 && salary1 < salary3) {
        min = salary1;
    }
    if (salary2 < salary1 && salary2 < salary3) {
        min = salary2;
    }
    if (salary3 < salary2 && salary3 < salary1) {
        min = salary3;
    }
    let result: number = max - min;
    return result;
}

function deference2(salary1: number, salary2: number, salary3: number): number {
    let max: number = Math.max(salary1, salary2, salary3);
    let min: number = Math.min(salary1, salary2, salary3);
    let result: number = max - min;
    return result;
}

function summaryBerry(mashaBerries: number, mishaBerries: number, eaten: number): number | string {
    const collected: number = mashaBerries + mishaBerries;
    if (collected >= eaten) {
        return collected - eaten;
    } else {
        return 'Impossible';
    }
}

function crans(quantity: number): number[] {
    if (quantity % 6 !== 0) {
        throw 'error';
    }
    let pet: number = quantity / 6;
    let kat: number = pet * 2 * 2;
    return [pet, pet, kat];
}

function chubs(m1: number, m2: number, m3: number): number {
    if (m1 < 94 || m1 > 727 || m2 < 94 || m2 > 727 || m3 < 94 || m3 > 727) {
        throw 'not fat';
    }
    return Math.max(m1, m2, m3);
}

function roundRug(w: number, h: number, d: number): string {
    if (w >= d && h >= d) {
        return 'YES';
    } else {
        return 'NO';
    }
}

function isPossible(a1: number, a2: number, a3: number): boolean {
    if (a1 + a2 === a3) {
        return true;
    } else if (a1 + a3 === a2) {
        return true;
    } else if (a2 + a3 === a1) {
        return true;
    } else {
        return false;
    }
}

function isPossible2(a1: number, a2: number, a3: number): boolean {
    if (a1 + a2 === a3 || a1 + a3 === a2 || a2 + a3 === a1) {
        return true;
    } else {
        return false;
    }
}


function conditioner(tCurrent: number, tGiven: number, mode: string): number {
    if ((mode === 'freeze' && tCurrent > tGiven) || (mode === 'heat' && tCurrent < tGiven) || mode === 'auto') {
        return tGiven;
    } else {
        return tCurrent;
    }
    // if (mode === 'freeze') {
    //     if (tCurrent > tGiven) {
    //         return tGiven;
    //     } else {
    //         return tCurrent;
    //     }
    // } else if (mode === 'heat') {
    //     if (tCurrent < tGiven) {
    //         return tGiven;
    //     } else {
    //         return tCurrent;
    //     }
    // } else if (mode === 'fan') {
    //     return tCurrent;
    // } else if (mode === 'auto') {
    //     return tGiven;
    // } else {
    //     return tCurrent;
    // }
}

function tarification(monthMinutes: number, minutesPrice: number, overPrice: number, allMinutes: number): number {
    if (allMinutes <= monthMinutes) {
        return allMinutes * minutesPrice;
    } else {
        return monthMinutes * minutesPrice + (allMinutes - monthMinutes) * overPrice;
    }
}

function triangle(a: number, b: number, c: number): boolean {
    return a < b + c && b < a + c && c < a + b;
}


function moveFlowers(days: number): string[] {
    let position: string[] = ['G', 'C', 'V'];
    for (let i = 1; i <= days; i++) {
        const masha: string[] = [position[0], position[2], position[1]];
        position = masha;
        const tanya: string[] = [position[1], position[0], position[2]];
        position = tanya;
    }
    return position;
}

function summary(n: number): number {
    let sum: number = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            sum = sum + i;
        }
    }
    return sum;
}

function celebrate(year: number): string {
    let day: number = 0;
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        day = 12;
    } else {
        day = 13;
    }
    return day + '/09/' + year;
}


function orthography(letter: number, word: string): string {
    const newWord: string = word.trim();
    // let str: string = '';
    // for (let i = 0; i < newWord.length; i++) {
    //     if (i !== letter - 1) {
    //         str = str + newWord[i];
    //     }
    // }
    // return str;
    newWord.slice(letter - 1, 1);
    return newWord;
}

function book(pageSize: number, str: number): [number, number] {
    // let list: number = 1;
    // for (let i = 1; i <= 1000; i++){
    //     if (str <= i * pageSize) {
    //         list = i;
    //         break;
    //     }
    // }
    // let strList: number = str - pageSize * list;
    // return [list, strList];

    // const page: number = Math.ceil(str / pageSize);
    // let pageStr: number = 0;
    // if (str % pageSize === 0) {
    //     pageStr = pageSize;
    // } else {
    //     pageStr = str % pageSize;
    // }
    // return [page, pageStr];

    const strIndex = str - 1;
    const pageIndex = Math.floor(strIndex / pageSize);
    const lineIndex = strIndex % pageSize;
    return [pageIndex + 1, lineIndex + 1];

    //     let page1: number = 1;
    //     for (; ;) {
    //         if (str - pageSize > 0) {
    //             page1 = page1 + 1;
    //             str = str - pageSize;
    //         } else {
    //             break;
    //         }
    //     }
    //     return [page1, str];
}

function arr(): void {
    const array: number[] = [1, 2, 3, 4, 5, 7, 8, 9];
    const n = 3;                                        // если речь идет про пейджинг то это pageSize
    let result: number[][] = [];
    for (let k = 0; k < array.length; k++) {
        const j = Math.floor(k / n);
        const i = k % n;
        result[j][i] = array[k];
    }
}

function busCrash(bridgeHeights: number[], busHeight: number): string {
    for (let i = 0; i > bridgeHeights.length; i++) {
        if (busHeight < bridgeHeights[i]) {
            return `Crash ${i}`
        }
    }
    return 'No Crash';
}

function watermelon(watermelons: number[]): [number, number] {
    const maxWatermelon: number = Math.max(...watermelons);
    const minWatermelon: number = Math.min(...watermelons);
    return [maxWatermelon, minWatermelon];
}

function boiling(amountSockets: number[]): number {
    let sockets: number = 0;
    for (let i = 0; i < amountSockets.length; i++) {
        sockets = sockets + amountSockets[i];
        if (i !== amountSockets.length - 1) {
            sockets = sockets - 1;
        }
    }
    // sockets = sockets - (amountSockets.length - 1);
    return sockets;
}

function stairs(blocks: number): number {
    let restBlocks: number = blocks;
    let stair: number = 0;
    for (let i = 1; i <= restBlocks; i++) {
        stair = i;
        restBlocks = restBlocks - i;
    }
    return stair;
}

function wayTime(departureHour: number, departureMinute: number, wayHour: number, wayMinute: number): string {
    let arrivalHour: number = departureHour + wayHour;
    let arrivalMinute: number = departureMinute + wayMinute;
    if (arrivalMinute >= 60) {
        arrivalMinute = arrivalMinute - 60;
        arrivalHour = arrivalHour + 1;
    }
    if (arrivalHour >= 24) {
        arrivalHour = arrivalHour - 24;
    }
    return `${arrivalHour} : ${arrivalMinute}`;
}

function max(numbers: number[]): number {
    let result: number = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (result < numbers[i]) {
            result = numbers[i];
        }
    }
    return result;
}

function tenants(people: { age: number, gender: number }[]): number {
    let manNumber: number = -1;
    let maxAge: number = 0;
    for (let i = 0; i < people.length; i++) {
        if (maxAge < people[i].age && people[i].gender === 1) {
            maxAge = people[i].age;
            manNumber = i + 1;
        }
    }
    return manNumber;
}


function nearCells(cellNumber: number): number[] {
    let result: number[] = [];
    let cellIndex: number = cellNumber - 1;
    const n: number = 8;
    const y: number = Math.floor(cellIndex / n);
    const x: number = cellIndex % n;
    const southX: number = x;
    const southY: number = y - 1;
    if (southY >= 0) {
        result.push(southY * n + southX + 1);
    }
    const westX: number = x - 1;
    const westY: number = y;
    if (westX >= 0) {
        result.push(westY * n + westX + 1);
    }
    const eastX: number = x + 1;
    const eastY: number = y;
    if (eastX <= 7) {
        result.push(eastY * n + eastX + 1);
    }
    const nordX: number = x;
    const nordY: number = y + 1;
    if (nordY <= 7) {
        result.push(nordY * n + nordX + 1);
    }
    return result;
}


function cells(x1: number, y1: number, x2: number, y2: number): boolean {
    const rest1: number = (x1 + y1) % 2;
    const rest2: number = (x2 + y2) % 2;
    // return ((x1 + y1) % 2 === 0 && (x2 + y2) % 2 === 0) || ((x1 + y1) % 2 === 1 && (x2 + y2) % 2 === 1);
    // return ((rest1 === 0 && rest2 === 0) || (rest1 === 1 && rest2 === 1));
    return rest1 === rest2;
}

interface Detail {
    amountBefore: number;
    lostPercent: number;
    priceDetail: number;
}

function boltsAndScrews(bolts: Detail, screws: Detail): number {
    const lostBolts: number = (bolts.amountBefore * bolts.lostPercent / 100);
    const lostScrews: number = (screws.amountBefore * screws.lostPercent / 100);
    const leftBolts: number = bolts.amountBefore - lostBolts;
    const leftScrews: number = screws.amountBefore - lostScrews;
    const minComlect: number = Math.min(leftBolts, leftScrews);
    const lostSumBolts: number = (bolts.amountBefore - minComlect) * bolts.priceDetail;
    const lostSumScrew: number = (screws.amountBefore - minComlect) * screws.priceDetail;
    return lostSumBolts + lostSumScrew;
}

function weather(days: number[]): number {
    let warmDays: number = 0;
    let maxWarmDays: number = 0;
    for (let i = 0; i < days.length; i++) {
        if (days[i] > 0) {
            warmDays = warmDays + 1;
        } else {
            if (maxWarmDays < warmDays) {
                maxWarmDays = warmDays;
            }
            warmDays = 0;
        }
    }
    return maxWarmDays;
}

function roads(r: number[][]): number {
    let findRoad: number = 0;
    for (let i = 0; i < r.length; i++) {
        for (let j = i; j < r[i].length; j++) {
            if (r[i][j] === 1) {
                findRoad = findRoad + 1;
            }
        }
    }
    return findRoad;
}

function puzzle(s: number, m: number) {
    // x + y = s
    // x * y = m
    // x = s - y
    // (s - y) * y = m
    // s * y - y * y = m
    // y * y - s * y + m = 0
    // d = s * s - 4 * 1 * m
    // y = (s + -sqrt(d)) / 2
}

function workers(amountWorkerAtDay: number[]): number {
    let maxWorker: number = 0;
    for (let i = 0; i < amountWorkerAtDay.length; i++) {
        if (maxWorker < amountWorkerAtDay[i]) {
            maxWorker = amountWorkerAtDay[i];
        }
    }
    return maxWorker;
}

function crossAndZeros(str: string[][]): string {
    let variants: string[][] = [];
    variants.push([str[0][0], str[0][1], str[0][2]]);
    variants.push([str[1][0], str[1][1], str[1][2]]);
    variants.push([str[2][0], str[2][1], str[2][2]]);
    variants.push([str[0][0], str[1][0], str[2][0]]);
    variants.push([str[0][1], str[1][1], str[2][1]]);
    variants.push([str[0][2], str[1][2], str[2][2]]);
    variants.push([str[0][0], str[1][1], str[2][2]]);
    variants.push([str[0][2], str[1][1], str[2][0]]);
    for (let i = 0; variants.length; i++) {
        const variant: string = simbols(variants[i]);
        if (variant !== 'Draw') {
            return variant;
        }
    }
    return 'Draw';
}

function simbols(str: string[]): string {
    let result: string = '';
    if (str[0] === 'x' && str[1] === 'x' && str[2] === 'x') {
        result = 'Wins';
    } else if (str[0] === 'o' && str[1] === 'o' && str[2] === 'o') {
        result = 'Lose';
    } else {
        result = 'Draw';
    }
    return result;
}

function rip(str: string): string {
    let findZeros: number = 0;
    let result: string = '';
    const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            findZeros = findZeros + 1;
        } else {
            const letter: string = alphabet[findZeros];
            result = result + letter;
            findZeros = 0;
        }
    }
    return result;
}

function key(num: number): number {
    return num + s(num);
}

function keys(num: number, time: number): number {
    let n: number = num;
    for (let i = 0; i < time; i++) {
        n = key(n);
    }
    return n;
}

function s(n: number): number {
    const bins: number[] = convert(n, 2);
    let result: number = 0;
    for (let i = 0; i < bins.length; i++) {
        if (bins[i] === 1) {
            result = result + 1;
        }
    }
    return result;
}

function convert(n: number, base: number): number[] {       // base основание системы исчисления
    let left: number = n;
    let result: number[] = [];
    do {
        result.unshift(left % base);
        left = Math.floor(left / base);
    } while (left !== 0);
    return result;
}

