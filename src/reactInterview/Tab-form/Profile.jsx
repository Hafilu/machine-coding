import React from "react";
 
const Profile = ({ data, setData ,err}) => {
  const handleChange = (e, field) => {
    setData((prev) => ({ ...prev, [field]: e.target.value }));
  };
  return (
    <div>
      <div>
        <label> Name</label>
        <input
          type="text"
          className="border"
          value={data.name}
          onChange={(e) => handleChange(e, "name")}
        />
        <div>
            {err.name && (
                <span className="text-red-700">{err.name}</span>
            )}
        </div>
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          className="border"
          value={data.age}
          onChange={(e) => handleChange(e, "age")}
        />
         <div>
            {err.age && (
                <span className="text-red-700">{err.age}</span>
            )}
        </div>
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          className="border"
          value={data.email}
          onChange={(e) => handleChange(e, "email")}
        />
         <div>
            {err.email && (
                <span className="text-red-700">{err.email}</span>
            )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
