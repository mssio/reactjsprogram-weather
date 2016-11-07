var React = require('react');

var openWeatherMapHelpers = require('../utils/openWeatherMapHelpers');
var Forecast = require('../components/Forecast');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      weathersData: {}
    };
  },
  componentDidMount: function () {
    this.makeRequest(this.props.routeParams.city)
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState({
      isLoading: true,
      weathersData: {}
    }, this.makeRequest(nextProps.routeParams.city));
  },
  makeRequest: function (city) {
    openWeatherMapHelpers.get5DayForecast(city)
      .then(function (data) {
        this.setState({
          isLoading: false,
          weathersData: data
        })
      }.bind(this));
  },
  handleSelectDate: function (date) {
    this.context.router.push({
      pathname: '/forecast/' + this.props.routeParams.city + '/detail/' + date
    });
  },
  render: function () {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        weathersData={this.state.weathersData}
        onSelectDate={this.handleSelectDate}
      />
    );
  }
});

module.exports = ForecastContainer;
