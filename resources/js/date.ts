/**
 * @date 2022-06-07
 * @description 选择时间范围
 * @author zy <zyskr@qq.com>
 */

/**
 * 选择当前月时间范围
 * @param timestamp 13位时间戳
 * @returns Array [月开始timestamp, 月结束timestamp]
 */
function chooseCurrentMouth(timestamp: number): Array<number> | string {
  if (timestamp.toString().length !== 13) {
    return '请传入13位时间戳';
  }

  const date: Date = new Date(timestamp);
  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1;

  let currentMonthHowManayDays: number = new Date(year, month, 0).getDate();
  let monthStartTimestamp: number = new Date(year, month - 1, 1).getTime();
  let monthEndTimestamp: number = new Date(year, month - 1, currentMonthHowManayDays).getTime();

  return [monthStartTimestamp, monthEndTimestamp];
}

/**
 * 选择当前周时间范围
 * @param timestamp 13位时间戳
 * @returns Array [周开始timestamp, 周结束timestamp]
 */
function chooseCurrentWeek(timestamp: number): Array<number> | string {
  if (timestamp.toString().length !== 13) {
    return '请传入13位时间戳'
  }
  const now: number = Date.now()
  let scope: Array<number> = [24*60*60*1000, 2*24*60*60*1000, 3*24*60*60*1000, 4*24*60*60*1000, 5*24*60*60*1000, 6*24*60*60*1000, 7*24*60*60*1000];
  const weekTimeLeave = now % (24*60*60*1000);
  let weekDay: number = 0;
  try {
    scope.forEach((e, i) => {
      if (weekTimeLeave <= e) {
        weekDay = i
        throw new Error();
      }
    })
  } catch {
    return [now - weekTimeLeave, now - weekTimeLeave + 6 * 24 * 60 * 60 * 1000]
  }
}

/**
 * 选择当前年时间范围
 * @param timestamp 13位时间戳
 * @returns Array [年份开始timestamp, 年份结束timestamp]
 */
function chooseCurrentYear(timestamp: number): Array<number> | string {
  if (timestamp.toString().length !== 13) {
    return '请传入13位时间戳';
  }
  const now: Date = new Date();
  const year: number = now.getFullYear();

  return [new Date(year, 0, 1).getTime(), new Date(year, 11, 31).getTime()];
}

/**
 * 判断传入的年份是否为闰年
 * @param year 年份
 * @returns false: 平年 true: 闰年
 */
function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
