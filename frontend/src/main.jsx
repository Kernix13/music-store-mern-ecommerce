import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store'
import App from './App.jsx'
import Home from './views/Home.jsx'
import Details from './views/Details.jsx'
import Cart from './views/Cart';
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/product/:id" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
