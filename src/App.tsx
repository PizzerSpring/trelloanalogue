import React from 'react';
import './App.css';
import Header from "./components/HeaderNav";
import Container from "./components/Container";
import Login from "./components/Login";
import WorkPageHeader from "./components/WorkPageHeader";
import Workspace from "./components/Workspace";
import WorkContainer from "./components/WorkContainer";
import {HashRouter, Routes, Route, Navigate} from "react-router-dom";
import AppContainer from "./components/AppContainer";
import {useSelector} from "react-redux";
import {RootStateType} from "./redux/store";
import BoardWorkspace from "./components/BoardWorkspace";

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Routes>
              <Route path={'/'} element={<AppContainer/>}/>
              <Route path={'/login'} element={<Login/>}/>
              <Route path={'/work'} element={<WorkContainer/>}/>
              <Route path={'/boards'} element={<BoardWorkspace/>}/>
          </Routes>
      </HashRouter>
      {/*<Header/>
        <Container/>*/}
        {/*<Login/>*/}
        {/*<WorkContainer/>*/}
    </div>
  );
}

export default App;
