import './App.css';
import HomePage from './pages/Home/homePage';
import Header from './components/Header/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductDetailsPage from './pages/ProductDetails/productDetailsPage';
import Sidebar from './components/SideBar/sideBar';
import Footer from './components/Footer/footer';
import NotFound from './components/NotFound/notFound';

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id' element={<ProductDetailsPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  )
}

export default App
