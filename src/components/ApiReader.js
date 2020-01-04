import React from 'react';
import './apireader.css';



const ApiReader = (props) => {

  const {  dataList, error } = props;

  const wind_speed = dataList.map((dataItem, index) => (
    <div key={index}>
      <i className="fas fa-tachometer-alt fa-2x" /><br />
      <span className="text-secondary">Wind speed:</span><br />
      <span className="font-bold" >{dataItem.wind_spd}</span>
    </div>
  ));

  const wind_dir = dataList.map((dataItem, index) => (
    <div key={index}>
      <i className="fas fa-location-arrow fa-2x" /><br />
      <span className="text-secondary">Wind speed:</span><br />
      <span className="font-bold" >{dataItem.wind_cdir}</span>
    </div>
  ));

  
  const datetime = dataList.map((dataItem, index) => (
    <div key={index}>
      <i className="fas fa-cloud fa-2x" /><br />
      <span className="text-secondary">Date time</span><br />
      <span className="font-bold" >{dataItem.datetime}</span>
    </div>
  ));

  const feels = dataList.map((dataItem, index) => (
    <div key={index}>
      <i className="fas fa-thermometer-quarter fa-2x"></i><br />
      <span className="text-secondary">Feels like:</span><br />
      <span className="font-bold" >{dataItem.app_temp}</span>
    </div>
  ));

  const clouds = dataList.map((dataItem, index) => (
    <div key={index}>
      <i className="fas fa-cloud fa-2x" /><br />
      <span className="text-secondary">Cloud coverage</span> <br />
      <span className="font-bold" >{dataItem.clouds} %</span>
    </div>
  ));

  if (error) {
    return (
      <div>
        <p className="text-danger">{error.message}</p>
      </div>
    )} else {
    return (
      
        <div className="shadow scrollmenu mt-2 mb-5">
          <div className="col-12">
            {datetime}
            {feels}
            {wind_dir}
            {wind_speed}
            {clouds}
          </div>
        </div>
    )}


}

export default ApiReader;