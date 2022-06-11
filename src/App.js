import {Component} from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'wumanho',
      company:'GD'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>Hi {this.state.name} I'm working on {this.state.company}</p>
          <button onClick={()=>{
            this.setState({name:'oh my gosh'})
          }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
