import {
  DELETE_ACCOUNT,
  GET_FAILED,
  GET_INFO,
  GET_SUCCESSFUL,
  POST_FAILED,
  POST_SUCCESSFUL,
  RESTORE_SESSION,
  UPDATE_PASSWORD,
  UPDATE_PROFILE,
} from '../ActionTypes/httpActionTypes';

// Http Actions
export function restoreSession() {
  return {
    type: RESTORE_SESSION,
    payload: { url: '/restoreSession', httpMiddleware: true, method: 'GET' },
  };
}

export function getUserInfo() {
  return {
    type: GET_INFO,
    payload: { url: '/api/getUserInfo', httpMiddleware: true, method: 'GET' },
  };
}

export function postSuccessful(payload) {
  return {
    type: POST_SUCCESSFUL,
    payload,
  };
}

export function postFailed(payload) {
  return {
    type: POST_FAILED,
    payload,
  };
}

export function getFailed(payload) {
  return {
    type: GET_FAILED,
    payload,
  };
}
export function getSuccessful(payload) {
  return {
    type: GET_SUCCESSFUL,
    payload,
  };
}
