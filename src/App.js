import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from './components/Test';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Navigation/>

     <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;