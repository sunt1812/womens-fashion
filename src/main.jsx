import React from 'react'
import ReactDOM from 'react-dom'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './sass/index.scss'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
import {store} from './redux/store'
import { getTotals } from './redux/shopping-cart/cartItemsSlice'
store.dispatch(getTotals());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
