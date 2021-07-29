const initialState = {
  user: {
    id: '',
    name: '',
    avatarURL: '',
    answers: {},
    questions: [],
  },
  loading: false,
  error: null,
  authenticate: false,
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export {
  reducer
}
