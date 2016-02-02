import createLogger from 'redux-logger'

export default createLogger({
  level: 'debug',
  stateTransformer: (state) =>
    state.toJS ? state.toJS() : state
})
