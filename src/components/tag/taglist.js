import React, { Component } from "react";
import { connect } from "react-redux";
import * as tagAction from '../../action/tabAct'

class TagList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(){
        this.props.getAllTag();
    }

    render() {
        if(this.props.tabList !=null){
            console.log('component', this.props.tabList);
        }

        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        tagList : state.tagData.tabList
    }
}

const mapDispachToProps = () => {
    return {
        getAllTag : tagAction.fatchAll()
    }
}

export default connect(mapStateToProps, mapDispachToProps)(TagList);