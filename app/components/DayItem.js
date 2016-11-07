var React = require('react');
var PropTypes = React.PropTypes;

var formatDate = require('../utils/dateHelpers').formatDate;

var styles = {
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  }
}

function DayItem (props) {
  var date = formatDate(props.entry.dt);
  var icon = props.entry.weather[0].icon;

  return (
    <div style={styles.dayContainer} onClick={props.onSelectDate}>
      <img style={styles.weather} src={'./app/images/weather-icons/' + icon + '.svg'} alt="Weather" />
      <h2 style={styles.subheader}>{date}</h2>
    </div>
  );
}

DayItem.propTypes = {
  entry: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    weather: PropTypes.array.isRequired
  }).isRequired,
  onSelectDate: PropTypes.func
};

module.exports = DayItem;
