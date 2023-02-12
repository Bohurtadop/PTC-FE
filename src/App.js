import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Feeling from './pages/Feeling';
import Questions from './pages/Questions';
import Thanks from './pages/Thanks';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Feeling />} />
        <Route path="/feeling" element={<Feeling />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
