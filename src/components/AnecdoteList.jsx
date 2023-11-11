import { useDispatch, useSelector } from "react-redux"
import { vote } from "../reducers/anecdoteReducer"

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
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div>
            {anecdotes
                .sort((a, b) => a.votes - b.votes).reverse()
                .map(anecdote => (
                    <Anecdote
                        key = {anecdote.id}
                        anecdote={anecdote}
                        handleVote={() => dispatch(vote(anecdote.id))}
                        />
                ))
            }
        </div>
    )
}

export default AnecdoteList