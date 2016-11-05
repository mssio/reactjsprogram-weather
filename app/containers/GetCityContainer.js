var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
  getDefaultProps: function () {
    return {
      direction: 'column'
    };
  },
  getInitialState: function () {
    return {
      city: ''
    };
  },
  propTypes: {
    direction: PropTypes.string
  },
  handleUpdateCity: function (e) {
    this.setState({
      city: e.target.value
    });
  },
  handleSubmitCity: function (e) {
    e.preventDefault();
    console.log(this.state.city);
  },
  render: function () {
    return (
      <GetCity
        direction={this.props.direction}
        onUpdateCity={this.handleUpdateCity}
        onSubmitCity={this.handleSubmitCity}
        city={this.state.city}
      />
    );
  }
});

module.exports = GetCityContainer;