import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'

import Home from './Components/pages/Home/Home'
import Categorias from './Components/pages/Categorias/Categorias'
import SingleProduct from './Components/pages/SingleProduct/SingleProduct'
import ErrorPage from './Components/pages/ErrorPage/ErroPage'
import Contacts from './Components/pages/Contacts/Contacts'
<<<<<<< HEAD
=======
import Ajuda from './Components/pages/Ajuda/Ajuda'
import Carrinho from './Components/pages/Carrinho/Carrinho'
import CreatePerfil from './Components/pages/CreatePerfil/CreatePerfil'

>>>>>>> 33dad7a (Projeto site de vendas)

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Home />} />
        <Route path='/categorias' element={<Categorias />}/>
        <Route path='/contact' element={<Contacts />} />
=======
        <Route path='/' element={<Home />} /> 
        <Route path='/categorias' element={<Categorias />}/>
        <Route path='/Contacts' element={<Contacts />} />
        <Route path='/Ajuda' element={<Ajuda/>}/>
        <Route path='/Carrinho' element={<Carrinho/>}/>
        <Route path='/CreatePerfil' element={<CreatePerfil/>}/>
>>>>>>> 33dad7a (Projeto site de vendas)
        <Route path='/categorias/:productId' element={<SingleProduct />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )

<<<<<<< HEAD
  /* FAZER DEPOIS PARA COLOCAR AS ROTAS
  < Route path = '/Itens/*' element = {< Itens />} />
  < Route path = '/Category/*' element = {< Category />} />
  < Route path = '/Contact/*' element = {< Contact />} />
  < Route path = '/Login/*' element = {< Login />} />*/
=======
  //<Route path='/categorias/:productId' element={<SinglePerfil />} />
  
>>>>>>> 33dad7a (Projeto site de vendas)
}