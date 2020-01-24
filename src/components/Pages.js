import React, { Component } from 'react'
import * as actions from "../reducers/actions";
import { connect } from 'react-redux';


 class Pages extends Component {
    render() {
        return (
            <div>
                <li onClick={() => this.props.changePage()}>2</li>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changePage: () => {
        dispatch(actions.changePage());
      }
    };
  };

export default connect(null, mapDispatchToProps)(Pages);