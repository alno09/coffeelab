import './App.css';
import HomeComponent from './portfolio/routes/home';
import ProductComponent from './portfolio/routes/product';
import ContactComponent from './portfolio/routes/contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/product" element={<ProductComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
      </Routes>
    </>
  );
}

export default App;
