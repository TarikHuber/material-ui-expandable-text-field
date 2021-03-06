import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setIsETFOpen, addETF } from './actions/actions';
import TextField from 'material-ui/TextField';

function TF(props) {

  const { open, ...rest}=props;

  if(!open){
    return null;
  }

  return (
    rest.children
  );
}


class ExpandableTextFieldContainer extends Component {

  render() {
    const { expandableTextFields, children, id} = this.props
    const open=expandableTextFields[id];

    return (
      <TF
        open={open}
        children={children}
      />
    );

  }
}

ExpandableTextFieldContainer.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const {  expandableTextFields } = state;
  return {
    expandableTextFields
  };
};

export default connect(
  mapStateToProps
)(ExpandableTextFieldContainer);
