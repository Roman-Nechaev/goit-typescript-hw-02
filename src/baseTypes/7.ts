/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekdayName {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: WeekdayName): boolean {
  return day === WeekdayName.Saturday || day === WeekdayName.Sunday;
}

isWeekend(WeekdayName.Saturday); // true

isWeekend(WeekdayName.Monday); //false
