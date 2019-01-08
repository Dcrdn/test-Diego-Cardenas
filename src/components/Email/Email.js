import React, { Component } from 'react';
import { connect } from "react-redux";
import {emailSelected} from "../../actions/emailActions";
import './Email.scss';

class Email extends Component {
     constructor(props){
        super(props);
        this.state={
            styleHighlight:{backgroundColor:'transparent'},
        };
    }

    sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

    openEmail = (e) =>{
        this.props.dispatch(emailSelected(this.props.email));

        this.setState({
            styleHighlight:{backgroundColor:'#C3E1F6'}
        });
        this.sleep(200).then(() => {
            this.setState({
                styleHighlight:{backgroundColor:'transparent'}
            });        
        });

     }

    render() {
        var styles = {
            backgroundColor:'#EEF4F9',
            borderLeft: 'rgb(118, 6, 223) 3px solid'
        }
        return (
            <div onClick={this.openEmail} class="email" style={this.props.isReaded ?this.state.styleHighlight:styles}>
                <div class="email-content">
                    <div class="sender">
                        {this.props.from}
                    </div>
                    <div class="message">
                        {this.props.to}}
                    </div>
                </div>
                <div class="email-info">
                    {this.props.date}
                </div>
            </div>
        );
    }
}

//export default Email;

function mapStateToProps(state) {
    return {
        unreadEmails: state.unreadEmails,
        emails:state.emails
      };
  }
  
  export default connect(mapStateToProps)(Email);