import { Routes, Route } from 'react-router-dom'
import { Contacto, Inicio, NotFound } from '../views'

const RoutesPath = () => {
  return (
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='contacto' element={<Contacto />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
export default RoutesPath
