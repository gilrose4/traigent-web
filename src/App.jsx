import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Layout from './layout'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  )
} 