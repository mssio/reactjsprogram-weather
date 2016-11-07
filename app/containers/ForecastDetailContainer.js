var React = require('react');

var ForecastDetail = require('../components/ForecastDetail');

var ForecastDetailContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      city: '',
      weatherData: {}
    };
  },
  componentDidMount: function () {
    if (typeof(this.props.location.state) === 'undefined') {
      console.log('Redirecting back to home because of empty state...');
      this.context.router.push('/');
    } else {
      this.setState({
        isLoading: false,
        city: this.props.location.state.city,
        weatherData: this.props.location.state.weatherData
      });
    }
  },
  render: function () {
    return (
      <ForecastDetail
        isLoading={this.state.isLoading}
        city={this.state.city}
        weatherData={this.state.weatherData}
      />
    );
  }
});

module.exports = ForecastDetailContainer;
