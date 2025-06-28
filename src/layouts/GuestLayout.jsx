import Header from "../components/Guest/Header";
import { Outlet } from "react-router-dom";

export default function GuestLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-4">
        <Outlet />
      </main>
    </div>
  );
}
