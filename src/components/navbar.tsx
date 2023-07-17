import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <h1 style={{ color: "white" }}>PostUp</h1>
      <div className="navbar">
        <div className="links">
          <Link to="/">Home</Link>

          {!user ? (
            <Link to="/login">Login</Link>
          ) : (
            <Link to="/createpost">Create Post</Link>
          )}
        </div>
        <div className="user">
          {user && (
            <>
              <p>{user?.displayName}</p>
              <img src={user?.photoURL || ""} width="30" height="30" />
              <button onClick={signUserOut}>Log Out</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
