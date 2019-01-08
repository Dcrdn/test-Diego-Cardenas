import React, { Component } from 'react';
import './Tags.scss';

class Tags extends Component {
    render() {
        return (
            <div class="tag-box">
                {this.props.tagName}
            </div>
        );
    }
}

export default Tags;