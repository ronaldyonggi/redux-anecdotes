import { createSlice } from "@reduxjs/toolkit"

const initialState = ''

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        setNotification(state, action) {
            return action.payload
        }
    }
})

export const { setNotification } = notificationSlice.actions

export const notificationWithTime = (notification, secs) => {
    return dispatch => {
        dispatch(setNotification(notification))
        setTimeout(() => {
            dispatch(setNotification(''))
        }, secs * 1000);
    }
}
export default notificationSlice.reducer