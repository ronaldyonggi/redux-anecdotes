import { useDispatch, useSelector } from "react-redux"
import { vote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const Anecdote = ({ anecdote, handleVote}) => {
    return (
        <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
            </div>
            <button onClick={handleVote}>vote</button>
        </div>
    )
}


const AnecdoteList = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)
    const anecdotes = useSelector(state => state.anecdotes)

    const handleVote = anecdote => {
        dispatch(setNotification(`you voted '${anecdote.content}'`))
        dispatch(vote(anecdote.id))
    }

    const filteredAnecdotes = filter.length === 0 
    ? anecdotes
    : anecdotes.filter(a => a.content.toLowerCase().includes(filter))


    return (
        <div>
            {[...filteredAnecdotes]
                .sort((a, b) => a.votes - b.votes).reverse()
                .map(anecdote => (
                    <Anecdote
                        key = {anecdote.id}
                        anecdote={anecdote}
                        handleVote={() => handleVote(anecdote)}
                        />
                ))
            }
        </div>
    )
}

export default AnecdoteList