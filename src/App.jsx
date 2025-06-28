import React from "react";
import "./assets/tailwind.css";
//import { useState } from "react";
import { Route, Routes } from "react-router-dom";



const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Cari = React.lazy(() => import("./pages/Cari"));
const TambahResep = React.lazy(() => import("./pages/TambahResep"));
const Simpan = React.lazy(() => import("./pages/Simpan"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Loading = React.lazy(() => import("./layouts/Loading"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Forbidden = React.lazy(() => import("./pages/Forbidden"));
const BadRequest = React.lazy(() => import("./pages/BadRequest"));
const Unauthorized = React.lazy(() => import("./pages/Unauthorized"));
const Home = React.lazy(() => import("./pages/Guest/Home"));
const About = React.lazy(() => import("./pages/Guest/About"));
const Product = React.lazy(() => import("./pages/Guest/Product"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));


function App() {
    return (
        <Routes>

            {/*User Routes  */}
            <Route element={<MainLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="cari" element={<Cari />} />
                <Route path="tambahresep" element={<TambahResep />} />
                <Route path="simpan" element={<Simpan />} />
            </Route>

            {/* MAIN ROUTES */}
            <Route element={<GuestLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              
            </Route>

            {/* AUTH ROUTES */}
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot" element={<Forgot />} />
            </Route>

            <Route path="*" element={<NotFound />} />
            <Route path="forbidden" element={<Forbidden />} />
            <Route path="*" element={<NotFound />} />
        </Routes>





    )

}

export default App;