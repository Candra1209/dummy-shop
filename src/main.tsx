import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero from './component/Hero'
import './index.css'
import Root from './pages/Root'
import ErrorPage from './pages/ErrorPage'
import ListPorduct from './component/ListPorduct'
import Item from './pages/Item'


const storeRouter = createBrowserRouter(
  [
    {
      path : '/dummy-shop',
      element : <Root/>,
      errorElement : <ErrorPage/>,
      children:[
        {
          path : '/dummy-shop',
          element : <Hero/>,
        },
        {
          path : '/dummy-shop/product',
          element : <ListPorduct/>,
        },
        {
          path : '/dummy-shop/product/:id',
          element : <Item/>,
        }
      ]
    },
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={storeRouter}/>
  </React.StrictMode>,
)
