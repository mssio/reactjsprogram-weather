var React = require('react');

var openWeatherMapHelpers = require('../utils/openWeatherMapHelpers');
var Forecast = require('../components/Forecast');

var ForecastContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      weathersData: {}
    };
  },
  componentDidMount: function () {
    openWeatherMapHelpers.get5DayForecast(this.props.routeParams.city)
      .then(function (data) {
        this.setState({
          isLoading: false,
          weathersData: data
        })
      }.bind(this));
  },
  render: function () {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        weathersData={this.state.weathersData}
      />
    );
  }
});

module.exports = ForecastContainer;
