import React, { Component } from 'react';
import OpenEmail from '../OpenEmail/OpenEmail';
import { connect } from "react-redux";

import './ViewMail.scss';

class ViewMail extends Component {

    render() {
        return (
            <div class="viewMail">
            {this.props.render ?
                <OpenEmail /> :
                null
            }
            </div>
        );
    }
}

//export default ViewMail;
function mapStateToProps(state) {
    return {
        unreadEmails: state.unreadEmails,
        emails:state.emails,
        render:state.render
      };
  }
  
  export default connect(mapStateToProps)(ViewMail);