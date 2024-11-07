import { useState, useEffect } from "react";
import { setVotes } from "../../utils/api";

export const Votes = ({votes, id, itemToUpdate}) => {
  const [currentVotes, setCurrentVotes] = useState(votes)
  const [disableUpVote, setDisableUpVote] = useState(false)
  const [disableDownVote, setDisableDownVote] = useState(false)
  const [error, setError] = useState(null)

  useEffect(()=> {
      setVotes(id, itemToUpdate, 0).then((votes)=> {
        setCurrentVotes(votes)
      }).catch((error) => {
        setError(error)
      })
  }, [votes])

  const handleUpVote = () => {
    setCurrentVotes(currentVotes + 1)
    setDisableUpVote(true)
    setDisableDownVote(false)
    setVotes(id, itemToUpdate, 1).then(()=>{
      setError(null)
    }).catch((error)=> {
      setError(error)
      setDisableUpVote(false)
      setCurrentVotes(currentVotes)
    })
  }

  const handleDownVote = () => {
    setCurrentVotes (currentVotes - 1)
    setDisableUpVote(false)
    setDisableDownVote(true)
    setVotes(id, itemToUpdate, -1).then(()=>{
      setError(null)
    }).catch((error)=> {
      setError(error)
      setDisableDownVote(false)
      setCurrentVotes(currentVotes)
    })
  }

  return (
    <section>
      <button onClick={handleUpVote} disabled={disableUpVote}>+1</button>
      <h4>{currentVotes}</h4>
      <button onClick={handleDownVote} disabled={disableDownVote}>-1</button>
      {error ? <p>Error, try again</p> : null}
    </section>
  )
}