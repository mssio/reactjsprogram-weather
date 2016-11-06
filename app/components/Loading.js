var React = require('react');
var PropTypes = React.PropTypes;

require('../styles/loading.scss');

var Loading = React.createClass({
  render: function () {
    return (
      <div className="sampleContainer">
        <div className="loader">
          <span className="dot dot_1"></span>
          <span className="dot dot_2"></span>
          <span className="dot dot_3"></span>
          <span className="dot dot_4"></span>
        </div>
      </div>
    );
  }
});

module.exports = Loading;
