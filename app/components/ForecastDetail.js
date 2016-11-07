var React = require('react');
var PropTypes = React.PropTypes;

var Loading = require('./Loading');
var DayItem = require('./DayItem');

var styles = {
  descriptionContainer: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
  }
}

function ForecastDetail (props) {
  return props.isLoading === true
    ? <Loading />
    : (
      <div>
        <DayItem entry={props.weatherData}/>
        <div style={styles.descriptionContainer}>
          <p>{props.city}</p>
          <p>{props.weatherData.weather[0].description}</p>
          <p>min temp: {props.weatherData.temp.min} degrees</p>
          <p>max temp: {props.weatherData.temp.max} degrees</p>
          <p>humidity: {props.weatherData.humidity}</p>
        </div>
      </div>
    );
}

ForecastDetail.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  weatherData: PropTypes.object.isRequired
};

module.exports = ForecastDetail;
