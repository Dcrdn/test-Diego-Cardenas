import React, { Component } from 'react';
import { connect } from "react-redux";
import {changeType, markUnread} from "../../actions/emailActions";
import Tags from "../Tags/Tags";
import './OpenEmail.scss';

class OpenEmail extends Component {

    render() {
        console.log(this.props.emailRender.attachements[0].file);

        return (
            <div class="openEmail">
                <div class="openEmail-header">
                    <div  class="delete">
                        <button class="delete-button" onClick={() => {this.props.dispatch(changeType("Deleted", this.props.emailRender))}}>Delete</button>
                    </div>
                    <div class="spam">
                        <button class="spam-button" onClick={() => {this.props.dispatch(changeType("Spam", this.props.emailRender))}}>Spam</button>
                    </div>
                    <div class="mark-unread">
                        <button class="unread-button" onClick={() => {this.props.dispatch(markUnread(this.props.emailRender))}}>Mark as unread</button>
                    </div>
                </div>
                <div class="openEmail-body">
                    <div class="titulo">
                        <div class="profile-picture">
                        <img src={this.props.emailRender.avatar}></img>
                        </div>
                        <div class="titulo-text">
                            <div class="text">{this.props.emailRender.subject}</div>
                        </div>
                    </div>
                    <div class="tags">
                        <div class="tags-area">
                            <div class="tags-field">
                                Tags
                            </div>
                            <div class="tags-props">
                                <Tags tagName={this.props.emailRender.tag} />
                            </div>
                        </div>
                    </div>
                    <div class="cuerpo-correo">
                        <div class="message-area">
                            <p class="msg"><br></br><br></br>{this.props.emailRender.body}</p>
                        </div>
                    </div>
                    <div class="reply-area">
                        <div class="file">

                        <a target="_blank" rel="noopener noreferrer" href={this.props.emailRender.attachements[0].file} class="attached" download>
                            <i class="fa fa-paperclip fa-2x"></i>
                        </a>

                        </div>
                        <div class="reply">
                            <button class="reply-button">Reply</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//export default OpenEmail;
function mapStateToProps(state) {
    return {
        emailRender:state.emailRender
      };
  }
  
  export default connect(mapStateToProps)(OpenEmail);