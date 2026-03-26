"use client";

import { useState } from "react";

function Profile() {
  const [name, setName] = useState("");

  const handleUpdate = async () => {
    try {
      // You can connect this later to Supabase
      console.log("Updating profile:", name);

      alert("Profile updated (temporary)");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h2>Profile</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "10px",
          marginTop: "10px",
          width: "100%",
          borderRadius: "5px",
        }}
      />

      <button
        onClick={handleUpdate}
        style={{
          marginTop: "15px",
          padding: "10px",
          backgroundColor: "#ff6b35",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Update Profile
      </button>
    </div>
  );
}

export default Profile;
