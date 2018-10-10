export const ONE_SECOND = 1000;
export const ONE_MINUTE = 60 * ONE_SECOND;
export const ONE_HOUR = 60 * ONE_MINUTE;
export const ONE_DAY = 24 * ONE_HOUR;
export const ONE_MONTH = 30 * ONE_DAY;

export class RemainingTimeObject {
  // static ZERO = new RemainingTimeObject({
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 0,
  // });

  constructor({
    days, hours, minutes, seconds,
  }) {
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }
}
RemainingTimeObject.ZERO = new RemainingTimeObject({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

function fillZeroPrefix(num) {
  if (num > Number.MAX_SAFE_INTEGER) {
    throw new Error(`${num} is over MAX_SAFE_INTEGER`);
  }

  if (num < 0) {
    return '00';
  }

  return num < 10 ? `0${num}` : String(num);
}

const TimeUtils = {
  ONE_SECOND,
  ONE_MINUTE,
  ONE_HOUR,
  ONE_DAY,
  ONE_MONTH,

  getRemainingTimeObject(endTime, startTime = new Date()) {
    if (endTime <= startTime) {
      return RemainingTimeObject.ZERO;
    }

    const remainingTime = endTime - startTime;
    return new RemainingTimeObject({
      seconds: fillZeroPrefix(parseInt((remainingTime % ONE_DAY % ONE_HOUR % ONE_MINUTE) / ONE_SECOND, 10)),
      minutes: fillZeroPrefix(parseInt((remainingTime % ONE_DAY % ONE_HOUR) / ONE_MINUTE, 10)),
      hours: fillZeroPrefix(parseInt((remainingTime % ONE_DAY) / ONE_HOUR, 10)),
      days: parseInt(remainingTime / ONE_DAY, 10),
    });
  },

  formatTimestamp(date, format) {
    const newDate = new Date(parseInt(date, 10));
    const newFormat = format || 'YYYY-MM-DD';
    const values = {
      Y: newDate.getFullYear(),
      M: newDate.getMonth() + 1,
      D: newDate.getDate(),
      h: newDate.getHours(),
      m: newDate.getMinutes(),
      s: newDate.getSeconds(),
    };

    return newFormat.replace(/Y+|M+|D+|h+|m+|s+/g, (match) => {
      let result = values[match[0]];
      if (match.length > 1 && result.toString().length !== match.length) {
        result = ((new Array(match.length)).join('0') + result).slice(-2);
      }
      return result;
    });
  },
};

export default TimeUtils;
