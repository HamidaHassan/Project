/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FarmersInformation = () => {
  const [farmers, setFarmers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Function to fetch farmers from the backend
  const fetchFarmers = () => {
    axios.get('http://localhost:8091/api/farmer/all')
      .then(response => {
        setFarmers(response.data);
      })
      .catch(error => {
        console.error('Error fetching farmer data:', error);
        setError(error);
      });
  };

  // Fetch farmer when the component mounts
  useEffect(() => {
    fetchFarmers();
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      navigate('/addFarmer');
    }
  }, [navigate]);

  // Function to navigate to the update farmer page
  const handleUpdateFarmer = (id) => {
    navigate(`/Main/farmer_update/${id}`);
  };

  // Function to handle deleting a farmer
  const handleDeleteFarmer = (id) => {
    axios.delete(`http://localhost:8091/api/farmer/ById${id}`)
      .then(() => {
        setFarmers(farmers.filter(farmer => farmer.id !== id));
      })
      .catch(error => {
        console.error('Error deleting farmer:', error);
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Farmer List</h2>
      {error && <div className="text-red-500 mb-4">Error fetching farmer data: {error.message}</div>}
      <button
        className="bg-blue-500 text-white px-4 py-2 mb-4 rounded hover:bg-blue-600"
        onClick={() => navigate('/addFarmer')}
      >
        Add Farmer
      </button>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b">ID</th>
            <th className="px-4 py-2 border-b">Username</th>
            <th className="px-4 py-2 border-b">First Name</th>
            <th className="px-4 py-2 border-b">Last Name</th>
            <th className="px-4 py-2 border-b">Email</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map(farmer => (
            <tr key={farmer.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{farmer.id}</td>
              <td className="px-4 py-2 border-b">{farmer.username}</td>
              <td className="px-4 py-2 border-b">{farmer.firstName}</td>
              <td className="px-4 py-2 border-b">{farmer.lastName}</td>
              <td className="px-4 py-2 border-b">{farmer.email}</td>
              <td className="px-4 py-2 border-b">
                <button
                  className="bg-green-500 text-white px-2 py-1 mr-2 rounded hover:bg-green-600"
                  onClick={() => handleUpdateFarmer(farmer.id)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => handleDeleteFarmer(farmer.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FarmersInformation;
