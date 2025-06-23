import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const ViewProfile = () => {
  const { user } = use(AuthContext);
  return (
    <div className="flex flex-col items-center mt-5 space-y-2 ">
      <img
        src={user.photoURL}
        alt={user.displayName}
        className="w-30 h-30 rounded-full"
        title={user.displayName}
      />

      <p className="font-bold text-2xl hidden md:flex ">
        Name: {user.displayName}
      </p>
      <p className="text-xl font-bold">
        Verification: {user.emailVerified ? "✅ Verified" : "❌ Not Verified"}
      </p>
      <p className="text-xl font-bold">Email: {user.email}</p>
    </div>
  );
};

export default ViewProfile;
