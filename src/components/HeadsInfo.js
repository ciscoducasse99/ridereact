import React from 'react';

const HeadsInfo = (props) => {


        const { dataList } = props;

          const desc = dataList.map((dataItem, index) => (
            <p key={index} style={{ fontSize: '28px' }} className="font-weight-bolder">
              {dataItem.weather.description}
            </p>
          ));

          const temp = dataList.map((dataItem, index) => (
              <div key={index} className="text-primary">
                <p className="text-primary temp-font">{dataItem.temp}</p>
                <span style={{ fontSize: '14px' }}>Fahrenheit</span>
              </div>
          ));

        return(
            <div>
                <p className="text-primary font-weight-bolder">Lowell, MA</p>
                {temp}
                {desc}  
            </div>
        )
    
}

export default HeadsInfo;