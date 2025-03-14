import "./SignIn.css";
import { auth, provider } from "../../config/firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
