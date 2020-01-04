import React from 'react';
import logo from './logo.svg';
import './App.css';
//import './bootstrap.min.css';
import ApiReader from './components/ApiReader';
import HeadsInfo from './components/HeadsInfo';
import Checker from './components/Checker';
import axios from 'axios';

const apiKey = 'a2ef0c5d779048ca8de9721b73441efd';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state={
      isLoaded:false,
      dataList:[],
      hours:'1',
      opened:false

    }

  }

  
  componentDidMount() {
    setTimeout(() => {
      this.getData();
    }, 2000);
  }

  getData() {
    axios.get('https://api.weatherbit.io/v2.0/forecast/hourly', {
      params:{
        city:'Lowell,MA',
        key: apiKey,
        units:'I',
        hours:this.state.hours
    }})
    .then(res => {
      this.setState({
        isLoaded: true,
        dataList: res.data.data,
      });
    })
      .catch(error => {
        console.log(error);

        this.setState({
          isLoading: true,
          error
        });
      })
  }

  render(){

    const {isLoaded, error} = this.state;

    if(error){
      return(
        <p className="text-danger">{error.message}</p>
      )
    } else if(!isLoaded){
        return(
          <div className="container">
            <div className="m-auto">
              <div className="text-center">
                <img src={logo} className="App-logo pt-5" alt="logo" />
                <p className="text-secondary">Loading...</p>
              </div>
            </div>
          </div>
        )
    } else {
    return (
      <div className="App">
        <header className="App-header">
        
          <div style={{minHeight:'50px'}}>
            <i className="fas fa-sync-alt float-left text-primary p-3 fa-lg"></i>
            <img src={logo} className="App-logo float-right" alt="logo" />
          </div>

          <div className="container">
            <div className="text-center">
              <HeadsInfo dataList={this.state.dataList}/>
              <ApiReader dataList={this.state.dataList}/>
              <Checker dataList={this.state}/>
            </div>          
            
          </div>
        </header>
      </div>
    )}
  }
}

export default App;
