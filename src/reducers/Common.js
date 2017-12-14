import { STATUS_LOADING, STATUS_LOADED, SET_SCREEN_RESOLUTION } from '../actions/types';

import {
    initialStateCommon,
} from './store'


export default (state = initialStateCommon, action) => {
    switch (action.type) {
        case STATUS_LOADING:
            return { ...state, displayLoading: true };
        case STATUS_LOADED:
            return { ...state, displayLoading: false };
        case SET_SCREEN_RESOLUTION:
            return {
                ...state, screen_resolution: {
                    width: action.payload.width,
                    height: action.payload.height,
                }
            };
        default:
            return state;
    }
}