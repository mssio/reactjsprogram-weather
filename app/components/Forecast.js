var React = require('react');
var PropTypes = React.PropTypes;

var Loading = require('./Loading');

function puke (obj) {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

function Forecast (props) {
  return props.isLoading === true
    ? <Loading />
    : (
      <div>
        <h6>Forecast Component</h6>
        {puke(props.weathersData)}
      </div>
    );
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  weathersData: PropTypes.object.isRequired
};

module.exports = Forecast;
