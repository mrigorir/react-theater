import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles.styles';
import Header from './components/Header';
import Home from './components/Home';
import Error404 from './components/Error/Error404';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route element={<Error404 />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
