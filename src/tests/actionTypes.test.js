import types from '../app/actions/actionTypes';

const myTypes = {
  APPROVE_REQUEST: 'APPROVE_REQUEST',
  DISAPPROVE_REQUEST: 'DISAPPROVE_REQUEST',
  RESOLVE_REQUEST: 'RESOLVE_REQUEST',
  SIGNUP: 'SIGNUP',
  LOGIN: 'LOGIN',
  VIEW_PROFILE: 'VIEW_PROFILE',
  UPDATE_PROFILE: 'UPDATE_PROFILE',
  UPDATE_PASSWORD: 'UPDATE_PASSWORD',
  CREATE_REQUEST: 'CREATE_REQUEST',
  UPDATE_REQUEST: 'UPDATE_REQUEST',
  DELETE_REQUEST: 'DELETE_REQUEST',
  VIEW_ALL_REQUESTS: 'VIEW_ALL_REQUESTS',
  VIEW_SINGLE_REQUEST: 'VIEW_SINGLE_REQUEST',
};

describe('Tests the action types string contants', () => {
  it('should be an object', () => {
    expect(types).toBeTruthy();
  });

  it('should return APPROVE request', () => {
    expect(types.APPROVE_REQUEST).toEqual(myTypes.APPROVE_REQUEST);
  });

  it('should return DISAPPROVE request', () => {
    expect(types.DISAPPROVE_REQUEST).toEqual(myTypes.DISAPPROVE_REQUEST);
  });

  it('should return RESOLVE request', () => {
    expect(types.RESOLVE_REQUEST).toEqual(myTypes.RESOLVE_REQUEST);
  });

  it('should return SIGNUP', () => {
    expect(types.SIGNUP).toEqual(myTypes.SIGNUP);
  });

  it('should return LOGIN', () => {
    expect(types.LOGIN).toEqual(myTypes.LOGIN);
  });

  it('should return VIEW PROFILE', () => {
    expect(types.VIEW_PROFILE).toEqual(myTypes.VIEW_PROFILE);
  });

  it('should return UPDATE PROFILE', () => {
    expect(types.UPDATE_PROFILE).toEqual(myTypes.UPDATE_PROFILE);
  });

  it('should return UPDATE PASSWORD', () => {
    expect(types.UPDATE_PASSWORD).toEqual(myTypes.UPDATE_PASSWORD);
  });

  it('should return CREATE request', () => {
    expect(types.CREATE_REQUEST).toEqual(myTypes.CREATE_REQUEST);
  });

  it('should return UPDATE request', () => {
    expect(types.UPDATE_REQUEST).toEqual(myTypes.UPDATE_REQUEST);
  });

  it('should return DELETE request', () => {
    expect(types.DELETE_REQUEST).toEqual(myTypes.DELETE_REQUEST);
  });

  it('should return VIEW ALL requests', () => {
    expect(types.VIEW_ALL_REQUESTS).toEqual(myTypes.VIEW_ALL_REQUESTS);
  });

  it('should return VIEW SINGLE request', () => {
    expect(types.VIEW_SINGLE_REQUEST).toEqual(myTypes.VIEW_SINGLE_REQUEST);
  });
});
