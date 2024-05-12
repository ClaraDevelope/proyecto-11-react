import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Comics from './pages/Comics/Comics.jsx'
import NotFound from './pages/404/NotFound.jsx'
import Details from './components/Details/Details.jsx'
import Characters from './pages/Characters/Characters.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/characters' element={<Characters />} />
          <Route
            path='/characters/:id'
            element={<Details entityType='characters' />}
          />
          <Route path='/comics' element={<Comics />} />
          <Route path='/comics/:id' element={<Details entityType='comics' />} />
          <Route path='/series/:id' element={<Details entityType='series' />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
