const filterReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.payload
        default:
            return state
    }
}

// Action creator for filter
export const filterChange = filter => {
    return {
        type: 'SET_FILTER',
        payload: filter.toLowerCase()
    }
}

export default filterReducer