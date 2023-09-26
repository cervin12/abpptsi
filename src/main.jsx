import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Routes/home.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Members from './Routes/members.jsx';
import Institutes from './Routes/institutes.jsx';

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/members",
    element: <Members/>
  },
  {
    path:'/institutes',
    element:<Institutes/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
