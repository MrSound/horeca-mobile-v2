import { STATUS_LOADING, STATUS_LOADED, SET_SCREEN_RESOLUTION, } from './types';

export function statusLoading() {
    return {
        type: STATUS_LOADING,
    };
};

export function statusLoaded() {
    return {
        type: STATUS_LOADED,
    };
};

export const setScreenWidthHeight = (width, height) => {
    return {
        type: SET_SCREEN_RESOLUTION,
        payload: { width, height }
    };
}