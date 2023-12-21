import React from "react";

function ProfileDetails({ name, age, gender }) {
  const email = "sabitakhadka091@gmail.com";
  const phone = "9823567119";
  const address = "koteshor,Kathmandu, Nepal";
  return (
    <div className="profile-details">
      <div className="profile-picture">
        <img
          src="https://kinsta.com/wp-content/uploads/2021/11/front-end-developer.png"
          alt="Upload Error"
        />
      </div>
      <div className="personal-info">
        <h3>{name}</h3>
        <p>
          {gender === "girl" ? "Female" : "Male"}, {age} years old
        </p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Address: {address}</p>
      </div>
    </div>
  );
}

export default ProfileDetails;
