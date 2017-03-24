import React, { Component, PropTypes } from 'react';
import {
  ExpandableTextFieldContainer,
  ETFIconButtonContainer
} from '../../src/index.js'
import {connect} from 'react-redux';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import TextField from 'material-ui/TextField';

class App extends Component {


  render() {


    return (

      <div style={{margin: 25}}>
        <div>
          <ETFIconButtonContainer id={'test1'}>
            <ActionSearch/>
          </ETFIconButtonContainer>

          <ExpandableTextFieldContainer id={'test1'}>
            <TextField
              ref={(ref) => {if(ref!=null){ref.focus()}}}
              id={'test1'}
            />
          </ExpandableTextFieldContainer>
        </div> <br/>
        <div>
          <ETFIconButtonContainer id={'test2'}>
            <ActionSearch/>
          </ETFIconButtonContainer>

          <ExpandableTextFieldContainer id={'test2'}>
            <TextField
              ref={(ref) => {if(ref!=null){ref.focus()}}}
              id={'test2'}
            />
          </ExpandableTextFieldContainer>
        </div><br/>

        <div>
          <ETFIconButtonContainer id={'test4'}>
            <ActionSearch/>
          </ETFIconButtonContainer>
          <ExpandableTextFieldContainer id={'test4'}>
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
  return {

  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    setIsETFOpen: (id, open) => {
      dispatch(setIsETFOpen(id, open));
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
