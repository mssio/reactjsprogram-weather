var React = require('react');
var PropTypes = React.PropTypes;

var Loading = require('./Loading');
var formatDate = require('../utils/dateHelpers').formatDate;

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
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

function puke (obj) {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
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

function ForecastUI (props) {
  return (
    <div>
      <h1 style={styles.header}>{props.city}</h1>
      <div style={styles.container}>
        {props.forecast.map(function (listItem) {
          return (
            <DayItem
              key={listItem.dt}
              entry={listItem}
              onSelectDate={props.onSelectDate.bind(null, listItem)}
            />
          );
        })}
      </div>
    </div>
  );
}

function Forecast (props) {
  return props.isLoading === true
    ? <Loading />
    : (
      <ForecastUI
        city={props.weathersData.city.name}
        forecast={props.weathersData.list}
        onSelectDate={props.onSelectDate}
      />
    );
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  weathersData: PropTypes.object.isRequired,
  onSelectDate: PropTypes.func.isRequired
};

module.exports = Forecast;
