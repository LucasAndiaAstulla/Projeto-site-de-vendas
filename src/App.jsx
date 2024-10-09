import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'

import Home from './Components/pages/Home/Home'
import Categorias from './Components/pages/Categorias/Categorias'
import SingleProduct from './Components/pages/SingleProduct/SingleProduct'
import ErrorPage from './Components/pages/ErrorPage/ErroPage'
import Contacts from './Components/pages/Contacts/Contacts'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categorias' element={<Categorias />}/>
        <Route path='/contact' element={<Contacts />} />
        <Route path='/categorias/:productId' element={<SingleProduct />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )

  /* FAZER DEPOIS PARA COLOCAR AS ROTAS
  < Route path = '/Itens/*' element = {< Itens />} />
  < Route path = '/Category/*' element = {< Category />} />
  < Route path = '/Contact/*' element = {< Contact />} />
  < Route path = '/Login/*' element = {< Login />} />*/
}