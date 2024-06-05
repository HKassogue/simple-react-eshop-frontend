import React from 'react';
import Header from './Header';
import Main from './Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from './Details';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
  );
}

export default App;
