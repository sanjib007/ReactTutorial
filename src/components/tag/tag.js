import React, { Component } from "react";
import TagList from "./taglist";
import TagInsert from "./tagInsert";

class Tag extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='row mt-4'>
                <div className='col-lg-6'>
                    <TagInsert />
                </div>
                <div className='col-lg-6'>
                    <TagList />
                </div>
            </div>
        );
    }
}

export default Tag;