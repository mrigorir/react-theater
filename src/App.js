import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles.styles';
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import Error404 from './components/Error/Error404';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path=':title/:movieId' element={ <Movie /> } />
      <Route path='/*' element={ <Error404 /> } />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;
