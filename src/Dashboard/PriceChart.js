import highchartsConfig from './HighChartsConfig';
import React from 'react';
import { AppContext } from '../App/AppProvider';
import ReactHighCharts from 'react-highcharts';
import HighChartsTheme from './HighChartsTheme';
import ReactHighcharts from 'react-highcharts';
import ChartSelect from './ChartSelect';
import './PriceChart.css';

var Spinner = require('react-spinkit');

//pass in the HighChartsTheme object to set options for HighCharts visualization
ReactHighcharts.Highcharts.setOptions(HighChartsTheme);

// PriceChart component - displays HighCharts data visualizations
export default function() {
  return (
    <AppContext.Consumer>
    {
      ({historical, changeChartSelect}) =>
      <div className="price-chart">
      <div className="chart-select">
        <ChartSelect
          defaultValue={'months'}
          onChange={e => changeChartSelect(e.target.value)}
        >
          <option value="days">Days</option>
          <option value="weeks">Weeks</option>
          <option value="months">Months</option>
        </ChartSelect>
      </div>
        {historical ? <ReactHighCharts config={highchartsConfig(historical)}/> 
        : <div className="spinner"><Spinner name="pacman" color="var(--success-color)"/><div className="middle-spinner"></div>Loading Cryptocurrency Historical Data</div>}    
      </div>
    }
    </AppContext.Consumer>
  )
}
