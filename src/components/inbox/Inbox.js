import React, { Component } from 'react';
import Email from '../Email/Email';
import { connect } from "react-redux";
import {viewChanged, fetch} from "../../actions/emailActions";
import './Inbox.scss';

class Inbox extends Component {
     constructor(props){
         super(props);
         this.state={
             selectedValue:"Inbox",
             searchField:"",
         };
     }

     selectChanged = (e) => {
        let {name, value} = e.target;
        this.setState({
            selectedValue: value,     
        });
     }

     inputChanged = (e) =>{
        let {name, value} = e.target;
        this.setState({
            searchField: value,     
        });
     }
     componentDidMount() {
        this.props.dispatch(fetch());

        setInterval( () => {
            this.setState({
                selectedValue:this.state.selectedValue
            });
        },100);

        setInterval( () => {
            this.props.dispatch(fetch());
        },10000);
      }

    render() {
        return (
            <div class="inbox">
                <div class="header-inbox">
                    <div class="inbox-message">
                        <div class="inbox-text">
                        {this.state.selectedValue }
                        </div>
                        <div class="inbox-total">
                            {this.props.emails.filter(correo =>{
                                return correo.type==this.state.selectedValue && correo.isReaded==false;
                            }).length}
                        </div>
                    </div>

                    <div class="filter">
                        <select value={this.state.selectValue} onChange={this.selectChanged}>
                            <option value="Inbox">Inbox</option>
                            <option value="Spam">Spam</option>
                            <option value="Deleted">Deleted</option>
                        </select>
                    </div>
                </div>
                <div class="search-bar">   
                    <div class="search-space">
                        <input class="search" type="text" placeholder="Search.." onChange={this.inputChanged}/>
                        <button type="submit" class="searchButton">
                            <i class="fa fa-search fa-lg"></i>                    
                        </button>                    
                    </div>
                </div>
                <div class="emails">
                {              
                    this.props.emails.filter(correo => {
                        return correo.type==this.state.selectedValue;
                    }).filter(correo =>{
                        return correo.from.includes(this.state.searchField) || correo.to.includes(this.state.searchField);
                    }).map(((emails,index) => 
                            <Email from={emails.from} to={emails.to} date={emails.date} email={emails} isReaded={emails.isReaded}/>
                    ))
                }
                </div>

            </div>
        );
    }
}

//export default Inbox;

function mapStateToProps(state) {
    return {
        emails:state.emails,
      };
  }
  
  export default connect(mapStateToProps)(Inbox);