var React = require('react');
var PropTypes = React.PropTypes;

function Button (props) {
  return (
    <button
      type="submit"
      style={{margin: 10}}
      className="btn btn-success"
    >
      {props.children}
    </button>
  );
};

function InputField (props) {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Tokyo"
      onChange={props.onUpdateCity}
      value={props.city}
    />
  );
};

function getStyles (props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  }
};

function GetCity (props) {
  return (
    <form
      style={getStyles(props)}
      onSubmit={props.onSubmitCity}
    >
      <InputField
        city={props.city}
        onUpdateCity={props.onUpdateCity}
      />
      <Button>Get Weather</Button>
    </form>
  );
};

GetCity.propTypes = {
  direction: PropTypes.string.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  onSubmitCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
};

module.exports = GetCity;
