import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Chart from 'react-apexcharts'


/**
 * Wrapper for react-apexcharts library. For API and
 * examples see:
 *
 * https://github.com/apexcharts/react-apexcharts
 *

 */
export default class DashApexcharts extends Component {
  render() {
    const { id, setProps, loading_state, children, ...chartProps } = this.props;

    // console.log(JSON.stringify(chartProps, null,2));

    return (
      <Chart {...chartProps} />
    );
  }
}

DashApexcharts.defaultProps = {
  type: 'line',
  width: '100%',
  height: 'auto'
};

DashApexcharts.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: PropTypes.string,

  /**
   * line, area, bar, pie, donut, scatter, bubble, heatmap, radialBar
   */

  type: PropTypes.string.isRequired,

  /**
   * Possible values for width can be 100%, 400px or 400 (by default is 100%)
   */

  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  /**
   * Possible values for height can be 100%, 300px or 300 (by default is auto)
   */

  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  /**
   * The series is a set of data. To know more about the format of
   * the data, checkout Series docs on the website.
   */

  series: PropTypes.array.isRequired,

  /**
   * The configuration object, see options on API (Reference)
   */

  options: PropTypes.object.isRequired,


  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: PropTypes.func
};
