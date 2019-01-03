// 时间校验函数etc
import * as moment from 'moment' // 时间控制插件
import * as tzmoment from 'moment-timezone' // 时区插件
const Validator = {
  timeLimit: function (start, end, interval) { // true 是要充钱
    const startSeconds = +new Date(start) / 1000
    const endSeconds = +new Date(end) / 1000
    const limitDays = interval * 86400
    return (endSeconds - startSeconds) <= limitDays
  },
  moment: moment,
  localTimeZone: function (time, format = 'YYYY-MM-DD HH:mm') { // 时间转换本地时间
    if (!time) return '时间为null'
    const unixTime = +new Date(time)
    let localtime = tzmoment.tz(unixTime, tzmoment.tz.guess()).format(format)
    return localtime
  }

}

export default Validator
