import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';
import UserCard from './UserCard';
import Followers from './Followers';
import SearchForm from './SearchForm';

class App extends React.Component {
  state = {
    followers: [],
    card: '',
    query: ''
  };
  
  componentDidMount() {
    this.handleQuery('MarianaShebanova');
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.query !== this.state.query) {
      axios.get(`https://api.github.com/users/${this.state.query}`).then(response => {
        this.setState({ card: response.data });
      })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      axios.get(`https://api.github.com/users/${this.state.query}/followers`).then(response => {
        console.log(response.data)
        this.setState({ followers: response.data });
        //this.setState({ followers: ['One', 'Two'] });
      });
    }
  }
  
  handleQuery = e => {
    this.setState({query: e});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header"> 
           <h1>Github User card</h1>
         </div> 
        <SearchForm handleQuery={this.handleQuery}/> 
        <UserCard card={this.state.card}/>
        <Followers followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
