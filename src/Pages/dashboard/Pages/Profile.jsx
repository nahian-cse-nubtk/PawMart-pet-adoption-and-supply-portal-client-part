import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Profile = () => {
  const { user } = useAuth()

  return (
    <div className="p-6 min-h-screen bg-linear-to-br from-amber-50 to-green-50">
      {/* Welcome Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6 flex items-center gap-4">
        <img
          src={
            user?.photoURL ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          alt="profile"
          className="w-16 h-16 rounded-full border-2 border-amber-300"
        />

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome back, {user?.displayName || "Pet Lover"}
          </h2>
          <p className="text-gray-500 text-sm">
            We’re happy to see you again. Thanks for being part of our pet family ❤️
          </p>
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Profile Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div className="bg-amber-50 p-4 rounded-xl">
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-semibold text-gray-800">
              {user?.displayName || "Not provided"}
            </p>
          </div>

          {/* Email */}
          <div className="bg-green-50 p-4 rounded-xl">
            <p className="text-sm text-gray-500">Email Address</p>
            <p className="font-semibold text-gray-800">
              {user?.email || "Not provided"}
            </p>
          </div>

          {/* Account Type */}
          <div className="bg-blue-50 p-4 rounded-xl">
            <p className="text-sm text-gray-500">Account Type</p>
            <p className="font-semibold text-gray-800">User</p>
          </div>

          {/* Member Since */}
          <div className="bg-pink-50 p-4 rounded-xl">
            <p className="text-sm text-gray-500">Member Status</p>
            <p className="font-semibold text-gray-800">
              Active Pet Lover 🐾
            </p>
          </div>
        </div>

        {/* Action */}
        <div className="mt-6">
          <button className="btn bg-amber-200 hover:bg-amber-300 text-gray-800 rounded-xl">
            Edit Profile (Coming Soon)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;