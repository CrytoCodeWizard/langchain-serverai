import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-2 flex justify-between items-center">
        <Link to='/' className='flex flex-col sm:flex-row sm:items-center'>
          <h1 className="text-xl font-bold text-gray-800">TopDown AI</h1>
          <span className="text-sm text-gray-600 mt-1 sm:mt-0 sm:ml-4">Server AI Settings</span>
        </Link>
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex gap-4 mt-2 sm:mt-0 px-4">
          <Link to="/" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded transition duration-150 ease-in-out">
            Home
          </Link>
          <Link to="/playground" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-150 ease-in-out">
            Playground
          </Link>
        </div>
        <div className="flex items-center gap-4 mt-2 sm:mt-0 px-4">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="user avatar"
            className="h-10 w-10 rounded-full object-cover border-2 border-gray-300"
          />
          <span className="text-gray-800 font-medium">Fujii Hachiro</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
