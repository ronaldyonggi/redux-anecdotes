// const filterReducer = (state = '', action) => {
//     switch (action.type) {
//         case 'SET_FILTER':
//             return action.payload
//         default:
//             return state
//     }
// }

import { createSlice } from "@reduxjs/toolkit"

// Action creator for filter
// export const filterChange = filter => {
//     return {
//         type: 'SET_FILTER',
//         payload: filter.toLowerCase()
//     }
// }

const initialState = ''

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterChange(state, action) {
            return action.payload.toLowerCase()
        }
    }
})

export const { filterChange } = filterSlice.actions
export default filterSlice.reducer