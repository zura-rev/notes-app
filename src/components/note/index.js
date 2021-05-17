import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getPost} from "../../actions";

export function Post(id) {
    // const history = useHistory()
    // const getNote = (id) => {
    //     history.push(`./posts/${id}`)
    // }

    const dispatch = useDispatch()
    const {loader,  post} = useSelector((state) => state.post)

    useEffect(() => {
        dispatch(getPost(id))
    }, [])

    if(loader){
        return <h1>...იტვირთება</h1>
    }

  return (
    <li className='list-group-item d-flex justify-content-between'>
      <div onClick={() => getNote(note.id)}>{note.title}</div>
      <div>
        <button
          className='btn btn-sm btn-outline-danger'
          onClick={() => handleClick(note.id)}
        >
          x
        </button>
      </div>
    </li>
  )
}
