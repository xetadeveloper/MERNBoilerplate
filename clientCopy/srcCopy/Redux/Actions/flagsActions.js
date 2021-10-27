import {
  RESET_FLAG_STATE,
  UPDATE_FLAG_STATE,
} from '../ActionTypes/flagsActionTypes';

export function updateFlagState(payload) {
  return {
    type: UPDATE_FLAG_STATE,
    payload,
  };
}

export function resetFlagState() {
  return {
    type: RESET_FLAG_STATE,
  };
}

