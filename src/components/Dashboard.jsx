import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstName, lastName, isLogin } = location.state || {};

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="h-screen flex flex-col bg-zinc-100">
      <header className="flex justify-between items-center py-4 px-6 shadow-md rounded-lg">
        <button
          type="button"
          className="px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-700 text-white font-bold focus:outline-none"
          onClick={handleLogout}
        >
          Logout
        </button>
        <h2 className="text-xl font-medium text-gray-700">
          Hello, {firstName} {lastName}
        </h2>
      </header>
      <main className="flex-grow flex justify-center items-center">
        <h1 className="text-8xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
          Welcome
        </h1>
      </main>
    </div>
  );
};

export default Dashboard;
