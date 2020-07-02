import React, { Component } from 'react';
import Title from "./title/title"
import CountDown from './countDown/countDown';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: {
              min: 0,
              sec: 0,
              mili: 0
            }
          }
    }
    render() { 
        return ( 
            <div className="row mt-4">
                <div className="col-lg-12">
                <Title />
                <CountDown time={this.state.time} />
                </div>
          </div>
         );
    }
}
 
export default Home;