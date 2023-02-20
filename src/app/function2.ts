// 1
// Несмотря ни на что, Петр Васильевич не отчаялся и решил начать свое дело. Тщательно проанализировав бизнес-климат в своем регионе, 
// Петр Васильевич пришел к выводу, что наиболее целесообразным будет открыть новый таксопарк. Первое с чего решил начать новоиспеченный бизнесмен – это закупить автомобили. 
// За все время работы Петр Васильевичу удалось накопить сумму S, которую он готов потратить на закупку машин.

// В городе, в котором живет Петр Васильевич, есть только один автосалон. 
// Известно, что в этом автосалоне выставлено на продажу N автомобилей, причем установлено, что стоимость i-го автомобиля равняется Ai. 
// Вашей задачей является помочь еще неопытному бизнесмену Петр Васильевичу приобрести максимальное количество автомобилей, потратив сумму не более S.

function business(money: number, carPrices: number[]): number {
    const sortCarPrice: number[] = carPrices.sort((a, b) => a - b);
    let leftMoney: number = money;
    let purChasedCar: number = 0;
    for (let i = 0; i < sortCarPrice.length; i++) {
        if (leftMoney - i >= 0) {
            leftMoney = leftMoney - i;
            purChasedCar = purChasedCar + 1;
        }
    }
    return purChasedCar;
}


// 2
// В этом лифте кнопки с номерами этажей заменены двумя другими кнопками. При нажатии на первую кнопку лифт поднимается на один этаж вверх,
// а при нажатии на вторую – опускается на один этаж вниз.
// Младшему брату Вилли Дилли очень нравится кататься на новом лифте. Он катается на нём до тех пор, пока не побывает на каждом из этажей хотя бы по одному разу. 
// После этого Дилли довольный возвращается домой.
// Зная порядок, в котором Дилли нажимал на кнопки лифта, попробуйте определить общее количество этажей в доме Вилли и Дилли.

function floors(buttons: number[]): number {
    let maxfloors = 1;
    let currentFloor: number = 1;
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i] === 1) {
            currentFloor = currentFloor + 1;
            if (currentFloor > maxfloors) {
                maxfloors = currentFloor;
            }
        } else {
            currentFloor = currentFloor - 1;
            if (currentFloor < 1) {
                currentFloor = 1;
                maxfloors += 1;
            }
        }
    }
    return maxfloors;
}


// 3
// В некотором государстве действует N фирм, конкурирующих между собой. У каждой фирмы есть некоторая прибыль в год, равная V[i] американских рублей. 
// У царя есть любимые фирмы, а есть нелюбимые. Соответственно, налог для всех фирм разный и назначается царем в индивидуальном порядке. 
// Налог на i-ую фирму равен p[i] процентов.
// Собиратели статистики решили посчитать, с какой фирмы в государственную казну идет наибольший доход (в казну идут все налоги).
// сначала записано число N - число фирм (0 < N ≤ 100). Далее идет N целых неотрицательных чисел, 
// не превышающих 154 - доходы фирм, а затем еще N целых чисел от 0 до 100 - налоги фирм в процентах.

interface Firm {
    income: number;
    duty: number;
}

function moreDuty(firms: Firm[]): number {
    let maxPercent: number = 0;
    for (let i = 0; i < firms.length; i++) {
        const percent = firms[i].income / 100 * firms[i].duty;
        if (percent > maxPercent) {
            maxPercent = percent;
        }
    }
    return maxPercent;
}


// 4
// Студент Василий живет в общежитии. Отделение банка, в котором он производит оплату за проживание, имеет всего две кассы, поэтому почти всегда длинная очередь к ним. 
// Первая касса открывается в 8.00, вторая – в 8.05. Последний клиент будет принят в 20.00. Очередь единая, и очередной клиент обслуживается, 
// как только освобождается одна из касс. На обслуживание одного клиента уходит ровно 10 минут. Василий приходит ровно в 8.00 и видит, сколько человек стоит перед ним. 
// Требуется определить, сколько времени ему придется простоять в очереди, и вообще обслужат ли его сегодня.

function queue(numberAtQueue: number): [number, number] | string {
    const maxClients = 12 * 60 / 5;
    if (numberAtQueue > maxClients) {
        return 'No';
    }
    let waitingMinutes: number = 0;
    let waitingHours: number = 0;
    for (let i = 2; i <= numberAtQueue; i++) {
        waitingMinutes = waitingMinutes + 5;
        if (waitingMinutes === 60) {
            waitingHours = waitingHours + 1;
            waitingMinutes = 0;
        }
    }
    return [waitingHours, waitingMinutes];
}


// 5
// Пицца – любимое лакомство Васи, он постоянно покупает и с удовольствием употребляет различные сорта этого великолепного блюда. Однажды, в очередной раз, 
// разрезая круглую пиццу на несколько частей, Вася задумался: на какое максимальное количество частей можно разрезать пиццу за N прямых разрезов?
// Входной файл INPUT.TXT содержит натуральное число N – число прямых разрезов пиццы

function pizza(incision: number) {
    let amountSlices: number = 1;
    for (let i = 1; i <= incision; i++) {
        amountSlices = amountSlices + i;
    }
    return amountSlices;
}

// медведь пиздец какой молодец!!!!


// 6
// На днях Иван у себя в прихожей выложил кафель, состоящий из квадратных черных и белых плиток. Прихожая Ивана имеет квадратную форму 4х4, 
// вмещающую 16 плиток. Теперь Иван переживает, что узор из плиток, который у него получился, может быть не симпатичным. 
// С точки зрения дизайна симпатичным узором считается тот, который не содержит в себе квадрата 2х2, состоящего из плиток одного цвета.
// По заданному расположению плиток в прихожей Ивана требуется определить: является ли выполненный узор симпатичным.
// Входной файл INPUT.TXT содержит 4 строки по 4 символа «W» или «B» в каждой, описывающие узор из плиток.

function pattern(tiles: string[][]): string {
    for (let i = 0; i < tiles.length - 1; i++) {
        for (let j = 0; j < tiles[i].length - 1; j++) {
            if (tiles[i][j] === tiles[i][j + 1] && tiles[i][j] === tiles[i + 1][j] && tiles[i][j] === tiles[i+ 1][j + 1]) {
                return 'Ugly';
            }
        }
    }
    return 'Beautiful';
}


// 7
// Задана последовательность, состоящая только из символов ‘>’, ‘<’ и ‘-‘. Требуется найти количество стрел, 
// которые спрятаны в этой последовательности. Стрелы – это подстроки вида ‘>>-->’ и ‘<--<<’.
// <<<<>>--><--<<--<<>>>--><<<<<

function arrows(symbols: string): number {
    let amountArrow: number = 0;
    for (let i = 0; i < symbols.length; i++) {
        const test = symbols.slice(i, i + 5);
        if (test === '>>-->' || test === '<--<<') {
            amountArrow = amountArrow + 1;
        }
    }
    return amountArrow;
}


// 8
// Уравнение для пятиклассников представляет собой строку длиной 5 символов. Второй символ строки является либо знаком '+' (плюс) либо '-' (минус), 
// четвёртый символ — знак '=' (равно). Из первого, третьего и пятого символов ровно два являются цифрами из диапазона от 0 до 9, и один — буквой x, 
// обозначающей неизвестное.
// Требуется написать программу, которая позволит решить данное уравнение относительно x.

function equation(str: string): number {
    let result: number = 0;
    if (str[0] === 'x') {
        if (str[1] === '+') {
            result = Number(str[4]) - Number(str[2]);
        } else {
            result = Number(str[4]) + Number(str[2]);
        }
    } else if (str[2] === 'x') {
        if (str[1] === '+') {
            result = Number(str[4]) - Number(str[0]);
        } else {
            result = Number(str[4]) + Number(str[0]);
        }
    } else if (str[5] === 'x') {
        if (str[1] === '+') {
            result = Number(str[0]) + Number(str[2]);
        } else {
            result = Number(str[0]) - Number(str[2]);
        }
    } else {
        result = Number.NaN;
    }
    return result;
}


// 9
// Выведите в выходной файл округленное до n знаков после десятичной точки число E. В данной задаче будем считать, что число Е в точности равно 2.7182818284590452353602875.

function rounding(num: number): string {
    const e: string = '2.7182818284590452353602875';
    const test = e[num + 2];
    const n = Number.parseInt(test, 10);
    if (n < 5) {
        return e.slice(0, num + 2);
    } else {
        const prevStr = e[num + 1];
        const prevNumber = Number.parseInt(prevStr, 10);
        return e.slice(0, num + 1) + (prevNumber + 1);
    }
}


// 10
// В этом году при поступлении в университет абитуриентам требовалось успешно сдать экзамены по математике и физике. 
// К сожалению, с этим испытанием справились не все. Известно, что на экзамены пришло N абитуриентов, из них M – сдали математику, 
// F – сдали физику, а L – не сдали ни одного предмета. Найдите, сколько абитуриентов сдали оба предмета и стали студентами, а также определите, 
// сколько абитуриентов сдали один экзамен: только по математике или только по физике.
// В выходной файл OUTPUT.TXT выведите три числа через пробел:
// a) количество абитуриентов, сдавших оба экзамена;
// b) количество абитуриентов, сдавших только математику;
// с) количество абитуриентов, сдавших только физику.

function exam(students: number, math: number, phys: number, fail: number): [number, number, number] {
    const anyExam: number = students - fail;
    const onlyPhys: number = anyExam - math;
    const onlyMath: number = anyExam - phys;
    const doneAll: number = anyExam - (onlyPhys + onlyMath);
    return [doneAll, onlyMath, onlyPhys];
}

// 11
// Мальчик Вася каждый день ездит на метро. Утром он едет в школу, а вечером того же дня, обратно из школы, домой. Для того, чтобы немного сэкономить, 
// он покупает электронную смарт-карту на X поездок. Когда он хочет зайти в метро, он прикладывает карту к турникету. Если на карте осталось ненулевое количество поездок, 
// то турникет пропускает Васю и списывает с карты одну поездку. Если же на карте не осталось поездок, то турникет не пропускает Васю, и он (Вася) вынужден купить на этой же 
// станции новую карту на X поездок и вновь пройти через турникет.
// Вася заметил, что в связи с тем, что утром метро переполнено, покупать новую карту утром накладно по времени, и он может опоздать в школу. 
// В связи с этим он хочет понять: будет ли такой день, что с утра, поехав в школу, Вася обнаружит у себя на карточке ноль поездок.
// Вася больше никуда на метро не ездит и поэтому заходит в метро только на станции около дома и на станции около школы.
// Во входном файле INPUT.TXT содержится ровно 2 строки. В первой содержится слово «School» или «Home» в зависимости от того, где первый раз Вася купил карточку на X поездок. 
// Во второй строке содержится натуральное число X, 1 ≤ X ≤ 1000.

function roadCard(place: string, amountTrip: number): string {
    if ((place === 'Home' && amountTrip % 2 === 0) || (place === 'School' && amountTrip % 2 !== 0) || amountTrip === 1) {
        return 'Yes';
    }
    return 'No';
}


// 12
// Студент Валера являет собой классический пример лентяя. На занятия он практически не ходит, и только в конце семестра появляется в университете и сдает ”хвосты”. 
// Его заветная мечта: найти такой день, когда можно будет сдать сразу все долги. У него есть расписание работы преподавателей, из которого точно известно, с какого и 
// по какой день месяца каждый преподаватель ежедневно будет доступен.
// Помогите Валере написать программу, которая по расписанию будет определять, сможет ли Валера сдать все долги за один день или нет.
// В первой строке входного файла INPUT.TXT содержится натуральное число N – количество предметов, которые нужно сдать Валере (N ≤ 100). 
// Далее идет N строк, каждая из которых состоит из двух чисел A и B, задающих отрезок работы очередного преподавателя (1 ≤ A ≤ B ≤ 31).


interface Dates {
    firstDate: number;
    lastDate: number;
}

function debts(subjects: Dates[]): boolean {
    const minLastDate: number = Math.min(...subjects.map((subject: Dates) => subject.lastDate));
    const maxFirstDate: number = Math.max(...subjects.map((subject: Dates) => subject.firstDate));
    return maxFirstDate <= minLastDate;
}


// 13
// Емельян уже расставил все свои корабли, кроме одного однопалубного. Такой корабль занимает ровно одну клетку.
// Задана расстановка кораблей Емельяна. Найдите число способов поставить оставшийся однопалубный корабль. При этом учитывайте, 
// что по правилам его можно ставить только в ту клетку, все соседние с которой не заняты. В этой задаче соседними считаются клетки, имеющие общую сторону.
// Первая строка входного файла INPUT.TXT содержит два числа: N и M (1 ≤ N, M ≤ 100). Последующие N строк описывают игровое поле - каждая из них содержит M символов. 
// Символом «.» (точка) обозначена свободная клетка, символом «*» (звездочка) - занятая кораблем.

function hasShip(field: string[][], y: number, x: number): boolean {
    if (y < 0 || y >= field.length || x < 0 || x >= field[y].length) {
        return false;
    } else {
        return field[y][x] === '*';
    }
}

function seaWar(field: string[][]): number {
    let ships: number = 0;
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (!hasShip(field, i, j - 1) && !hasShip(field, i, j + 1) && !hasShip(field, i + 1, j) && !hasShip(field, i - 1, j)) {
                ships = ships + 1;
            }
        }
    }
    return ships;
}


// 14.
// Требуется написать программу, которая находит цифру, на которую оканчивается число AB.
// Входной файл INPUT.TXT состоит из единственной строки, содержащей два целых числа A и B, разделенных пробелом (1 ≤ A,B ≤ 10000).

function lastNum(num: number, degree: number): number {
    const onDegree: number = Math.pow(num, degree);
    const arrNum: number[] = onDegree.toString(10).split('').map(int => parseInt(int, 10));
    return arrNum[length - 1];
    // return onDegree % 10;
}


// 15
// Необходимо представить целое число N в виде суммы M примерно равных целых чисел.
// Будем считать, что числа примерно равны, если они отличаются друг от друга не более чем на единицу.
// Во входном файле INPUT.TXT записаны два натуральных числа N и M через пробел, каждое из которых не превосходит 30000
// Выходной файл OUTPUT.TXT должен содержать M примерно равных целых чисел, сумма которых должна быть равна N.

function sum(num1: number, num2: number): number[] {
    const division: number = Math.floor(num1 / num2);
    let remainder: number = num1 % num2;
    let sum: number[] = [];
    for (let i = 0; i < num2; i++) {
        let element = division;
        if(i < num2 - remainder) {
            element += 1;
            remainder -= 1;
        }
        sum.push(element);
    }

    return sum.sort((a, b) => a - b);
}


// 16
// Но Али-Баба радовался недолго. Поразмыслив, он понял, что может унести с собой не более M предметов, в то время как в пещере находится целых N предметов. 
// Али-Баба внимательно рассмотрел каждый предмет и оценил его стоимость. К своему удивлению Али-Баба обнаружил в пещере также бесполезные, и даже вредные вещи, 
// ценность которых сомнительна. Естественно, что Али-Баба хочет взять с собой такие предметы, чтобы их суммарная ценность была максимальна. Помогите ему найти эту сумму.
// В первой строке входного файла INPUT.TXT находятся два числа, разделенные пробелом: N – количество предметов в пещере (1 ≤ N ≤ 1000), M – максимальное количество предметов, 
// которые Али-Баба может унести с собой (0 ≤ M ≤ N). Во второй строке располагаются N целых чисел, разделенных пробелами. 
// Каждое такое число Ci означает стоимость i-го сокровища (1 ≤ i ≤ N, -1000 ≤ Ci ≤ 1000).
// В выходной файл OUTPUT.TXT выведите единственное целое число – максимальную суммарную стоимость сокровищ, которые Али-Баба может унести из пещеры.

function AliBaba(aliBag: number, treasures: number[]): number {
    // let goodTreasures: number[] = treasures.filter((treasure: number) => treasure > 0);
    // for (let i = 0; i < treasures.length; i++) {
    //     if (treasures[i] > 0) {
    //         goodTreasures.push(treasures[i]);
    //     }
    // }
    let sortGoodTreasures: number[] = treasures.filter((treasure: number) => treasure > 0).sort((a, b) => b - a);
    let sum: number = 0;
    for (let j = 0; j < sortGoodTreasures.length && j < aliBag; j++) {
        sum = sum + sortGoodTreasures[j];
    }
    return sum;
}


// 17
// Всем командам, участвующим в карусели, предлагаются в строгом порядке одни и те же задачи, которые необходимо решить в установленное время. 
// Система подсчета баллов такова, что доминирующим фактором является не количество решенных задач, а длины последовательностей правильных решений.
// Начисление баллов происходит согласно следующей схеме:
//     первая задача стоит 3 балла;
//     если к задаче дан верный ответ, то команда получает ее стоимость, а следующая задача будет стоить на 1 балл больше;
//     если на задачу дан неверный ответ, то команда получает за решение 0 баллов, а следующая задача будет стоить на 3 балла меньше, но не менее 3 баллов.
// Вам требуется написать программу, которая по результатам ответов команды определит итоговый балл.
// Первая строка входного файла INPUT.TXT содержит натуральное число N – количество задач в карусели (N ≤ 105). Во второй строке расположены N цифр 0 или 1, 
// разделенные пробелом; i-я цифра соответствует корректности ответа команды на i-ю задачу (0 – неверный ответ, 1 – верный ответ).
// В выходной файл OUTPUT.TXT выведите целое число – количество набранных баллов.

function carousel(answerTasks: number[]): number {
    let reward: number = 3;
    let scores: number = 3;
    let result: number = 0;
    for (let i = 0; i < answerTasks.length; i++) {
        if (answerTasks[i] === 1) {
            result = result + reward;
            reward = reward + 1;
        } else {
            if (reward - 3 < 3) {
                reward = 3;
            } else {
                reward = reward - 3;
            }
        }
    }
    return result;
}


// 18
// Волшебник Мерлин продает волшебные мечи принцам, желающим убить дракона. Основная характеристика меча – число драконьих голов, которые он срубает за удар. 
// Основная характеристика дракона – число голов, которые он может отрастить за сеанс регенерации. Бои принцев с драконами всегда протекают одинаково – принц атакует, 
// и прячется за щитом; дракон атакует огненным дыханием и регенерирует; так продолжается до тех пор, пока после очередного удара у дракона не кончатся головы. 
// Ясно, впрочем, что не каждым мечом можно победить каждого дракона. Заказ, поступающий Мерлину, всегда содержит число голов дракона и скорость его регенерации. 
// Подсчитайте по известной атакующей силе меча, сможет ли принц убить такого дракона таким мечом и, если да, то сколько ударов потребуется.
// Единственная строка входного файла INPUT.TXT содержит число N – число голов, которые меч срубает одним ударом. Далее идет число M – число голов дракона. 
// За ним идет K – число голов, которые дракон регенерирует за раз
// В выходной файл OUTPUT.TXT выведите число ударов, которые необходимо нанести принцу, чтобы убить дракона, если это возможно. 
// Если таким мечом убить дракона нельзя, то следует вывести «NO».

const fight = (powerSword: number, amountHeads: number, regenerateHeads: number) => amountHeads - powerSword > 0 ? amountHeads - powerSword + regenerateHeads : 0;
    
function princeVsDragon(powerSword: number, amountHeads: number, regenerateHeads: number): number | string {
    let leftHeads: number = amountHeads;
    let strike: number = 0;
    do {
        leftHeads = fight(powerSword, leftHeads, regenerateHeads);
        strike = strike + 1;
        if (leftHeads >= amountHeads) {
            return 'No';
        }
    } while (leftHeads > 0);
    return strike;
}


// 19
// Гена собирается на туристический слет учеников своей школы. В своем классе он был назначен ответственным за палатки. У себя дома он нашел 3 палатки: 
// первая из них весит a1 килограмм и вмещает b1 человек, вторая весит a2 килограмм и вмещает b2 человек, третья весит a3 килограмм и вмещает b3 человек.
// В классе Гены K человек. Выясните, может ли он выбрать палатки так, чтобы в них все могли поместиться. При этом учитывайте, 
// что выбранные палатки должны суммарно весить не более W килограмм.
// ервая строка входного файла INPUT.TXT содержит два целых числа: K и W (1 ≤ K ≤ 15, 1 ≤ W ≤ 30). 
// Вторая строка содержит шесть целых чисел: a1, b1, a2, b2, a3, b3 (1 ≤ a1, a2, a3 ≤ 10, 1 ≤ b1, b2, b3 ≤ 15).
// В выходной файл OUTPUT.TXT выведите YES, если палатки указанным образом выбрать можно, и NO в противном случае

interface Tent {
    kg: number;
    capacity: number;
}

function tents(peoples: number, maxKg: number, tent: Tent[]): string {
    if (tent[0].capacity + tent[1].capacity >= peoples && tent[0].kg + tent[1].kg <= maxKg) {
        return 'Yes';
    } else if (tent[0].capacity + tent[2].capacity >= peoples && tent[0].kg + tent[2].kg <= maxKg) {
        return 'Yes';
    } else if (tent[1].capacity + tent[2].capacity >= peoples && tent[1].kg + tent[2].kg <= maxKg) {
        return 'Yes';
    } else if (tent[0].capacity + tent[1].capacity + tent[2].capacity >= peoples && tent[0].kg + tent[1].kg + tent[2].kg <= maxKg) {
        return 'Yes';
    } else if (
        (tent[0].capacity >= peoples && tent[0].kg <= maxKg) ||
        (tent[1].capacity >= peoples && tent[1].kg <= maxKg) ||
        (tent[2].capacity >= peoples && tent[2].kg <= maxKg)
    ) {
        return 'Yes';
    } else {
        return 'No';
    }
}


// 20
// Все любят сладости и, в частности, мед. Винни-Пух тоже его любит. Каждый день он шел лакомиться медом, а по дороге домой заходил в гости к Кролику. 
// Но приближалась зима, и Винни-Пух начал задумываться о запасах. Он решил в течении N дней не лакомиться медом, а собирать полный горшочек объемом V горстей и 
// перекладывать его в бочку. В первый день своего собирательства он так и сделал. Терпения хватило на один день. А на следующий день он не смог устоять и по дороге 
// домой съел K горстей меда из горшочка. В каждый следующий день из полного горшочка он съедал на K горстей больше.
// Необходимо определить объем меда, собранного Винни-Пухом на зиму.
// Входной файл INPUT.TXT содержит три натуральных числа N (N ≤ 300), V (V ≤ 107) и K (K ≤ 1000). K – объем, на который Винни-Пух с каждым днем съедал больше меда.
// В выходной файл OUTPUT.TXT выведите два значения через пробел. Сначала идет строка «NO», если случилось, что Винни-Пух пришел к Кролику с пустым горшочком и «YES» в противном случае. 
// Второе значение – объем меда, заготовленного Винни-Пухом на зиму.

function honeyForWinter(days: number, pot: number, eating: number): [string, number] {
    let barrel: number = pot;
    let waningPot: number = pot;
    for (let i = 2; i <= days; i++) {
        waningPot = waningPot - eating;
        barrel = barrel + waningPot;
        if (waningPot <= 0) {
            return ['No', barrel];
        }
    }
    return ['Yes', barrel];
}