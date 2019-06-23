import React from 'react';
import axios from 'axios';
import './App.css';
import Table from './components/Table';

class App extends React.Component {

  state = {
    data: []
  }

  getData = () => {
    axios.get('https://mychatapp-18e8b.firebaseio.com/data.json')
        .then(res => {
          this.setState({ data: res.data });
        })
        .catch(error => {
          console.log(error);
        });
  };

  componentDidMount(){
    this.getData();
  }

  nextPage = () => {
    console.log("next");
  }

  prevPage = () => {
    console.log("prev");
  }


  render() {
    return (
      <Table 
        data={this.state.data} 
        nextPage={this.nextPage} 
        prevPage={this.prevPage} />
    );
  }
  
}

export default App;
