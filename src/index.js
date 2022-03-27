import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
// import './index.css';
import App from './App';
// Aquí importamos el reducer creado anteriormente
import rootReducer from './redux/index' ;

const store = createStore(
		rootReducer,
		composeWithDevTools()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


