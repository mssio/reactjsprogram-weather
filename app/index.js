var React = require('react');
var ReactDom = require('react-dom');

var HelloWorld = (
  <h3>Hello World!</h3>
);

ReactDom.render(
  HelloWorld,
  document.getElementById('app')
);
