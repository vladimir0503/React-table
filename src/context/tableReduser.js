import { LOAD_DATA, DELETE_DATA, GET_NUMBER_PAGE } from './types';

const tableReduser = (state, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return {
                ...state,
                data: action.payload
            }

        case GET_NUMBER_PAGE:
            return {
                ...state,
                numberPage: action.payload.numberPage,
                dataSize: action.payload.dataSize
            }

        case DELETE_DATA:
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.payload)
            }

        default:
            return state;
    }
}

export default tableReduser;