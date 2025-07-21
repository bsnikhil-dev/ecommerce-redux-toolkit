import React from "react";

const NotFound = ():React.ReactElement => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Page not found.</p>
        <a
          href="/"
          className="inline-block px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
