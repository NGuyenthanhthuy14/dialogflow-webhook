const reducer = (state, action) => {
  switch (action.type) {
  case 'UPDATE_USER':
    return {
      ...state,
      currentUser: action.payload // Cập nhật currentUser bằng payload
    }
  case 'OPEN_LOGIN':
    return {
      ...state,
      openLogin:true
    }
  case 'CLOSE_LOGIN':
    return {
      ...state,
      openLogin:false
    }
  case 'UPDATE_ALERT':
    return {
      ...state,
      alert: action.payload
    }
  case 'START_LOADING':
    return {
      ...state,
      loading:true
    }
  case 'END_LOADING':
    return {
      ...state,
      loading:false
    }
  default:
    throw new Error('no matched action')
  }
}
export default reducer