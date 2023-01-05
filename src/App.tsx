import React from 'react';
import './App.css';
import Header from "./components/AppContainer/Header/Header";
import Container from "./components/AppContainer/Container/Container";
import Login from "./components/Login/Login";
import WorkPageHeader from "./components/WorkContainer/WorkPageHeader/WorkPageHeader";
import Workspace from "./components/WorkContainer/Workspace/Workspace";
import WorkContainer from "./components/WorkContainer/WorkContainer";
import {HashRouter, Routes, Route, Navigate} from "react-router-dom";
import AppContainer from "./components/AppContainer/AppContainer";
import {useSelector} from "react-redux";
import {RootStateType} from "./redux/store";
import BoardWorkspace from "./components/BoardWorkspace/BoardWorkspace";

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
