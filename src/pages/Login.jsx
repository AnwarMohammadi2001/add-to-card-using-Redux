import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/authSlice";
import { auth } from "../firebaseConfig";

const handleLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Dispatch only serializable data
    dispatch(
      setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || "", // Use only the basic info that is serializable
      })
    );
  } catch (error) {
    console.error("Login failed", error.message);
  }
};

export default handleLogin;
