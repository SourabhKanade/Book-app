import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createStore, applyMiddleware, compose } from 'redux';
// import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import store from './redux/Store.jsx';
import './Main.css';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore( reducers,
//   //  persistedState,
//   // { Intl: { locale: defaultLocale } },
//  composeEnhancers(applyMiddleware(reduxThunk))
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

    <Provider store={store}>
        <App />
  </Provider>
  // </React.StrictMode>,
)
