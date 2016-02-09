import createLogger from 'redux-logger'

export const middleware = createLogger({
  level: 'debug',
  stateTransformer: (state) =>
    state.toJS ? state.toJS() : state
})
