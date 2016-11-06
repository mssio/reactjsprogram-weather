var axios = require('axios');

var _key = "608586c386a72f78d5fa890c4646bd0f";
var _param = "?type=accurate&units=metric&APPID=" + _key;
var _baseURL = "http://api.openweathermap.org/data/2.5/";

function getCurrentWeather (city) {
  return axios.get(_baseURL + 'weather' + _param + '&q=' + city);
}

function get5DayForecast (city) {
  return axios.get(_baseURL + 'forecast/daily' + _param + '&cnt=5&q=' + city);
}

var helpers = {
  getCurrentWeather: function (city) {
    return getCurrentWeather(city)
      .then(function (res) {
        return res.data;
      })
      .catch(function (err) {
        console.log(err);
      });
  },
  get5DayForecast: function (city) {
    return get5DayForecast(city)
      .then(function (res) {
        return res.data;
      })
      .catch(function (err) {
        console.log(err);
      });
  }
};

module.exports = helpers;
