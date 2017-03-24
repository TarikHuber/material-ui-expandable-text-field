import{
  EXPANDABLE_TEXT_FIELD_SET_IS_OPEN,
  EXPANDABLE_TEXT_FIELD_TOGGLE_OPEN,
  EXPANDABLE_TEXT_FIELD_TOGGLE_OPEN_AND_CLOSE_OTHERS
} from '../actions/actions';


const expandableTextFields = (state = [], action) => {
  switch (action.type) {

    case EXPANDABLE_TEXT_FIELD_SET_IS_OPEN:
    return {
      ...state,
      [action.id]: action.open
    };

    case EXPANDABLE_TEXT_FIELD_TOGGLE_OPEN:
    return {
      ...state,
      [action.id]: !state[action.id]!==undefined?!state[action.id]:true
    };
    case EXPANDABLE_TEXT_FIELD_TOGGLE_OPEN_AND_CLOSE_OTHERS:
    return {
      [action.id]: !state[action.id]!==undefined?!state[action.id]:true
    };

    default:
    return state;
  }
}

export default expandableTextFields;
