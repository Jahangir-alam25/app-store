import { useState, useEffect } from "react";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { Helmet } from "react-helmet-async";


const MyProfile = () => {

  const user = auth.currentUser;

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      setSuccessMsg("Profile updated successfully.");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  if (!user) return <p>Please log in to view your profile.</p>;

  return (
    <div className="max-w-md mx-auto p-4 shadow-lg rounded-lg bg-white space-y-4 my-10">
      <Helmet>
        <title>My Profile - AppStore</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-center">My Profile</h2>

      <div className="text-center">
        <img
          className="w-28 h-28 mx-auto rounded-full"
          src={user.photoURL || "https://via.placeholder.com/150"}
          alt={user.displayName || "User"}
        />
        <p className="mt-2 text-lg font-semibold">{user.displayName}</p>
        <p className="text-sm text-gray-600">{user.email}</p>
      </div>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            className="w-full border px-3 py-2 rounded"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Photo URL</label>
          <input
            className="w-full border px-3 py-2 rounded"
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>

      {successMsg && <p className="text-green-600 text-center">{successMsg}</p>}
      {errorMsg && <p className="text-red-600 text-center">{errorMsg}</p>}
    </div>
  );
};

export default MyProfile;