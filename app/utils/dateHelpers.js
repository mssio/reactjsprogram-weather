var daysMap = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

var monthsMap = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

function formatDate (unixTimestamp) {
  var date = new Date(unixTimestamp * 1000);
  var day = daysMap[date.getDay()];
  var month = monthsMap[date.getMonth()];

  return day + ', ' + month + ' ' + date.getDate();
}

var helpers = {
  formatDate: formatDate
}

module.exports = helpers;
