import React from 'react';
import './App.css';
import Header from "./components/HeaderNav";
import Container from "./components/Container";
import Login from "./components/Login";
import WorkPageHeader from "./components/WorkPageHeader";

function App() {
  return (
    <div className="App">
      {/*<Header/>
        <Container/>*/}
        {/*<Login/>*/}
        <WorkPageHeader/>
    </div>
  );
}

export default App;
