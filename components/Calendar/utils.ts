const DAYS_IN_WEEK = 7;

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const WEEK_DAYS_FROM_SUNDAY = [0, 1, 2, 3, 4, 5, 6];

const Month = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    Novermber: 10,
    December: 11
};

export function areEqual(a, b) {
    if (!a || !b) return false;

    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

export function isLeapYear(year) {
    return !((year % 4) || (!(year % 100) && (year % 400)));
}

export function getDaysInMonth(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = DAYS_IN_MONTH[month];

    if (isLeapYear(year) && month === Month.February) {
        return daysInMonth + 1;
    } else {
        return daysInMonth;
    }
}

// Days before and after current month

const date = new Date();
console.log('date', date);

date.setDate(1);

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
console.log('lastDay', lastDay);

const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
console.log('prevLastDay', prevLastDay);

const firstDayIndex = date.getDay();
console.log('firstDayIndex', firstDayIndex);

const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
).getDay();
console.log('lastDayIndex', lastDayIndex);

const nextDays = 7 - lastDayIndex - 1;
console.log('nextDays', nextDays);

let days = "";

for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
}

for (let i = 1; i <= lastDay; i++) {
    if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth()
    ) {
        days += `<div class="today">${i}</div>`;
    } else {
        days += `<div>${i}</div>`;
    }
}

for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    // monthDays.innerHTML = days;
}
console.log(days);

// Days before and after current month

export function getDayOfWeek(date) {
    const dayOfWeek = date.getDay();

    return WEEK_DAYS_FROM_SUNDAY[dayOfWeek];
}

export function getMonthData(year, month) {
    const result = [];
    const date = new Date(year, month);
    // date.setDate(1);
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const monthStartsOn = date.getDay();
    let prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    let begin = prevLastDay - monthStartsOn + 1;
    let nextMonthDay = 1;
    let lastMonthDay = -monthStartsOn+1;

    let day = 1;

    for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
        result[i] = [];

        for (let j = 0; j < DAYS_IN_WEEK; j++) {
            // if ((i === 0 && j < monthStartsOn) || day > daysInMonth) { // Second variant
            // for (let x = monthStartsOn; x > 0; x--) { // Firast variant
            //   result[i][j] = prevLastDay - x + 1;
            // } // Firast variant
            //   result[i][j] = new Date(year, month - 1, begin++); // Second variant
            // } else {
            //   result[i][j] = new Date(year, month, day++);
            // } // Second variant
            if((i===0 && j < monthStartsOn)){
                result[i][j] = [false, new Date(year, month, lastMonthDay++)];
            } else if(day > daysInMonth){
                result[i][j] = [false, new Date(year, month+2, nextMonthDay++)];
            } else {
                result[i][j] = [true, new Date(year, month, day++)]
            }
        }
    }

    return result;
}
console.log('getMonthData', getMonthData('2020', '9'));




export function getMonthData2(year, month) {
    const result = [];
    const date = new Date(year, month);
    const daysInMonth = getDaysInMonth(date);
    const monthStartsOn = getDayOfWeek(date);

    let day = 1;

    for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
        result[i] = [];

        for (let j = 0; j < DAYS_IN_WEEK; j++) {
            if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
                result[i][j] = undefined;
            } else {
                result[i][j] = new Date(year, month, day++);
            }
        }
    }

    return result;
}
console.log('getMonthData2', getMonthData2('2020', '9'));
