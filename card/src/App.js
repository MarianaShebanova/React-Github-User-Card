import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';
import UserCard from './UserCard';
import Followers from './Followers';

class App extends React.Component {
  state = {
    followers: [],
    card: ''
  };
  
  componentDidMount() { 
    axios.get('https://api.github.com/users/MarianaShebanova').then(response => {
      this.setState({ card: response.data});
    });
    axios.get('https://api.github.com/users/MarianaShebanova/followers').then(response => {
      this.setState({ followers: response.data});
      //this.setState({ followers: ['One', 'Two'] });
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header"> 
           <h1>Github User card</h1>
         </div>  
        <UserCard card={this.state.card}/>
        <Followers followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
