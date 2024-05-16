import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Characters from './pages/Characters/Characters'
import Comics from './pages/Comics/Comics'
import Details from './components/Details/Details'
import NotFound from './pages/404/NotFound' // Importa tu componente NotFound

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route
          path='/characters/:id'
          element={<Details entityType='characters' />}
        />
        <Route path='/comics' element={<Comics />} />
        <Route path='/comics/:id' element={<Details entityType='comics' />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
