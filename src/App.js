import { Navbar } from './components';
import GlobalStyle from './globalStyles';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage/Home';
function App() {
  return (

      <Router>
        <GlobalStyle/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>

  );
}

export default App;
