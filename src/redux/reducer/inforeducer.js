import { Info } from '../../data/info';
import * as actionTypes from '../actionTypes/actionTypes';

export const initialState = {
    theme: "dark",
    info: Info,
    successPost: false,
    message: null,
    getinfo: []
};

const InfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EDIT_DATA_SUCCESS: {
            return {
                ...state,
                info:state.info.concat(action.payload).filter(a => a.name !== state.getinfo[0].name) 
                
            }
        
        }
        case actionTypes.GET_EDIT_DATA_SUCCESS:
            return {
                ...state,
                getinfo: state.info.filter((a) => a.name === action.payload)
                
            }
        case actionTypes.SAVE_DATA_SUCCESS: {
            return {...state, info: state.info.concat(action.payload)
            }
        }
        case actionTypes.DELETE_DATA_SUCCESS: 
            return {
                ...state,
                info: state.info.filter((a) => a.name !== action.payload)
            }
        case actionTypes.SEARCH_DATA_SUCCESS: {

            if (action.payload) {
                return {
                    ...state,
                    info: state.info.filter(a => a.name.toLowerCase() === action.payload)
                }
            } else {
                return alert("Contact not found")
            }
        }
        case actionTypes.RESET_DATA: 
            return {
                ...state,
                info: Info
            }
        case actionTypes.SET_THEME: 
        return {
            ...state,
            theme: action.payload
        }
        default:
            return state
            
    }
};

export default InfoReducer;