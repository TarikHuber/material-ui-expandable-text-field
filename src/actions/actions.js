export const EXPANDABLE_TEXT_FIELD_SET_IS_OPEN = 'EXPANDABLE_TEXT_FIELD_SET_IS_OPEN';
export const EXPANDABLE_TEXT_FIELD_TOGGLE_OPEN = 'EXPANDABLE_TEXT_FIELD_TOGGLE_OPEN';
export const EXPANDABLE_TEXT_FIELD_TOGGLE_OPEN_AND_CLOSE_OTHERS = 'EXPANDABLE_TEXT_FIELD_TOGGLE_OPEN_AND_CLOSE_OTHERS';

export function setIsETFOpen(id, open) {
  return {
    type: EXPANDABLE_TEXT_FIELD_SET_IS_OPEN,
    id,
    open
  };
}

export function toggleETF(id, closeOthers=false) {

  return {
    type: closeOthers===true?EXPANDABLE_TEXT_FIELD_TOGGLE_OPEN_AND_CLOSE_OTHERS:EXPANDABLE_TEXT_FIELD_TOGGLE_OPEN,
    id
  };
}
