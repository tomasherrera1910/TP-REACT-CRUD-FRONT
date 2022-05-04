import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Instrumentos} from './components/Instrumentos'
import {InstrumentoDetalle} from './components/InstrumentoDetalle'
import {Home} from './components/Home'
import {DondeEstamos} from './components/DondeEstamos'
import {CRUD} from './components/CRUD'
import { Navbar } from './components/Navbar';

function App() {
  return (
   <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/productos' element={<Instrumentos/>}/>
      <Route path='/producto/:id' element={<InstrumentoDetalle/>}/>
      <Route path='/dondeEstamos' element={<DondeEstamos/>}/>
      <Route path='/CRUD' element={<CRUD/>}/>
    </Routes>
   </BrowserRouter> 
  )
}

export default App;
