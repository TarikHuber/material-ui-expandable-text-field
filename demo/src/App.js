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
          <ETFIconButtonContainer
            value={true}
            hideOnOpen={true}
            id={'1'}>
            <ActionSearch/>
          </ETFIconButtonContainer>
          <ETFIconButtonContainer
            value={false}
            hideOnClose={true}
            id={'1'}>
            <NavigationClose/>
          </ETFIconButtonContainer>

          <ExpandableTextFieldContainer id={'1'}>
            <TextField
              floatingLabelText={'Text field with autofocus'}
              ref={(ref) => {if(ref!=null){ref.focus()}}}
              id={'1'}
            />
          </ExpandableTextFieldContainer>
        </div> <br/>

        <div>
          <ETFIconButtonContainer
            hideOnOpen={true}
            onETFChange={()=>{console.log('TextField 2 opened')}}
            id={'2'}>
            <ActionSearch/>
          </ETFIconButtonContainer>
          <ETFIconButtonContainer
            value={false}
            hideOnClose={true}
            id={'2'}>
            <NavigationClose style={{transform: 'rotate(30deg)'}}/>
          </ETFIconButtonContainer>

          <ExpandableTextFieldContainer id={'2'}>
            <TextField
              floatingLabelText={'Text field without autofocus'}
              id={'2'}
            />
          </ExpandableTextFieldContainer>
        </div> <br/>

        <div>
          <ETFIconButtonContainer
            id={'3'}>
            <ActionSearch/>
          </ETFIconButtonContainer>
          <ExpandableTextFieldContainer id={'3'}>
            <TextField
              floatingLabelText={'Text field with colse button on right'}
              id={'3'}
            />
          </ExpandableTextFieldContainer>
          <ETFIconButtonContainer
            value={false}
            hideOnClose={true}
            id={'3'}>
            <NavigationClose/>
          </ETFIconButtonContainer>
        </div> <br/>

        <div style={{display: 'inline'}}>
          <ETFIconButtonContainer
            id={'4'}>
            <ActionSearch/>
          </ETFIconButtonContainer>
          <ExpandableTextFieldContainer id={'4'}>
            <TextField
              fullWidth={true}
              floatingLabelText={'Text field with full width'}
              id={'4'}
            />
          </ExpandableTextFieldContainer>
        </div> <br/>

        <div >
          <ETFIconButtonContainer
            closeOthers={true}
            id={'5'}>
            <ActionSearch/>
          </ETFIconButtonContainer>
          <ExpandableTextFieldContainer id={'5'}>
            <TextField
              floatingLabelText={'Text field that closes all others'}
              id={'5'}
            />
          </ExpandableTextFieldContainer>
        </div> <br/>

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
