export const EXPANDABLE_TEXT_FIELD_SET_IS_OPEN = 'EXPANDABLE_TEXT_FIELD_SET_IS_OPEN';
export const EXPANDABLE_TEXT_FIELD_TOGGLE_OPEN = 'EXPANDABLE_TEXT_FIELD_TOGGLE_OPEN';
export const EXPANDABLE_TEXT_FIELD_ADD_ID = 'EXPANDABLE_TEXT_FIELD_ADD_ID';


export function setIsETFOpen(open, id) {
  return {
    type: EXPANDABLE_TEXT_FIELD_SET_IS_OPEN,
    open,
    id
  };
}

export function toggleETF(id) {
  return {
    type: EXPANDABLE_TEXT_FIELD_TOGGLE_OPEN,
    id
  };
}
