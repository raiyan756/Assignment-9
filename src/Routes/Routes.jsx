// route.jsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Home';
import Sports_info from '../Pages/sports_info';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async () => {
          const response = await fetch('sports.json');
          const data = await response.json();
          return data; // Returning the fetched data
        },
       
      },
      {
        path:"/news/:id",
        element:<Sports_info></Sports_info>

      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/Register",
        element:<Register></Register>
      }
    ],
  },
]);

export default Routes;
