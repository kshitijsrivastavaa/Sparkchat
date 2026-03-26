k"use client";

import { useState } from "react";

export default function Profile() {
  const [username, setUsername] = useState("");

  const handleUpdate = () => {
    console.log("Profile update disabled for now");
  };

  return (
    <div>
      <h2>Profile</h2>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleUpdate}>
        Update Profile
      </button>
    </div>
  );
}
