'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.middleware = undefined;

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = exports.middleware = (0, _reduxLogger2.default)({
  level: 'debug',
  stateTransformer: function stateTransformer(state) {
    return state.toJS ? state.toJS() : state;
  }
});