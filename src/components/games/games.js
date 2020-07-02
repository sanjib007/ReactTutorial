import React, { Component } from "react";
import { connect } from "react-redux";



class Games extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='row  mt-4'>
                <div className='c0l-lg-12'>
                    <h1>Games List</h1>
                </div>
            </div>
         );
    }
}

function mapStateToProps(state){
    return {
        allGames : state.allGames
    }
}
 
export default connect(mapStateToProps)(Games);