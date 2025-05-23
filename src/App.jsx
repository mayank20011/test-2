import ProductPage from './Pages/ProductPage';
import SpecificProductPage from './Pages/SpecificProductPage';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/:id" element={<SpecificProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
