import React, { Component, PropTypes } from 'react';
import {
  ExpandableTextFieldContainer,
  toggleETF,
  setIsETFOpen
} from '../../src/index.js'
import {connect} from 'react-redux';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import TextField from 'material-ui/TextField';

class App extends Component {


  handleClick = (id) =>{
    const { toggleETF } = this.props

    toggleETF(id);
  }

  render() {
    const { setIsETFOpen, toggleETF } = this.props

    const value='test';

    return (

      <div style={{margin: 25}}>
        <div>
          <IconButton
            onTouchTap={()=>this.handleClick('test1')}>
            <ActionSearch/>
          </IconButton>

          <ExpandableTextFieldContainer
            id={'test1'}
            value={value}>
            <TextField
              ref={(ref) => {if(ref!=null){ref.focus()}}}
              id={'test1'}
            />
          </ExpandableTextFieldContainer>
        </div> <br/>
        <div>
          <IconButton
            onTouchTap={()=>this.handleClick('test2')}>
            <ActionSearch/>
          </IconButton>

          <ExpandableTextFieldContainer
            id={'test2'}
            value={value}>
            <TextField
              ref={(ref) => {if(ref!=null){ref.focus()}}}
              id={'test2'}
            />
          </ExpandableTextFieldContainer>
        </div><br/>

        <div>
          <IconButton
            onTouchTap={()=>this.handleClick('test4')}>
            <ActionSearch/>
          </IconButton>
          <ExpandableTextFieldContainer

            id={'test4'}
            value={value}>
            <TextField
              ref='test4'
              id={'test4'}
            />
          </ExpandableTextFieldContainer>
        </div>

      </div>
    );
  }
}

App.propTypes = {
  setIsETFOpen: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  //const {  browser } = state;
  return {

  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    setIsETFOpen: (open, id) => {
      dispatch(setIsETFOpen(open, id));
    },
    toggleETF: (id) => {
      dispatch(toggleETF(id));
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
