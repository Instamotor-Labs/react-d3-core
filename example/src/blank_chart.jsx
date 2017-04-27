"use strict";

var React = require('react');


var Chart = require('../../lib').Chart;
var Xaxis = require('../../lib').Xaxis;
var Yaxis = require('../../lib').Yaxis;
var Legend = require('../../lib').Legend;
var Grid = require('../../lib').Grid;
var Label = require('../../lib').Label;
var createClass = require('create-react-class');

var BlankChart = createClass({

  render: function() {

    return (
      <Chart {...this.props}>
        <Grid type="x" {...this.props} {...this.state} />
        <Grid type="y" {...this.props} {...this.state} />
        <Xaxis
          {...this.props}
          {...this.state}
          style= {{
            "transform": "rotate(45deg)"
          }}
          />
        <Yaxis
          {...this.props}
          {...this.state}
          style= {{
            "transform": "rotate(-45deg)"
          }}
          />
      </Chart>
    )
  }
})

module.exports = BlankChart;
