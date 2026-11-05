
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'; // Importe a nova página
import HandBag from './pages/HandBag';
import Success from './pages/Success';
import CheckoutScreen from './pages/paymentMethod';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path ="/handbag" element={<HandBag />} />
        <Route path ="/paymethod" element={<CheckoutScreen />} />
        <Route path ="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


