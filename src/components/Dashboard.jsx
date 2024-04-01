import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstName, lastName, isLogin } = location.state || {};

  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  const handleLogout = () => {
    // Display confirmation dialog
    setShowLogoutConfirmation(true);
  };

  const confirmLogout = () => {
    // Clear session data, local storage, etc.
    // Redirect to the login page
    navigate("/");
  };

  const cancelLogout = () => {
    // Hide confirmation dialog
    setShowLogoutConfirmation(false);
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
      {showLogoutConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-800 mb-4">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-end">
              <button
                onClick={cancelLogout}
                className="px-4 py-2 mr-2 bg-gray-400 text-gray-800 rounded hover:bg-gray-500 hover:text-white focus:outline-none"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
