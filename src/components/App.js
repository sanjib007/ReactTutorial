import React, {Component} from "react";
import './App.css';
import Title from "./title/title"
import CountDown from './countDown/countDown';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      time:{
        min:0,
        sec:0,
        mili:0
      }
    }
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Title />
              <CountDown time={this.state.time} />
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
