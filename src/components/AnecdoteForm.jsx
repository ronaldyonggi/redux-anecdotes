import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(createAnecdote(newAnecdote))
        dispatch(setNotification(`you added '${content}'`))
        setTimeout(() => {
            dispatch(setNotification(''))
        }, 5000);
    }

    return (
        <>
            <h2>Create New</h2>
            <form onSubmit={addAnecdote}>
                <input name="anecdote"/>
                <button type="submit">create</button>
            </form>
        </>
    )

}

export default AnecdoteForm