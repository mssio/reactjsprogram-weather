var React = require('react');
var PropTypes = React.PropTypes;

var Loading = require('./Loading');
var DayItem = require('./DayItem');

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
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  }
}

function puke (obj) {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
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
              onSelectDate={props.onSelectDate.bind(null, props.city, listItem)}
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
