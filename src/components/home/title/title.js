import React, {Component} from "react";
import './title.css'


class Title extends Component{

constructor(props){
    super(props);

    this.state = {
        title : "My Title",
        Isinput: false
    };
}

editHandler(){
    this.setState({
        ...this.state,
        Isinput:true
    });
}

inputChange(event){
    this.setState({
        ...this.state,
        title : event.target.value
    })
}

keyPressHandler(event){
    if(event.key === 'Enter'){
        this.setState({
            ...this.state,
            Isinput:false
        })
    }
}

blurHandler(){
    this.setState({
        ...this.state,
        Isinput:false
    })
}

//  counter(){
//      this.setState({
//          number: this.state.number + 1
//      })
//  }


    render(){
        let output = null

        if(this.state.Isinput){
            output = (
                <div>
                    <h1 className='display-3'></h1>
                    <input type="text" className="form-control" id="inputPassword2" 
                    onChange={(event)=>{ this.inputChange(event)}} 
                    onKeyPress = {(event)=> {this.keyPressHandler(event)}}
                    onBlur ={()=> {this.blurHandler()}}
                    value={this.state.title} placeholder="title name" />
                </div>
            )
        }else{
            output = (
                <div className="d-flex title">
                    <h1 className='display-3'>{this.state.title}</h1>
                    <samp onClick= {()=>this.editHandler()} className='ml-auto mt-4 edit-btn'>
                        <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>
                    </samp>
                </div>
            )
            
        }

        return (
            <div>
                {output}
            </div>
        )
    }
}

export default Title

