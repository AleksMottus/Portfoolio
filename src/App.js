import React from 'react';
import './App.css';
import Intro from './komponendid/intro/intro';
import About from './komponendid/about/about';
import ProductList from './komponendid/productList/productList';
import Kontakt from './komponendid/kontaktid/kontakt';
import Toggle from './komponendid/toggle/toggle';
import { useContext } from 'react';
import { ThemeContext } from './context';

function App() {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return <div style={{backgroundColor:darkMode? "#222": "white", color: darkMode &&"white"}}>
    <Toggle />
    <Intro />
    <About />
    <ProductList />
    <Kontakt />
    </div>
    
}

export default App;
