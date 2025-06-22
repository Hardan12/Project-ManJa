import React from "react";
import "./assets/tailwind.css";
//import { useState } from "react";
import { Route, Routes } from "react-router-dom";



const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Cari = React.lazy(() => import("./pages/Cari"));
const TambahResep = React.lazy(() => import("./pages/TambahResep"));
const Simpan = React.lazy(() => import("./pages/Simpan"));


function App() {
    return (
        <Routes>
            {/* MAIN ROUTES */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="cari" element={<Cari />} />
                <Route path="tambahresep" element={<TambahResep />} />
                <Route path="simpan" element={<Simpan />} />
               
            </Route>

            {/* AUTH ROUTES */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>


        </Routes>
    )

}

export default App;