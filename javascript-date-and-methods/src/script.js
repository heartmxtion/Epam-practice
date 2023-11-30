export function getFullDaysBeforeNewYear(date, month) {
  if (
    typeof date !== 'number' ||
    typeof month !== 'number' ||
    isNaN(date) ||
    isNaN(month) ||
    !Number.isInteger(date) ||
    !Number.isInteger(month) ||
    date < 1 ||
    date > 31 ||
    month < 1 ||
    month > 12
  ) {
    return null;
  }

  const currentYear = new Date().getFullYear();
  const newYearDate = new Date(currentYear + 1, 0, 1);
  const inputDate = new Date(currentYear, month - 1, date);

  const timeDifference = newYearDate.getTime() - inputDate.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

  return daysDifference;
}

export function formatWithWeekday(date) {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return '';
  }

  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const weekdayIndex = date.getDay();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const formattedDate = `${weekdays[weekdayIndex]}, ${day}, ${months[month]} ${year}`;

  return formattedDate;
}

export function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime());
}

export function isAfter(date, dateToCompare) {
  if (!(date instanceof Date) || !(dateToCompare instanceof Date)) {
    return false;
  }

  return date > dateToCompare;
}

export function formatDistanceToNow(date) {
  if (!(date instanceof Date)) {
    return 'Date is unknown';
  }

  const now = new Date();
  const timeDifference = now - date;
  const secondsDifference = Math.floor(timeDifference / 1000);

  if (secondsDifference < 30) {
    return 'less than a minute';
  } else if (secondsDifference < 90) {
    return '1 minute';
  } else if (secondsDifference < 2700) {
    const minutes = Math.round(secondsDifference / 60);
    return `${minutes} minutes`;
  } else if (secondsDifference < 5370) {
    return 'about 1 hour';
  } else {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
  }
}

