import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/About';
import Index from './pages/Index';
import Layout from './pages/Layout';
import PageNotFound from './pages/PageNotFound'; 

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route exact path='/about' element={<About />} />
          <Route index element={<Index />} />
          <Route path='/404' element={<PageNotFound />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
