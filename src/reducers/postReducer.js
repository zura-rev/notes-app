import {GET_POSTS_BEGIN,GET_POSTS_SUCCESS,GET_POSTS_ERROR} from '../actions/actionTypes'

const initialState = {
  loader:false,
  posts:null,
  error:null
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_POSTS_BEGIN:
      return { ...state, loader: true }
    case GET_POSTS_SUCCESS:
      return { ...state, posts: payload, error:null, loader: false }
    case GET_POSTS_ERROR:
        return {
          ...state, posts: null, error:payload, loader: false
        }
    default:
      return state
  }
}
