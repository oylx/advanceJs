// 1.普通函数的用法，Date对象可以作为普通函数直接调用，返回一个代表当前时间的字符串。
// 无论有没有参数，直接调用Date总是返回当前时间。
Date()// "Fri Dec 11 2020 10:52:05 GMT+0800 (中国标准时间)"

// 2.构造函数的用法
// Date还可以当作构造函数使用。Date对象可以接受多种格式的参数，返回一个该参数对应的时间实例。如果不加参数，实例代表的就是当前时间。
var today = new Date();
// 参数为时间零点开始计算的毫秒数
new Date(1378218728000)
// Tue Sep 03 2013 22:32:08 GMT+0800 (CST)

// 参数为日期字符串
new Date('January 6, 2013');
// Sun Jan 06 2013 00:00:00 GMT+0800 (CST)

// 参数为多个整数，
// 代表年、月、日、小时、分钟、秒、毫秒
new Date(2013, 0, 1, 0, 0, 0, 0)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)

// 3.日期的运算
// 类型自动转换时，Date实例如果转为数值，则等于对应的毫秒数；如果转为字符串，则等于对应的日期字符串。所以，两个日期实例对象进行减法运算时，返回的是它们间隔的毫秒数；进行加法运算时，返回的是两个字符串连接而成的新字符串。

var d1 = new Date(2000, 2, 1);
var d2 = new Date(2000, 3, 1);

d2 - d1
// 2678400000
d2 + d1
// "Sat Apr 01 2000 00:00:00 GMT+0800 (CST)Wed Mar 01 2000 00:00:00 GMT+0800 (CST)"

// 4.静态方法
// 4.1Date.now(),返回当前时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数，相当于 Unix 时间戳乘以1000。
Date.now() //1607668500876

// 4.2Date.parse() ,用来解析日期字符串，返回该时间距离时间零点（1970年1月1日 00:00:00）的毫秒数。
Date.parse('Aug 9, 1995') //807897600000

// 4.3Date.UTC(),接受年、月、日等变量作为参数，返回该时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数。
Date.UTC(2011, 0, 1, 2, 3, 4, 567) //1293847384567

// 5.实例方法,Date的实例对象，有几十个自己的方法，除了valueOf和toString，可以分为以下三类。
/*
to类：从Date对象返回一个字符串，表示指定的时间。
get类：获取Date对象的日期和时间。
set类：设置Date对象的日期和时间。
*/
var d = new Date();
d.valueOf() // 1607668767314
d.getTime() // 1607668767314
var start = new Date();
// ...
var end = new Date();
var elapsed = end - start;

// 5.1 to 类方法
// 5.1.1Date.prototype.toString()
var d = new Date()
d.toString()// "Tue Jan 01 2013 00:00:00 GMT+0800 (CST)"
d// "Tue Jan 01 2013 00:00:00 GMT+0800 (CST)"
// 5.1.2Date.prototype.toUTCString(),toUTCString方法返回对应的 UTC 时间，也就是比北京时间晚8个小时。
d.toUTCString()// "Mon, 31 Dec 2012 16:00:00 GMT"

// 5.1.3get 类方法 Date对象提供了一系列get*方法，用来获取实例对象某个方面的值。
/*
getTime()：返回实例距离1970年1月1日00:00:00的毫秒数，等同于valueOf方法。
getDate()：返回实例对象对应每个月的几号（从1开始）。
getDay()：返回星期几，星期日为0，星期一为1，以此类推。
getYear()：返回距离1900的年数。
getFullYear()：返回四位的年份。
getMonth()：返回月份（0表示1月，11表示12月）。
getHours()：返回小时（0-23）。
getMilliseconds()：返回毫秒（0-999）。
getMinutes()：返回分钟（0-59）。
getSeconds()：返回秒（0-59）。
getTimezoneOffset()：返回当前时间与 UTC 的时区差异，以分钟表示，返回结果考虑到了夏令时因素。
*/

/**
 * 计算本年度还剩下多少天
 */
function leftDays () {
  var today = new Date();
  var endYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999);
  var msPerDay = 24 * 60 * 60 * 1000;
  return Math.round((endYear.getTime() - today.getTime()) / msPerDay);
}
var a = leftDays()
console.log(a);

// get*方法返回的都是当前时区的时间，Date对象还提供了这些方法对应的 UTC 版本，用来返回 UTC 时间。
/*
getUTCDate()
getUTCFullYear()
getUTCMonth()
getUTCDay()
getUTCHours()
getUTCMinutes()
getUTCSeconds()
getUTCMilliseconds()
*/

// 5.1.4set 类方法，Date对象提供了一系列set*方法，用来设置实例对象的各个方面。
/*
setDate(date) ：设置实例对象对应的每个月的几号（1 - 31），返回改变后毫秒时间戳。
setYear(year): 设置距离1900年的年数。
setFullYear(year[, month, date]) ：设置四位年份。
setHours(hour[, min, sec, ms]) ：设置小时（0 - 23）。
setMilliseconds() ：设置毫秒（0 - 999）。
setMinutes(min[, sec, ms]) ：设置分钟（0 - 59）。
setMonth(month[, date]) ：设置月份（0 - 11）。
setSeconds(sec[, ms]) ：设置秒（0 - 59）。
*/




// 前端的各种日期操作


// 获取当前时间戳
var timestamp = Date.parse(new Date()); //精确到秒
var timestamp = (new Date()).valueOf();  //精确到毫秒
var timestamp = new Date().getTime(); //精确到毫秒
var timestamp = +new Date();
var timestamp = Date.now();


// 获取指定时间戳
var timestamp = (new Date(" 2019/10/24 08:00:00")).getTime();
var timestamp = (new Date(" 2019-10-24 08:00:00")).getTime();

// 获取当前时间的前一天/后一天的时间戳
var timestamp = +new Date() - 24 * 60 * 60 * 1000;
var timestamp = +new Date() + 24 * 60 * 60 * 1000;

// 今日零点时间戳
var timestamp = new Date(new Date().toLocaleDateString()).getTime();

// 今日最晚时间 23:59:59的时间戳
var timestamp = new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1;


/**
 * @param {number} n 天数 获取当前时间的n天后的时间戳
 * @returns {Number} 返回值为时间毫秒值
 */
function toNextTimes (n) {
  let timestamp = +new Date() + n * 86400000;
  return timestamp;
}


/***
 *  @return {*} WeekFirstDay 返回本周第一天的时间
 */
function showWeekFirstDay () {
  let Nowdate = new Date();
  let WeekFirstDay = new Date(Nowdate - (Nowdate.getDay() - 1) * 86400000);
  return WeekFirstDay;
}


/***
 *  @return {*} WeekLastDay 返回本周最后一天的时间
 */
function showWeekLastDay () {
  let Nowdate = new Date();
  let WeekFirstDay = new Date(Nowdate - (Nowdate.getDay() - 1) * 86400000);
  let WeekLastDay = new Date((WeekFirstDay / 1000 + 6 * 86400) * 1000);
  return WeekLastDay;
}


/***
 *  @return {*} MonthFirstDay 返回本月第一天的时间
 */
function showMonthFirstDay () {
  let Nowdate = new Date();
  let MonthFirstDay = new Date(Nowdate.getFullYear(), Nowdate.getMonth());
  return MonthFirstDay;
}


/***
 *  @return {*} MonthLastDay 返回本月最后一天的时间
 */
function showMonthLastDay () {
  let Nowdate = new Date();
  let MonthNextFirstDay = new Date(Nowdate.getFullYear(), Nowdate.getMonth() + 1);
  let MonthLastDay = new Date(MonthNextFirstDay - 86400000);
  return MonthLastDay;
}


/**
 * 日期转时间戳
 * @param {String} time - 日期字符串，如'2018-8-8','2018,8,8','2018/8/8'
 * @returns {Number} 返回值为时间毫秒值
 */
function timeToTimestamp (time) {
  let date = new Date(time);
  let timestamp = date.getTime();
  return timestamp;
}



/***
 *  格式化当前时间
 *  @return {string} timeText 返回系统时间字符串
 */
function getdataTimeSec () {
  let time = new Date();
  let weekDay;
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let day = time.getDate();
  //获取时分秒
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  //检查是否小于10
  h = check(h);
  m = check(m);
  s = check(s);
  let now_day = time.getDay();
  switch (now_day) {
    case 0: {
      weekDay = "星期日"
    }
      break;
    case 1: {
      weekDay = "星期一"
    }
      break;
    case 2: {
      weekDay = "星期二"
    }
      break;
    case 3: {
      weekDay = "星期三"
    }
      break;
    case 4: {
      weekDay = "星期四"
    }
      break;
    case 5: {
      weekDay = "星期五"
    }
      break;
    case 6: {
      weekDay = "星期六"
    }
      break;
    case 7: {
      weekDay = "星期日"
    }
      break;
  }
  let timeText = year + "年" + month + "月" + day + "日  " + " " + weekDay + " " + h + ":" + m + ":" + s;

  return timeText
}


//时间数字小于10，则在之前加个“0”补位。
function check (i) {
  let num;
  i < 10 ? num = "0" + i : num = i;
  return num;
}


/**
 *  返回指定时间戳之间的时间间隔
 *  @param {*} startTime 开始时间的时间戳
 *  @param {*} endTime 结束时间的时间戳
 *  @return {string} str 返回时间字符串
 */
function getTimeInterval (startTime, endTime) {
  let runTime = parseInt((endTime - startTime) / 1000);
  let year = Math.floor(runTime / 86400 / 365);
  runTime = runTime % (86400 * 365);
  let month = Math.floor(runTime / 86400 / 30);
  runTime = runTime % (86400 * 30);
  let day = Math.floor(runTime / 86400);
  runTime = runTime % 86400;
  let hour = Math.floor(runTime / 3600);
  runTime = runTime % 3600;
  let minute = Math.floor(runTime / 60);
  runTime = runTime % 60;
  let second = runTime;
  let str = '';
  if (year > 0) {
    str = year + '年';
  }
  if (year <= 0 && month > 0) {
    str = month + '月';
  }
  if (year <= 0 && month <= 0 && day > 0) {
    str = day + '天';
  }
  if (year <= 0 && month <= 0 && day <= 0 && hour > 0) {
    str = hour + '小时';
  }
  if (year <= 0 && month <= 0 && day <= 0 && hour <= 0 && minute > 0) {
    str = minute + '分钟';
  }
  if (year <= 0 && month <= 0 && day <= 0 && hour <= 0 && minute <= 0 && second > 0) {
    str += second + '秒';
  }
  str += '前';
  return str;
}



/**
 * 按类型格式化日期
 * @param {*} date 具体日期变量
 * @param {string} dateType 需要返回类型
 * @return {string} dateText 返回为指定格式的日期字符串
 */
function getFormatDate (date, dateType) {
  let dateObj = new Date(date);
  let month = dateObj.getMonth() + 1;
  let strDate = dateObj.getDate();
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  let seconds = dateObj.getSeconds();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;

  }
  if (hours >= 0 && hours <= 9) {
    hours = "0" + hours
  }
  if (minutes >= 0 && minutes <= 9) {
    minutes = "0" + minutes
  }
  if (seconds >= 0 && seconds <= 9) {
    seconds = "0" + seconds
  }

  let dateText = dateObj.getFullYear() + '年' + (dateObj.getMonth() + 1) + '月' + dateObj.getDate() + '日';
  if (dateType == "yyyy-mm-dd") {
    dateText = dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1) + '-' + dateObj.getDate();
  }
  if (dateType == "yyyy.mm.dd") {
    dateText = dateObj.getFullYear() + '.' + (dateObj.getMonth() + 1) + '.' + dateObj.getDate();
  }
  if (dateType == "yyyy-mm-dd MM:mm:ss") {
    dateText = dateObj.getFullYear() + '-' + month + '-' + strDate + ' ' + hours + ":" + minutes + ":" + seconds;
  }
  if (dateType == "mm-dd MM:mm:ss") {
    dateText = month + '-' + strDate + ' ' + hours + ":" + minutes + ":" + seconds;
  }
  if (dateType == "yyyy年mm月dd日 MM:mm:ss") {
    dateText = dateObj.getFullYear() + '年' + month + '月' + strDate + '日' + ' ' + hours + ":" + minutes + ":" + seconds;
  }
  return dateText;
}



/**
 * 判断是否为闰年
 * @param  {number} year 要判断的年份
 * @return {boolean} 返回布尔值
 */
function leapYear (year) {
  return !(year % (year % 100 ? 4 : 400));
}


/**
 * 返回两个年份之间的闰年
 * @param  {number} start 开始年份
 * @param  {number} end 结束年份
 * @return {array}  arr 返回符合闰年的数组
 */
function leapYears (start, end) {
  let arr = [];
  for (var i = start; i < end; i++) {
    if (leapYear(i)) {
      arr.push(i)
    }
  }
  return arr
}


/**
 * 判断时间格式是否有效
 * 短时间，如 (10:24:06)
 * @param  {string} str 需要验证的短时间
 * @return {boolean} 返回布尔值
 */
function isTime (str) {
  var a = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);
  if (a == null) { return false; }
  if (a[1] >= 24 || a[3] >= 60 || a[4] >= 60) {
    return false
  }
  return true;
}

/**
 * 短日期，形如 (2019-10-24)
 * @param  {string} str 需要验证的短时间
 * @return {boolean} 返回布尔值
 */
function strDateTime (str) {
  var result = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
  if (result == null) return false;
  var d = new Date(result[1], result[3] - 1, result[4]);
  return (d.getFullYear() == result[1] && d.getMonth() + 1 == result[3] && d.getDate() == result[4]);
}

/**
 * 长日期时间，形如 (2019-10-24 10:24:06)
 * @param  {string} str 需要验证的短时间
 * @return {boolean} 返回布尔值
 */
function strDateTime (str) {
  var result = str.match(/^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/);
  if (result == null) return false;
  var d = new Date(result[1], result[3] - 1, result[4], result[5], result[6], result[7]);
  return (d.getFullYear() == result[1] && (d.getMonth() + 1) == result[3] && d.getDate() == result[4] && d.getHours() == result[5] && d.getMinutes() == result[6] && d.getSeconds() == result[7]);
}


/**
 * 验证日期大小
 * 例："2019-10-24" 和 "2019-10-25"
 * @param  {string} d1需要验证的日期1
 * @param  {string} d2需要验证的日期2
 * @return {boolean} 返回布尔值
 */
function compareDate (d1, d2) {
  return ((new Date(d1.replace(/-/g, "\/"))) < (new Date(d2.replace(/-/g, "\/"))));
}


/**
 * 验证一个日期是不是今天
 * @param  {string} val 需要验证的日期
 * @return {boolean} 返回布尔值
 */
function isToday (val) {
  return new Date().toLocaleDateString() == new Date(val).toLocaleDateString();
}

/**
 * 验证传入的日期是否是昨天
 * @param  {string} val 需要验证的日期
 * @return {boolean} 返回布尔值
 */
function isYesterday (val) {
  var today = new Date();
  var yesterday = new Date(now - 1000 * 60 * 60 * 24);
  var test = new Date(val);
  if (yesterday.getYear() === test.getYear() && yesterday.getMonth() === test.getMonth() && yesterday.getDate() === test.getDate()) {
    return true;
  } else {
    return false;
  }
}


/**
 * 设置几天后的日期
 * @param  {string} date 起始日期
 * @param  {number} day 向后的天数
 * @return {string} 返回想要得到的日期
 */
function convertDate (date, day) {
  let tempDate = new Date(date);
  tempDate.setDate(tempDate.getDate() + day);
  let Y = tempDate.getFullYear();
  let M = tempDate.getMonth() + 1 < 10 ? '0' + (tempDate.getMonth() + 1) : tempDate.getMonth() + 1;
  let D = tempDate.getDate() < 10 ? '0' + (tempDate.getDate()) : tempDate.getDate();
  let result = Y + "-" + M + "-" + D
  return result;
}


































