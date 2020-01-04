import React from 'react';
import axios from 'axios';
import Modal from './Modal'
import './checker.css';

class Checker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 2,
            codes: [],
            isShowing:false,
            canRide:true
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleChange(e) {

        this.setState({
            value: e.target.value
        });

    }

    handleClick(e) {
        e.preventDefault();

        axios.get(`https://api.weatherbit.io/v2.0/forecast/hourly?city=Lowell,MA&key=a2ef0c5d779048ca8de9721b73441efd&units=I&hours=${this.state.value}`).then(res => {

            let resData = res.data.data;
            let returnData = resData.map(entry => entry.weather.code);

            this.addData(returnData);
            this.setRideMessage(returnData);

        }).catch(error => {
            console.log(error.message);
        });

    }
    addData = (newCodes) => {

        this.setState({
            codes: [...this.state.codes, newCodes],
            isShowing:true
        });
    }

    setRideMessage = (reqData) => {

        const approvedForecastCodes = [800,801,802,803,804];
    
        for (var i = 0; i < reqData.length; i++) {
            if (approvedForecastCodes.includes(reqData[i])) {
                console.log(`for weather code { ${reqData[i]} } is approved.`)
            } else {
                this.setState({
                    canRide:false
                });
                break;
            }
        }
    }

	closeModalHandler = () => {
		this.setState({
            isShowing: false,
            codes:[],
            modalDisplayMessage:'',
            canRide:true
		});
	}

    render() {

        return (
            <div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
            
            <div className="shadow mt-5" style={{ borderRadius: '20px', background: 'white', minHeight: '200px' }}>

                <div>
                    <div>
                        <p style={{ fontSize: '30px' }} className="py-1 mb-3">Check up to <span><u>{this.state.value}</u> </span> hours ahead</p>
                    </div>
                    <div className="text-center">
                        <input
                            type="range"
                            className="custom-range col-9 my-3"
                            min="2"
                            max="12"
                            snap="0.5"
                            onChange={this.handleChange}
                            value={this.state.value}>
                         </input>

                        <button
                            className="btn open-modal-btn btn-primary my-2 w-50 w-md-25"
                            style={{ borderRadius: '20px', background: '#0070f3', boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)'}}
                            onClick={this.handleClick}
                            >Rain Check
                        </button>

                        
                    </div>
                </div>
            </div>
            <Modal
                className="modal"       
                show={this.state.isShowing}
                close={this.closeModalHandler}
                message= {this.state.canRide}>
            </Modal>
        </div>
        )
    }
}




export default Checker;