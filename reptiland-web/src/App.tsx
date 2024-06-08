import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import PainelAdmin from "./pages/PainelAdmin/PainelAdmin";
import { GlobalStorage } from "./context/GlobalStorage";
import AddAnimal from "./pages/Animals/AddAnimal/AddAnimal";
import EditAnimal from "./pages/Animals/EditAnimal/EditAnimal";
import AddClient from "./pages/Clients/AddClients/AddClients";
import AddSales from "./pages/Sales/AddSales/AddSales";
import EditClient from "./pages/Clients/EditClient/EditClient";
import EditSales from "./pages/Sales/EditSales/EditSales";
import "./App.css";
import ListAnimals from "./pages/Animals/ListAnimals/ListAnimals";
import ListClients from "./pages/Clients/ListClients/ListClients";
import ListSales from "./pages/Sales/ListSales/ListSales";
import Header from "./components/Header/Header";
import ListUsers from "./pages/Users/ListUsers/ListUsers";
import AddUser from "./pages/Users/AddUser/AddUser";
import EditUser from "./pages/Users/EditUser/EditUser";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SecurityPolicyNotLogged from "./pages/SecurityPolicy/NotLogged/SecurityPolicyNotLogged";
import Logout from "./pages/Logout/Logout";
import LoginMid from "./pages/LoginMid/LoginMid";

function App() {
  return (
    <div className="geral">
      <GlobalStorage>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="login/:id" element={<LoginMid />}/>
            <Route path="home/" element={<Header />}>
              <Route path="" element={<PainelAdmin />} />
              {/* Animais */}
              <Route path="animais" element={<PrivateRoute><ListAnimals /></PrivateRoute>} />
              <Route path="animais/adicionar" element={<PrivateRoute><AddAnimal /></PrivateRoute>} />
              <Route path="animais/editar/:id" element={<PrivateRoute><EditAnimal /></PrivateRoute>} />
              {/* Clientes */}
              <Route path="clientes" element={<PrivateRoute><ListClients /></PrivateRoute>} />
              <Route path="clientes/adicionar" element={<PrivateRoute><AddClient /></PrivateRoute>} />
              <Route path="clientes/editar/:id" element={<PrivateRoute><EditClient /></PrivateRoute>} />
              {/* Vendas */}
              <Route path="vendas" element={<PrivateRoute><ListSales /></PrivateRoute>} />
              <Route path="vendas/adicionar" element={<PrivateRoute><AddSales /></PrivateRoute>} />
              <Route path="vendas/editar/:id" element={<PrivateRoute><EditSales /></PrivateRoute>} />
              {/*Usuários*/}
              <Route path="users" element={<PrivateRoute adminRoute={true}><ListUsers /></PrivateRoute>} />
              <Route path="users/adicionar" element={<PrivateRoute adminRoute={true} ><AddUser /></PrivateRoute>} />
              <Route path="users/editar/:id" element={<PrivateRoute adminRoute={true}><EditUser /></PrivateRoute>} />
            </Route>
              <Route path="logout" element={<Logout />}/>
            <Route path="politica/:loggedUser?" element={<SecurityPolicyNotLogged />} />
          </Routes>
        </BrowserRouter>
      </GlobalStorage>
    </div>
  );
}

export default App;
