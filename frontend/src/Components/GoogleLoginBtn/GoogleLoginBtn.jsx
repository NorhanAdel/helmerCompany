import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function GoogleLoginBtn() {
  const navigate = useNavigate();

  const handleLogin = async (credentialResponse) => {
    try {
      const res = await axios.post("/api/auth/google-login", {
        token: credentialResponse.credential,
      });
      localStorage.setItem("helmer_token", res.data.token);
      navigate("/");
    } catch (err) {
      console.error("Google login failed", err);
    }
  };

  return (
    <div className="google-login-btn">
      <GoogleLogin
        onSuccess={handleLogin}
        onError={() => console.log("Login Failed")}
      />
    </div>
  );
}

export default GoogleLoginBtn;
