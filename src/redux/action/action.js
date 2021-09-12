import { Url } from '../../data/baseUrl';

export const postInfo = (info) => {
    return {
        type: 'POST_DATA_SUCCESS',
        payload: info,
    }
};

export const deleteData = (del) => {
    return {
        type: 'DELETE_DATA_SUCCESS',
        payload: del,
    }
};

export const editData = (edit) => {
    return {
        type: 'EDIT_DATA_SUCCESS',
        payload: edit,
    }
};
export const editDatas = (get) => {
    return {
        type: 'GET_EDIT_DATA_SUCCESS',
        payload: get,
    }
};
export const saveData = (save) => {
    return {
        type: 'SAVE_DATA_SUCCESS',
        payload: save,
    }
};
export const searchData = (search) => {
    return {
        type: 'SEARCH_DATA_SUCCESS',
        payload: search,
    }
};
export const resetData = (reset) => {
    return {
        type: 'RESET_DATA',
        payload: reset,
    }
};
export const setTheme = (set) => {
    return {
        type: 'SET_THEME',
        payload: set,
    }
};