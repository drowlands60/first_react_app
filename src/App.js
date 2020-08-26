import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div id="myDiv" className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Allright, mucker?!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


const coinToss = Math.floor(Math.random() * 2);

class CoinToss extends React.Component {
  render() {
    let coin;
    if (coinToss > 0.5) {
      coin = 'heads';
    } else {
      coin = 'tails';
    };
    return <h1>{coin}</h1>;
  }
};

ReactDOM.render(<div id='myDiv'></div>, document);
ReactDOM.render(<CoinToss />, document.getElementById('myDiv'));

export default App;
