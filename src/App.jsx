
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'; // Importe a nova página
import Default from './pages/Default'
import HandBag from './pages/HandBag';
import Success from './pages/Success';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Default />} />
        <Route path="/main" element={<Main />} /> 
        <Route path ="/handbag" element={<HandBag />} />
        <Route path ="/success" element={<Success />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;


