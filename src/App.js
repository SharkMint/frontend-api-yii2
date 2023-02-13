import "./App.css";
import Address from "./pages/Address";
import Client from "./pages/Client";
import CreateClient from "./components/client/CreateClient";
import EditAddress from "./components/address/EditAddress";
import EditClient from "./components/client/EditClient";
import EditPerfil from "./components/perfil/EditPerfil";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Perfil from "./pages/Perfil";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />

        <Route path="/client" element={ <Client /> } />
        <Route path="/address" element={ <Address /> } />
        <Route path="/perfil" element={ <Perfil /> } />

        <Route path="/createclient" element={ <CreateClient /> } />

        <Route path="/client/:id" element={ <EditClient /> } />
        <Route path="/address/:id" element={ <EditAddress /> } />
        <Route path="/perfil/:id" element={ <EditPerfil /> } />

        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
