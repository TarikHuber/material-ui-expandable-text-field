import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setIsETFOpen, toggleETF } from './actions/actions';
import IconButton from 'material-ui/IconButton';

function IB(props) {

  const {hideOnOpen, hideOnClose, children, onTouchTap} = props;

  if(open && hideOnOpen===true){
    return null;
  }

  if(!open && hideOnClose===true){
    return null;
  }

  return (
    <IconButton
      onTouchTap={onTouchTap}>
      {children}
    </IconButton>
  );
}


class ETFIconButtonContainer extends Component {

  onTouchTap = () => {
    const { expandableTextFields, toggleETF, setIsETFOpen, value, id, onETFChange} = this.props

    if(value!==undefined){
      setIsETFOpen(id, value);
    }else{
      toggleETF(id);
    }

    if(onETFChange!==undefined){
      onETFChange(value!==undefined?value:!expandableTextFields[id]);
    }

  }



  render() {
    const { expandableTextFields, children, id, toggler} = this.props
    const open=expandableTextFields[id];

    return (
      <IB
        onTouchTap={this.onTouchTap}
        open={open}
        {...(this.props)}
      />
    );

  }
}

ETFIconButtonContainer.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  toggleETF: PropTypes.func.isRequired,
  setIsETFOpen: PropTypes.func.isRequired,
  onETFChange: PropTypes.func,
  value: PropTypes.bool,
  hideOnOpen: PropTypes.bool,
  hideOnClose: PropTypes.bool,
  closeOthers: PropTypes.bool,
};

const mapStateToProps = (state) => {
  const {  expandableTextFields } = state;
  return {
    expandableTextFields
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
)(ETFIconButtonContainer);
